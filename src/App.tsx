/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Check, 
  Info, 
  Instagram, 
  ArrowRight, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Clock, 
  Users,
  MapPin,
  Heart
} from 'lucide-react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ProjectModal } from './components/ProjectModal';
import { ALL_SERVICES, ServiceItem, ProjectItem } from './data/servicesData';

/* ==========================================================================
   ORIGINAL SERVICE MODAL COMPONENT (WITH MOCKUP IMAGE, DELIVERABLES & CTAs)
   ========================================================================== */
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-white border-3 border-neutral-900 rounded-3xl shadow-[8px_8px_0px_#000] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-neutral-900 bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{service.emoji}</span>
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-[#FF5C00] text-white border border-neutral-900 rounded-full">
              {service.categoryLabel}
            </span>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              Agency Git Pires
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 border-2 border-neutral-900 flex items-center justify-center text-neutral-900 shadow-[2px_2px_0px_#000] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* High Resolution Mockup Image for the Service */}
          <div className="w-full aspect-16/9 rounded-2xl overflow-hidden border-2 border-neutral-900 shadow-[4px_4px_0px_#000] relative bg-neutral-100">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute top-3 left-3 bg-neutral-950/90 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-neutral-700">
              Mockup Visual Exclusivo · Agency Git Pires
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5C00]">
                Escopo de Desenvolvimento
              </span>
              {service.badge && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FFE600] text-neutral-950 border border-neutral-900">
                  {service.badge}
                </span>
              )}
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 uppercase tracking-tight leading-snug">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 font-semibold mt-2">
              {service.shortDescription}
            </p>
          </div>

          {/* Strategic Context */}
          <div className="bg-[#FAF8F5] p-4 rounded-2xl border-2 border-neutral-900">
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-neutral-900 mb-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5C00]" />
              <span>Por que este formato funciona:</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              {service.detailedDescription}
            </p>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-wider text-neutral-900 mb-3">
              O Que Está Incluso no Projeto:
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-300 bg-white">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-neutral-500 mb-1">
                <Users className="w-4 h-4 text-neutral-700" />
                <span>Ideal Para:</span>
              </span>
              <p className="text-xs text-neutral-800 font-medium">
                {service.idealFor}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-300 bg-white">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-neutral-500 mb-1">
                <Clock className="w-4 h-4 text-neutral-700" />
                <span>Prazo Estimado de Entrega:</span>
              </span>
              <p className="text-xs text-neutral-800 font-extrabold text-emerald-800">
                {service.estimatedDays}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t-2 border-neutral-900 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-neutral-400 bg-white hover:bg-neutral-100 text-xs font-bold uppercase transition-colors"
          >
            Fechar
          </button>

          <button
            onClick={() => onOpenWhatsAppService(service)}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 px-5 py-2.5 rounded-xl border-2 border-neutral-900 font-display font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Pedir Orçamento no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};

/* ==========================================================================
   ORIGINAL SERVICES CATALOG SECTION (WITH 2 OPPOSING CONTINUOUS CAROUSELS)
   ========================================================================== */
interface ServicesCatalogSectionProps {
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenWhatsAppService: (service: ServiceItem) => void;
}

