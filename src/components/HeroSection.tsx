import React from 'react';
import { Globe, ArrowDown, Sparkles, Zap, Star, Instagram, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenWhatsApp: () => void;
  onViewProjects?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreServices, onOpenWhatsApp, onViewProjects }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b-2 border-neutral-900 overflow-hidden bg-[#FAF8F5] w-full">
      {/* Decorative Halftone Background Accents */}
      <div className="absolute top-12 left-6 w-32 h-32 bg-halftone-orange opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 right-12 w-48 h-48 bg-halftone opacity-15 pointer-events-none" />

      {/* Floating Orange swoosh brand gradient in background */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#FF5C00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        
        {/* Left Column: Bold Typography & Value Proposition */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10">
          
          {/* Script "HELLO!" text */}
          <div className="relative inline-block mb-1">
            <span className="font-handwriting text-5xl sm:text-7xl lg:text-8xl font-bold text-[#FF5C00] tracking-wide transform -rotate-3 block">
              HELLO!
            </span>
            <span className="absolute -top-3 -right-6 text-2xl text-neutral-800 select-none">🕶️</span>
          </div>

          {/* Giant "WE'RE ✻ GIT PIRES" */}
          <div className="relative leading-none mb-4 select-none">
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-neutral-950 uppercase flex flex-wrap items-baseline gap-x-3">
              <span>AGENCY</span>
              <span className="inline-block text-[#FF5C00] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif animate-pulse">
                ✻
              </span>
              <span className="w-full sm:w-auto tracking-tight block text-neutral-950">GIT PIRES</span>
            </h1>
          </div>

          {/* Yellow Sticker with Handwritten text */}
          <div className="relative inline-block mb-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="bg-[#FFE600] border-2 border-neutral-900 px-5 py-3 shadow-[4px_4px_0px_#000] rounded-sm">
              <p className="font-handwriting text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 leading-tight">
                Criamos experiências digitais que conectam &amp; convertem clientes.
              </p>
            </div>
            {/* Orange tape strips on sides */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-6 bg-[#FF5C00] border border-neutral-900 transform -rotate-12" />
          </div>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 font-medium max-w-xl mb-8 leading-relaxed">
            Sites estratégicos de alta conversão e páginas integradas ao WhatsApp para destacar sua marca e gerar mais clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreServices}
              className="bg-[#FF5C00] hover:bg-[#e04f00] text-white border-2 border-neutral-900 font-display font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2.5 group"
            >
              <span>Ver Serviços</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {onViewProjects && (
              <button
                onClick={onViewProjects}
                className="bg-[#FFE600] hover:bg-[#ebd300] text-neutral-950 border-2 border-neutral-900 font-display font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
              >
                <span>Projetos Realizados</span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              </button>
            )}

            <button
              onClick={onOpenWhatsApp}
              className="bg-white hover:bg-neutral-50 text-neutral-950 border-2 border-neutral-900 font-display font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2.5"
            >
              <Zap className="w-4 h-4 text-[#FF5C00]" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Right Column: LARGE Hero Image of the Mascot with 8-bit Sunglasses & Pop Badges */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center p-2 sm:p-4">
          
          {/* Halftone patterned box behind circle */}
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-halftone opacity-30 rounded-2xl pointer-events-none" />

          {/* Main Large Graphic Container with Mascot */}
          <div className="relative w-full max-w-[420px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[620px] xl:max-w-[680px] 2xl:max-w-[740px] aspect-square">
            
            {/* Orange Curved Swoosh Background Circle - LARGE */}
            <div className="w-full h-full rounded-full bg-[#FF5C00] border-4 sm:border-5 border-neutral-900 shadow-[10px_10px_0px_#000] overflow-hidden relative group">
              <img
                src="/images/git_pires_mascot_1790288311949.webp"
                alt="Agency Git Pires Mascot com óculos 8-bit"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="900"
                height="900"
              />

              {/* Bottom Brand Ribbon */}
              <div className="absolute bottom-0 inset-x-0 bg-neutral-950/95 backdrop-blur-xs py-3 px-6 text-center border-t-2 border-neutral-900">
                <span className="font-display font-black text-sm sm:text-base uppercase tracking-widest text-white">
                  AGENCY <span className="text-[#FF5C00]">GIT PIRES</span> · SOLUÇÕES DIGITAIS
                </span>
              </div>
            </div>

            {/* Sticker 1: Blue Badge with Lightning Bolt */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-3 sm:-left-6 bg-[#3B82F6] text-white border-2 border-neutral-900 p-3 sm:p-4 rounded-2xl shadow-[5px_5px_0px_#000] transform -rotate-6 hover:rotate-0 transition-transform z-20">
              <div className="flex items-center gap-2.5 font-display font-black text-xs sm:text-sm tracking-tight uppercase leading-tight">
                <div className="w-8 h-8 bg-white text-[#3B82F6] rounded-md flex items-center justify-center shadow-inner font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <span className="block">DIGITAL SOLUTIONS</span>
                  <span className="block text-yellow-300">IS OUR SUPERPOWER</span>
                </div>
              </div>
            </div>

            {/* Sticker 2: Instagram direct handle badge */}
            <a
              href="https://www.instagram.com/git.pires/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 -right-3 sm:-top-6 sm:-right-4 bg-white border-2 border-neutral-900 rounded-full p-2.5 shadow-[4px_4px_0px_#000] transform rotate-12 hover:scale-110 transition-transform z-20"
            >
              <div className="w-16 h-16 rounded-full bg-[#FFE600] border border-neutral-900 flex flex-col items-center justify-center text-center">
                <Instagram className="w-5 h-5 text-neutral-900 mb-0.5" />
                <span className="text-[8px] font-black uppercase text-neutral-900">@git.pires</span>
              </div>
            </a>

            {/* Sticker 3: Pixel icon stamp */}
            <div className="absolute top-1/4 -left-4 sm:-left-6 bg-[#FF5C00] text-white font-bold text-xs p-2.5 rounded-full border-2 border-neutral-900 shadow-[3px_3px_0px_#000] animate-bounce" style={{ animationDuration: '3s' }}>
              <Star className="w-5 h-5 fill-white" />
            </div>

            {/* Decorative hand-drawn bursts */}
            <div className="absolute -bottom-8 right-10 flex items-center gap-1.5 select-none pointer-events-none">
              <div className="w-2 h-8 bg-[#FF5C00] transform rotate-45 rounded-full" />
              <div className="w-2 h-10 bg-[#FF5C00] rounded-full" />
              <div className="w-2 h-8 bg-[#FF5C00] transform -rotate-45 rounded-full" />
            </div>

            {/* Squiggly doodle arrow */}
            <svg className="absolute -bottom-12 -right-10 w-24 h-24 text-neutral-900 hidden sm:block pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M10,20 Q40,10 50,40 T90,70" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="4 2" />
              <polygon points="90,65 95,75 83,72" fill="currentColor" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};
