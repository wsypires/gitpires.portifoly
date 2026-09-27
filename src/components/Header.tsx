import React from 'react';
import { MessageCircle, Instagram, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsApp: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp, onScrollToSection }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b-2 border-neutral-900 px-4 sm:px-8 lg:px-12 xl:px-16 py-3 transition-all w-full">
      <div className="w-full flex items-center justify-between gap-4">
        
        {/* Brand Wordmark with Agency Git Pires Pixel Mark */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-2.5 text-left group"
          >
            {/* Git Pires Pixel Cubes Badge */}
            <div className="relative w-9 h-9 bg-neutral-950 rounded-xl border-2 border-neutral-900 flex items-center justify-center shadow-[2px_2px_0px_#FF5C00] group-hover:rotate-6 transition-transform">
              <div className="grid grid-cols-2 gap-0.5 p-1">
                <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-xs" />
                <div className="w-2.5 h-2.5 bg-white rounded-xs" />
                <div className="w-2.5 h-2.5 bg-neutral-700 rounded-xs" />
                <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-xs" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#FF5C00] leading-none">
                  AGENCY
                </span>
                <span className="text-[9px] bg-neutral-900 text-white font-bold px-1.5 py-0.2 rounded-xs">
                  PRO
                </span>
              </div>
              <span className="block font-display font-black text-xl tracking-tight uppercase leading-none text-neutral-950 group-hover:text-[#FF5C00] transition-colors">
                Git Pires
              </span>
              <span className="text-[9px] font-bold tracking-widest uppercase text-neutral-500 block leading-tight">
                Soluções Digitais
              </span>
            </div>
          </button>
        </div>

        {/* Clean Actions: Instagram @git.pires & WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onScrollToSection('services-catalog')}
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-black uppercase text-neutral-800 hover:text-[#FF5C00] transition-colors"
          >
            Serviços
          </button>

          <button
            onClick={() => onScrollToSection('selected-work')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase text-neutral-800 hover:text-[#FF5C00] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
            <span>Trabalhos</span>
          </button>

          {/* Instagram @git.pires Button */}
          <a
            href="https://www.instagram.com/git.pires/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white hover:bg-neutral-50 border-2 border-neutral-900 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-tight text-neutral-900 shadow-[2px_2px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            title="Siga @git.pires no Instagram"
          >
            <Instagram className="w-4 h-4 text-[#FF5C00]" />
            <span>@git.pires</span>
            <ExternalLink className="w-3 h-3 text-neutral-400 hidden sm:inline" />
          </a>

          <button
            onClick={onOpenWhatsApp}
            className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#e04f00] text-white border-2 border-neutral-900 px-4 py-2 rounded-full font-display font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>

      </div>
    </header>
  );
};