const ServicesCatalogSection: React.FC<ServicesCatalogSectionProps> = ({
  onOpenServiceModal,
  onOpenWhatsAppService,
}) => {
  // Divide 20 services into two sets of 10 for the two opposing carousels
  const carousel1Services = useMemo(() => ALL_SERVICES.slice(0, 10), []);
  const carousel2Services = useMemo(() => ALL_SERVICES.slice(10, 20), []);

  const renderCard = (service: ServiceItem, keySuffix: string) => {
    return (
      <div
        key={`${service.id}-${keySuffix}`}
        className="w-[290px] sm:w-[330px] md:w-[360px] shrink-0 mx-3 bg-white border-2 border-neutral-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_#000] hover:shadow-[7px_7px_0px_#FF5C00] hover:-translate-y-1.5 transition-all flex flex-col justify-between group select-none"
      >
        {/* Visual Mockup Image - Original Lightweight & Optimized */}
        <div 
          className="w-full aspect-16/10 relative overflow-hidden border-b-2 border-neutral-900 bg-neutral-100 cursor-pointer"
          onClick={() => onOpenServiceModal(service)}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            loading="lazy"
            decoding="async"
            width="360"
            height="225"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
            }}
          />

          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-85" />

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3 bg-neutral-950/90 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-neutral-700 shadow-sm">
            {service.categoryLabel}
          </div>

          {/* Bottom Preview info */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
            <span className="text-2xl drop-shadow-md">{service.emoji}</span>
            <div className="bg-white/95 text-neutral-950 px-2.5 py-0.5 rounded text-[10px] font-extrabold flex items-center gap-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-3 h-3 text-[#FF5C00]" />
              <span>Ver Detalhes</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 
              onClick={() => onOpenServiceModal(service)}
              className="font-display font-black text-base sm:text-lg text-neutral-950 uppercase tracking-tight mb-1.5 leading-snug cursor-pointer group-hover:text-[#FF5C00] transition-colors"
            >
              {service.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 font-medium mb-3 leading-relaxed line-clamp-2">
              {service.shortDescription}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t-2 border-neutral-900 grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenServiceModal(service)}
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-900 rounded-xl py-2 px-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-neutral-600" />
              <span>Detalhes</span>
            </button>

            <button
              onClick={() => onOpenWhatsAppService(service)}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 border border-neutral-900 rounded-xl py-2 px-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section id="services-catalog" className="relative py-14 sm:py-18 border-b-2 border-neutral-900 bg-[#FAF8F5] w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-8">
        <span className="text-xs font-black uppercase tracking-widest text-[#FF5C00] block mb-1">
          Agency Git Pires · Soluções Digitais
        </span>
        <h2 className="font-display font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tighter leading-tight">
          NOSSOS SERVIÇOS
        </h2>
      </div>

      {/* TWO CONTINUOUS OPPOSING CAROUSELS CONSUMING ALL LATERAL EDGES */}
      <div className="w-full space-y-8">
        
        {/* CAROUSEL 1: Moving to the LEFT */}
        <div className="w-full relative">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-2 flex items-center justify-between">
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] animate-ping" />
              ⮜ Sites Estratégicos &amp; Captação
            </span>
          </div>

          {/* Full Bleed Infinite Carousel Track (100% width, edge-to-edge) */}
          <div className="w-full overflow-hidden py-3">
            <div className="animate-marquee-left" style={{ animationDuration: '40s' }}>
              {/* Set of 10 Cards */}
              {carousel1Services.map((service) => renderCard(service, 'c1-orig'))}

              {/* Duplicated for Seamless Infinite Loop */}
              {carousel1Services.map((service) => renderCard(service, 'c1-dup'))}
            </div>
          </div>
        </div>

        {/* CAROUSEL 2: Moving to the RIGHT */}
        <div className="w-full relative">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-2 flex items-center justify-between">
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
              ➔ Negócios Locais &amp; Nichos
            </span>
          </div>

          {/* Full Bleed Infinite Carousel Track (100% width, edge-to-edge) */}
          <div className="w-full overflow-hidden py-3">
            <div className="animate-marquee-right" style={{ animationDuration: '40s' }}>
              {/* Set of 10 Cards */}
              {carousel2Services.map((service) => renderCard(service, 'c2-orig'))}

              {/* Duplicated for Seamless Infinite Loop */}
              {carousel2Services.map((service) => renderCard(service, 'c2-dup'))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

/* ==========================================================================
   ORIGINAL FOOTER CTA SECTION (BRUTALIST FORM & CONTACT DETAILS)
   ========================================================================== */
interface FooterCtaSectionProps {
  onOpenWhatsApp: () => void;
}

const FooterCtaSection: React.FC<FooterCtaSectionProps> = ({ onOpenWhatsApp }) => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Sites Integrados ao WhatsApp');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá equipe da *Agency Git Pires*!
Meu nome é *${formName}* (${formEmail}).
Tenho interesse em: *${formService}*.
Mensagem: ${formMessage || 'Gostaria de agendar uma conversa para entender valores e prazos.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/556792144061?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="relative border-t-2 border-neutral-900 w-full">
      
      {/* Split Section: Orange Block + Dark Charcoal / Black Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-neutral-900">
        
        {/* Left Column: Yellow/Orange Background with "LET'S CREATE SOMETHING GREAT!" */}
        <div className="lg:col-span-7 bg-[#FFE600] p-8 sm:p-12 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-neutral-900 flex flex-col justify-between relative overflow-hidden">
          
          <div className="relative z-10">
            {/* Title Block */}
            <div className="mb-6">
              <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-neutral-950 tracking-tighter uppercase leading-[0.85]">
                LET'S CREATE
                <br />
                <span className="text-[#FF5C00]">SOMETHING</span>
                <br />
                GREAT!
              </h2>
              <p className="mt-4 text-base sm:text-lg font-bold text-neutral-900 max-w-md">
                Tem uma ideia de negócio, precisa renovar o site da sua empresa ou quer criar uma aplicação do zero? Vamos conversar.
              </p>
            </div>

            {/* Quick Brief Form */}
            <form onSubmit={handleSubmit} className="bg-white/90 border-2 border-neutral-900 p-6 rounded-2xl shadow-[6px_6px_0px_#000] max-w-lg space-y-4">
              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 mb-1">
                  Seu Nome ou Empresa *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Ex: João da Silva / Clínica Alpha"
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 mb-1">
                  WhatsApp ou E-mail para Retorno *
                </label>
                <input
                  type="text"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="Ex: (67) 99999-9999 ou contato@suaempresa.com"
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 mb-1">
                  Qual serviço você tem interesse?
                </label>
                <select
                  value={formService}
                  onChange={(e) => setFormService(e.target.value)}
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none focus:bg-white"
                >
                  <option value="Sites Integrados ao WhatsApp">Sites Integrados ao WhatsApp</option>
                  <option value="Sites para Divulgação de Serviços">Sites para Divulgação de Serviços</option>
                  <option value="Landing Pages de Alta Conversão">Landing Pages de Alta Conversão</option>
                  <option value="Portais Corporativos & Multi-Páginas">Portais Corporativos &amp; Multi-Páginas</option>
                  <option value="Plataformas Imobiliárias">Plataformas Imobiliárias</option>
                  <option value="SaaS & Painéis Administrativos">SaaS &amp; Painéis Administrativos</option>
                  <option value="Outro Projeto Sob Medida">Outro Projeto Sob Medida</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-neutral-900 mb-1">
                  Detalhes adicionais (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Conte um pouco sobre o objetivo do seu projeto..."
                  className="w-full bg-neutral-50 border-2 border-neutral-900 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 focus:outline-none focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 font-display font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl border-2 border-neutral-900 shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enviar Proposta Direto no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Details, Social, Direct Access */}
        <div className="lg:col-span-5 bg-[#FF5C00] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <div className="inline-block bg-white text-neutral-950 font-mono text-xs uppercase px-3 py-1 rounded-sm border border-neutral-900 mb-6 shadow-[2px_2px_0px_#000]">
              CANAIS OFICIAIS
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight mb-4">
              AGENCY GIT PIRES
            </h3>

            <p className="text-sm sm:text-base font-semibold text-orange-100 mb-8 leading-relaxed">
              Desenvolvemos sites de alta performance focados em usabilidade, autoridade visual e conversão direta para negócios e profissionais de destaque.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/556792144061"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-950/20 border-2 border-white/20 hover:bg-neutral-950/30 hover:border-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-neutral-950 flex items-center justify-center border border-neutral-900 shadow-sm">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-200 block">WhatsApp Oficial</span>
                    <span className="font-display font-bold text-base text-white">+55 (67) 9214-4061</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-200 group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/git.pires/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-950/20 border-2 border-white/20 hover:bg-neutral-950/30 hover:border-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-neutral-950 flex items-center justify-center border border-neutral-900 shadow-sm">
                    <Instagram className="w-6 h-6 text-[#FF5C00]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-200 block">Instagram Oficial</span>
                    <span className="font-display font-bold text-base text-white">@git.pires</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-200 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-xs text-orange-200 font-medium">
              Projetos entregues com velocidade, design moderno e otimização total para celulares e computadores.
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="bg-neutral-950 py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-white text-xs font-bold gap-4">
        <div className="flex items-center gap-2">
          <span>© 2025 AGENCY GIT PIRES</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400">TODOS OS DIREITOS RESERVADOS</span>
        </div>

        <button
          onClick={onOpenWhatsApp}
          className="bg-[#FF5C00] hover:bg-[#e04f00] text-white px-5 py-2 rounded-full border-2 border-neutral-900 text-xs font-black uppercase tracking-wider transition-colors"
        >
          SOLICITAR SEU SITE AGORA 🚀
        </button>
      </div>

    </footer>
  );
};

/* ==========================================================================
   ORIGINAL FLOATING WHATSAPP WIDGET
   ========================================================================== */
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

/* ==========================================================================
   MAIN APPLICATION
   ========================================================================== */
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

        {/* 20 Services in 2 Opposing Carousels (Left & Right), Consuming all Lateral Edges */}
        <ServicesCatalogSection
          onOpenServiceModal={(service) => setActiveServiceModal(service)}
          onOpenWhatsAppService={handleOpenWhatsAppService}
        />

        {/* Selected Work & Live Realized Projects Section */}
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

      {/* Service Details Modal with Image */}
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
