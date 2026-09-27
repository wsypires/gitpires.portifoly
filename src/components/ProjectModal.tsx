import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../data/servicesData';
import { 
  X, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageCircle, 
  ExternalLink, 
  Laptop, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  Globe, 
  FileText,
  Copy,
  Check
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenWhatsAppForProject: (projectTitle: string) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenWhatsAppForProject,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>('details');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // If the project has liveUrl, start on preview tab
      if (project.liveUrl) {
        setActiveTab('preview');
      } else {
        setActiveTab('details');
      }
      setIsIframeLoading(true);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyLink = () => {
    if (project.liveUrl) {
      navigator.clipboard.writeText(project.liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenLiveUrl = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleReloadIframe = () => {
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-white border-3 border-neutral-900 rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#000] overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Project Info, Tab Switcher & Close Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3.5 border-b-2 border-neutral-900 bg-[#FAF8F5] gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-[#FFE600] border border-neutral-900 rounded-md shadow-[1px_1px_0px_#000]">
              {project.category}
            </span>
            <span className="text-xs font-bold text-neutral-600 uppercase">
              {project.client} · {project.year}
            </span>

            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider border border-emerald-900 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Online
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {/* Tab Switcher if liveUrl is present */}
            {project.liveUrl && (
              <div className="flex items-center bg-neutral-200/80 p-1 rounded-xl border border-neutral-900">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase rounded-lg transition-all ${
                    activeTab === 'preview'
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#FF5C00]" />
                  <span>Visualização ao Vivo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase rounded-lg transition-all ${
                    activeTab === 'details'
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF5C00]" />
                  <span>Estudo & Detalhes</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-neutral-100 border-2 border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Browser Preview */}
        {activeTab === 'preview' && project.liveUrl ? (
          <div className="flex-1 flex flex-col overflow-hidden bg-neutral-900">
            {/* Browser Window Chrome / Address Bar */}
            <div className="px-3 sm:px-4 py-2.5 bg-neutral-950 border-b-2 border-neutral-800 flex items-center justify-between gap-3 text-neutral-300">
              {/* Fake Traffic Lights */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-600 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-600 inline-block" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-xl mx-auto flex items-center bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-1.5 text-xs text-neutral-300 gap-2 overflow-hidden shadow-inner">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate font-mono text-[11px] text-neutral-200 flex-1 select-all">
                  {project.liveUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Copiar URL"
                  className="p-1 hover:text-white transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={handleReloadIframe}
                  title="Recarregar visualização"
                  className="p-1 hover:text-white transition-colors shrink-0"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Device Mode Switcher (Desktop / Tablet / Mobile) */}
              <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 shrink-0">
                <button
                  type="button"
                  onClick={() => setDeviceMode('desktop')}
                  title="Visualização Desktop"
                  className={`p-1.5 rounded transition-all ${
                    deviceMode === 'desktop' ? 'bg-[#FF5C00] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceMode('tablet')}
                  title="Visualização Tablet"
                  className={`p-1.5 rounded transition-all ${
                    deviceMode === 'tablet' ? 'bg-[#FF5C00] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceMode('mobile')}
                  title="Visualização Mobile"
                  className={`p-1.5 rounded transition-all ${
                    deviceMode === 'mobile' ? 'bg-[#FF5C00] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Direct Open in new tab button */}
              <button
                type="button"
                onClick={handleOpenLiveUrl}
                className="hidden md:flex items-center gap-1.5 bg-[#FF5C00] hover:bg-[#e04f00] text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-950 transition-all shrink-0"
              >
                <span>Abrir Nova Aba</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Iframe Viewport Container */}
            <div className="flex-1 bg-neutral-800/80 p-2 sm:p-4 flex items-center justify-center overflow-auto min-h-[420px] sm:min-h-[500px]">
              <div
                className={`h-full w-full transition-all duration-300 flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-neutral-950 relative ${
                  deviceMode === 'desktop'
                    ? 'w-full max-w-full'
                    : deviceMode === 'tablet'
                    ? 'w-full max-w-[768px]'
                    : 'w-full max-w-[390px]'
                }`}
                style={{ height: '58vh' }}
              >
                {isIframeLoading && (
                  <div className="absolute inset-0 z-10 bg-neutral-900/90 flex flex-col items-center justify-center text-white gap-3 p-4">
                    <div className="w-8 h-8 border-3 border-[#FF5C00] border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Carregando aplicação ao vivo...
                    </p>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src={project.liveUrl}
                  title={`Visualização de ${project.title}`}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  onLoad={() => setIsIframeLoading(false)}
                />
              </div>
            </div>

            {/* Live Preview Info Bar with Quick Link */}
            <div className="px-4 py-2 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-neutral-400 text-xs gap-3">
              <span className="truncate">
                💡 Interaja diretamente com a aplicação no frame ou abra em tela cheia para navegar.
              </span>
              <button
                type="button"
                onClick={handleOpenLiveUrl}
                className="text-[#FF5C00] hover:text-[#ff782e] font-bold inline-flex items-center gap-1 shrink-0"
              >
                <span>Acessar {project.title}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Tab 2: Full Case Study & Project Details */
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Live Banner Alert if Available */}
            {project.liveUrl && (
              <div className="bg-emerald-50 border-2 border-emerald-700 text-emerald-950 p-3.5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_#047857]">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-emerald-900">
                      Projeto Online &amp; em Produção
                    </p>
                    <p className="text-xs text-emerald-800 font-medium">
                      Este projeto está publicado e disponível para navegação em tempo real.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-950 flex items-center gap-1 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Ver no Simulador</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenLiveUrl}
                    className="bg-white hover:bg-neutral-100 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-900 flex items-center gap-1 transition-colors"
                  >
                    <span>Abrir Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Main Visual Image */}
            <div className="w-full aspect-video sm:aspect-2/1 rounded-2xl overflow-hidden border-2 border-neutral-900 shadow-[4px_4px_0px_#000] relative bg-neutral-100 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Project Header */}
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-base text-neutral-600 font-semibold mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Metrics Highlight Callout */}
            <div className="bg-emerald-50 border-2 border-emerald-800 text-emerald-950 p-4 rounded-2xl flex items-center gap-3 shadow-[2px_2px_0px_#065f46]">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
                  Impacto &amp; Resultados Atingidos:
                </span>
                <p className="text-sm font-bold">
                  {project.metrics}
                </p>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 mb-2">
                Sobre o Projeto:
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed font-medium">
                {project.overview}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900 mb-3">
                Entregáveis &amp; Recursos Desenvolvidos:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D30] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-bold text-neutral-600 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-300">
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        )}

        {/* Modal Footer with Actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-neutral-50 border-t-2 border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
            {project.liveUrl && (
              <button
                type="button"
                onClick={handleOpenLiveUrl}
                className="inline-flex items-center gap-1.5 font-bold text-neutral-900 hover:text-[#FF5C00] transition-colors"
              >
                <span>Visitar {project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF5C00]" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {project.liveUrl && (
              <button
                type="button"
                onClick={handleOpenLiveUrl}
                className="flex-1 sm:flex-initial bg-white hover:bg-neutral-100 text-neutral-900 px-4 py-2.5 rounded-xl border-2 border-neutral-900 font-display font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#FF5C00]" />
                <span>Abrir Site</span>
              </button>
            )}

            <button
              onClick={() => onOpenWhatsAppForProject(project.title)}
              className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 px-5 py-2.5 rounded-xl border-2 border-neutral-900 font-display font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
