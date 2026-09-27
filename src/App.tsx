/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesCatalogSection } from './components/ServicesCatalogSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { FooterCtaSection } from './components/FooterCtaSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { ServiceItem, ProjectItem } from './data/servicesData';

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
