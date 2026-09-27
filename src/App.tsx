/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Check, 
  Info, 
  Instagram, 
  ArrowRight, 
  ExternalLink, 
  ChevronRight, 
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ProjectModal } from './components/ProjectModal';
import { ALL_SERVICES, ServiceItem, ProjectItem } from './data/servicesData';

// --- COMPONENT: Service Modal (Self-Contained) ---
interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenWhatsAppService: (service: ServiceItem) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenWhatsAppService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border-3 border-neutral-900 rounded-3xl shadow-[8px_8px_0px_#000] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-neutral-900 bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <span className="text-2xl select-none">{service.emoji}</span>
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-[#FF5C00] text-white border border-neutral-900 rounded-full shadow-xs">
              {service.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 border-2 border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[2px_2px_0px_#000] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <h3 className="font-display font-black text-2xl uppercase text-neutral-950 tracking-tight">
            {service.title}
          </h3>
          <p className="text-sm text-neutral-700 font-semibold">
            {service.shortDescription}
          </p>
          <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-neutral-900 text-xs text-neutral-700 font-medium leading-relaxed">
            {service.detailedDescription}
          </div>
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-neutral-900 mb-2">
              Incluso na entrega do serviço:
            </h4>
            <div className="space-y-1.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block">Prazo Estimado</span>
              <span className="text-xs font-bold text-neutral-900">{service.estimatedDays}</span>
            </div>
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              <span className="text-[10px] font-bold text-neutral-500 uppercase block">Indicado para</span>
              <span className="text-xs font-bold text-neutral-900 line-clamp-1">{service.idealFor}</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-neutral-50 border-t-2 border-neutral-900 flex items-center justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-4 py-2 border-2 border-neutral-900 rounded-xl text-xs font-bold uppercase hover:bg-neutral-100 transition-colors"
          >
            Fechar
          </button>
          <button
            onClick={() => onOpenWhatsAppService(service)}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 px-5 py-2.5 rounded-xl border-2 border-neutral-900 font-display font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Pedir Orçamento no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: Services Catalog Section (Self-Contained) ---
interface ServicesCatalogSectionProps {
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenWhatsAppService: (service: ServiceItem) => void;
}

const ServicesCatalogSection: React.FC<ServicesCatalogSectionProps> = ({
  onOpenServiceModal,
  onOpenWhatsAppService,
}) => {
  return (
    <section id="services-catalog" className="py-16 border-b-2 border-neutral-900 bg-[#FAF8F5] w-full overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE600] border-2 border-neutral-900 rounded-full text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            <span>Catálogo Completo · 20 Soluções Estratégicas</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-neutral-950">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-sm sm:text-base font-semibold text-neutral-600 mt-1 max-w-xl">
            Soluções digitais completas para posicionar sua marca, atrair clientes qualificados e converter pelo WhatsApp.
          </p>
        </div>
      </div>

      {/* Grid of All 20 Services */}
      <div className="px-4 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {ALL_SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white border-2 border-neutral-900 rounded-2xl p-5 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-3xl select-none">{service.emoji}</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-neutral-900 bg-neutral-100 text-neutral-800">
                  {service.categoryLabel}
                </span>
              </div>
              <h3 className="font-display font-black text-base uppercase text-neutral-950 mb-1.5 leading-tight group-hover:text-[#FF5C00] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-neutral-600 font-medium line-clamp-3 mb-4 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-200">
              <button
                onClick={() => onOpenServiceModal(service)}
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-900 rounded-xl py-2 text-xs font-bold uppercase flex items-center justify-center gap-1 transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Detalhes</span>
              </button>
              <button
                onClick={() => onOpenWhatsAppService(service)}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 border border-neutral-900 rounded-xl py-2 text-xs font-black uppercase flex items-center justify-center gap-1 shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENT: Footer CTA Section (Self-Contained) ---
interface FooterCtaSectionProps {
  onOpenWhatsApp: () => void;
}

const FooterCtaSection: React.FC<FooterCtaSectionProps> = ({ onOpenWhatsApp }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Sites Integrados ao WhatsApp');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Agency Git Pires! Meu nome é ${formName} (${formEmail}). Gostaria de um orçamento para: *${formService}*. Poderia me passar mais informações?`
    );
    window.open(`https://wa.me/556792144061?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="border-t-2 border-neutral-900 w-full bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-neutral-900">
        {/* Left Column: Yellow Neo-Brutalist Form Banner */}
        <div className="lg:col-span-7 bg-[#FFE600] p-8 sm:p-12 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-neutral-900 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-neutral-950 text-white font-mono text-xs uppercase px-3 py-1 rounded-sm border border-neutral-900 mb-4 shadow-[2px_2px_0px_#FF5C00]">
              /// VAMOS CONVERSAR
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl text-neutral-950 tracking-tighter uppercase leading-[0.88] mb-4">
              VAMOS CRIAR ALGO INCRÍVEL JUNTOS!
            </h2>
            <p className="text-base sm:text-lg font-bold text-neutral-900 mb-8 max-w-lg">
              Pronto para tirar sua ideia do papel com um site moderno de alta conversão? Preencha os campos ou fale direto no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="bg-white/95 border-2 border-neutral-900 p-5 sm:p-6 rounded-2xl shadow-[6px_6px_0px_#000] max-w-lg space-y-3.5">
              <div>
                <label className="block text-[11px] font-black uppercase text-neutral-900 mb-1">Seu Nome / Empresa</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Ex: João Silva"
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-neutral-900 mb-1">Seu E-mail ou WhatsApp</label>
                <input
                  type="text"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Ex: contato@suaempresa.com"
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase text-neutral-900 mb-1">Solução Desejada</label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-neutral-900 focus:outline-none"
                >
                  <option value="Sites Integrados ao WhatsApp">Sites Integrados ao WhatsApp</option>
                  <option value="Sites para Divulgação de Serviços">Sites para Divulgação de Serviços</option>
                  <option value="Landing Pages de Alta Conversão">Landing Pages de Alta Conversão</option>
                  <option value="Painéis Administrativos / SaaS">Painéis Administrativos / SaaS</option>
                  <option value="Sistemas em Tempo Real / APIs">Sistemas em Tempo Real / APIs</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 font-display font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border-2 border-neutral-900 shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar Solicitação no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Orange Brand Details & Direct Social Links */}
        <div className="lg:col-span-5 bg-[#FF5C00] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-white text-neutral-950 font-mono text-xs uppercase px-3 py-1 rounded-sm border border-neutral-900 mb-6 shadow-[2px_2px_0px_#000]">
              CONTATOS DIRETOS
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight mb-4">
              AGENCY GIT PIRES
            </h3>
            <p className="text-sm font-semibold text-orange-100 mb-8 leading-relaxed">
              Desenvolvimento de sites de alta conversão, portais corporativos, páginas de captura e aplicações sob medida.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/556792144061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/20 border border-white/20 hover:bg-neutral-950/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center border border-neutral-900 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-orange-200 block">WhatsApp Oficial</span>
                    <span className="text-xs font-bold text-white">+55 (67) 9214-4061</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/git.pires/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/20 border border-white/20 hover:bg-neutral-950/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white text-neutral-950 flex items-center justify-center border border-neutral-900 shadow-sm">
                    <Instagram className="w-5 h-5 text-[#FF5C00]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-orange-200 block">Instagram Oficial</span>
                    <span className="text-xs font-bold text-white">@git.pires</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-orange-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-xs text-orange-200 font-medium">
              Atendimento em todo o Brasil com desenvolvimento ágil e suporte dedicado.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-950 py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-white text-xs font-bold gap-3">
        <span>© 2025 AGENCY GIT PIRES · TODOS OS DIREITOS RESERVADOS</span>
        <button
          onClick={onOpenWhatsApp}
          className="bg-[#FF5C00] hover:bg-[#e04f00] text-white px-5 py-2 rounded-full border-2 border-neutral-900 uppercase font-black transition-colors"
        >
          SOLICITAR SEU SITE AGORA 🚀
        </button>
      </div>
    </footer>
  );
};

// --- COMPONENT: Floating WhatsApp Widget (Self-Contained) ---
const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const sendWhatsApp = (customText?: string) => {
    const textToSend = customText || userMsg || 'Olá Agency Git Pires! Vi o portfólio de vocês e gostaria de mais informações.';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/556792144061?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white border-3 border-neutral-900 rounded-3xl shadow-[8px_8px_0px_#000] overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-[#FF5C00] text-white p-4 border-b-2 border-neutral-900 flex items-center justify-between">
            <div>
              <h4 className="font-display font-black text-sm uppercase leading-none">Agency Git Pires</h4>
              <p className="text-[10px] font-bold text-orange-100 mt-0.5">+55 (67) 9214-4061 · @git.pires</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-950 flex items-center justify-center border border-neutral-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 bg-[#FAF8F5]">
            <p className="text-xs text-neutral-800 font-medium mb-3">Qual solução você deseja cotar para seu negócio hoje?</p>
            <form onSubmit={(e) => { e.preventDefault(); sendWhatsApp(); }} className="flex items-center gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="flex-1 text-xs px-3 py-2 bg-neutral-100 border border-neutral-300 rounded-xl focus:outline-none"
              />
              <button type="submit" className="w-9 h-9 bg-[#FF5C00] text-white border-2 border-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 border-3 border-neutral-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] hover:scale-105 transition-all"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-[2.5]" />
      </button>
    </div>
  );
};

// --- MAIN APPLICATION ENTRY ---
export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralWhatsApp = () => {
    const text = encodeURIComponent('Olá Agency Git Pires! Vi o portfólio oficial de vocês e gostaria de solicitar um orçamento para o meu site.');
    window.open(`https://wa.me/556792144061?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsAppService = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Olá Agency Git Pires! Gostaria de um orçamento para o serviço: *${service.title}* (${service.emoji}).\n\nPoderiam me enviar mais detalhes sobre as etapas e prazos de desenvolvimento?`
    );
    window.open(`https://wa.me/556792144061?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleOpenWhatsAppForProject = (projectTitle: string) => {
    const text = encodeURIComponent(
      `Olá Agency Git Pires! Vi o projeto *${projectTitle}* no portfólio de vocês e gostaria de desenvolver uma solução semelhante para o meu negócio. Como podemos dar início?`
    );
    window.open(`https://wa.me/556792144061?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-neutral-900 font-sans selection:bg-[#FF5C00] selection:text-white flex flex-col w-full">
      {/* Top Header with Git Pires and Instagram */}
      <Header
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section with Mascot */}
        <HeroSection
          onExploreServices={() => scrollToSection('services-catalog')}
          onViewProjects={() => scrollToSection('selected-work')}
          onOpenWhatsApp={handleOpenGeneralWhatsApp}
        />

        {/* 20 Services Catalog Grid */}
        <ServicesCatalogSection
          onOpenServiceModal={(service) => setActiveServiceModal(service)}
          onOpenWhatsAppService={handleOpenWhatsAppService}
        />

        {/* Selected Work & 5 Live Realized Projects Section */}
        <SelectedWorkSection
          onSelectProject={(project) => setActiveProjectModal(project)}
        />
      </main>

      {/* Footer & Contact with Instagram @git.pires */}
      <FooterCtaSection
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
      />

      {/* Floating WhatsApp Quick Action Widget */}
      <FloatingWhatsApp />

      {/* Service Details Modal */}
      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onOpenWhatsAppService={handleOpenWhatsAppService}
      />

      {/* Project Details & Live Visualizer Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onOpenWhatsAppForProject={handleOpenWhatsAppForProject}
      />
    </div>
  );
}
