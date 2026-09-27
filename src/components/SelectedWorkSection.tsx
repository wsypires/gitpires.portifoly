import React, { useState } from 'react';
import { SELECTED_PROJECTS, ProjectItem } from '../data/servicesData';
import { ArrowRight, Eye, CheckCircle2, ExternalLink, Globe } from 'lucide-react';

interface SelectedWorkSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? SELECTED_PROJECTS 
    : filter === 'online'
    ? SELECTED_PROJECTS.filter(p => !!p.liveUrl)
    : SELECTED_PROJECTS.filter(p => 
        p.category.toLowerCase().includes(filter.toLowerCase()) || 
        p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section id="selected-work" className="relative py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b-2 border-neutral-900 bg-[#FF5C00]/10 w-full">
      <div className="w-full">
        
        {/* Banner Header matching neo-pop aesthetic */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Title with left arrow */}
            <div className="flex items-center gap-3">
              <h2 className="font-display font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tighter">
                SELECTED WORK
              </h2>
              <span className="text-3xl sm:text-5xl text-[#FF5C00] font-serif">
                ⮜
              </span>
            </div>

            {/* Black Tape Badge with Handwritten Text */}
            <div className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-neutral-950 text-white px-3.5 py-1.5 rounded-md border border-neutral-800 shadow-[2px_2px_0px_#FF5C00]">
                <p className="font-handwriting text-lg sm:text-xl font-bold text-[#FF5C00]">
                  Cases &amp; Soluções Online produzidas pela Agency Git Pires
                </p>
              </div>
              <svg className="hidden sm:block absolute -right-6 -bottom-4 w-6 h-6 text-neutral-900" viewBox="0 0 24 24" fill="none">
                <path d="M4 4 C10 12, 14 14, 20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 18 L20 18 L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm p-1.5 rounded-xl border-2 border-neutral-900 shadow-[2px_2px_0px_#000] overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Todos (5)
            </button>
            <button
              onClick={() => setFilter('saas')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'saas'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              SaaS &amp; Gestão
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'web'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setFilter('briefing')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'briefing'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Onboarding &amp; UX
            </button>
            <button
              onClick={() => setFilter('b2b')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'b2b'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Prospecção B2B
            </button>
            <button
              onClick={() => setFilter('fintech')}
              className={`px-3 py-1 text-xs font-bold uppercase rounded-lg transition-all whitespace-nowrap ${
                filter === 'fintech'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              FinTech
            </button>
          </div>

        </div>

        {/* Project Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white border-2 border-neutral-900 rounded-2xl p-3 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="w-full aspect-4/3 rounded-xl overflow-hidden border border-neutral-900 mb-3 relative bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Overlay hover cue */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
                  <div className="bg-white/95 backdrop-blur-sm text-neutral-950 px-3 py-1.5 rounded-full text-xs font-bold border border-neutral-900 shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#FF5C00]" />
                    <span>Visualizar Projeto</span>
                  </div>

                  {project.liveUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-full text-[11px] font-bold border border-emerald-950 shadow-sm flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Abrir Site Oficial</span>
                    </button>
                  )}
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm text-neutral-900 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border border-neutral-900 shadow-xs">
                  {project.category}
                </div>

                {/* Online Badge if Live */}
                {project.liveUrl && (
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border border-emerald-950 shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Ao Vivo</span>
                  </div>
                )}
              </div>

              {/* Title & Arrow Button in middle row */}
              <div className="flex items-start justify-between gap-2 pt-1 px-1">
                <div className="min-w-0">
                  <h3 className="font-display font-black text-sm uppercase text-neutral-950 tracking-tight group-hover:text-[#FF5C00] transition-colors leading-tight truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium line-clamp-2 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Action button: Opens direct link if liveUrl exists, or modal */}
                {project.liveUrl ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    }}
                    title={`Abrir ${project.title} em nova aba`}
                    aria-label={`Abrir ${project.title} em nova aba`}
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-emerald-50 text-emerald-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_#000] shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    aria-label={`Ver projeto ${project.title}`}
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-white group-hover:bg-[#FF5C00] group-hover:text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_#000] shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-900 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}
              </div>

              {/* Live URL Pill if available */}
              {project.liveUrl && (
                <div className="mt-2 px-1">
                  <span className="text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 block truncate">
                    {project.liveUrl.replace(/^https?:\/\//, '')}
                  </span>
                </div>
              )}

              {/* Results Metric Highlight */}
              <div className="mt-2.5 pt-2 border-t border-dashed border-neutral-200 px-1 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{project.metrics}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
