export interface ServiceItem {
  id: string;
  emoji: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  category: 'essenciais' | 'nichos' | 'conversao' | 'agile';
  categoryLabel: string;
  deliverables: string[];
  idealFor: string;
  estimatedDays: string;
  badge?: string;
  accentColor: 'orange' | 'yellow' | 'blue' | 'black';
  image: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  // 10 Serviços Principais
  {
    id: 'divulgacao-servicos',
    emoji: '🚀',
    title: 'Sites para Divulgação de Serviços',
    shortDescription: 'Apresente seus serviços de forma clara, profissional e estratégica.',
    detailedDescription: 'Estrutura desenvolvida pela Agency Git Pires para valorizar a proposta de valor do seu negócio, destacando diferenciais, etapas de contratação e depoimentos de clientes para gerar autoridade imediata.',
    category: 'essenciais',
    categoryLabel: 'Essenciais',
    deliverables: [
      'Apresentação clara dos serviços e benefícios',
      'Design responsivo para celular, tablet e desktop',
      'Otimização para mecanismos de busca (SEO básico)',
      'Seção de depoimentos e provas sociais'
    ],
    idealFor: 'Prestadores de serviço, consultores e empresas que desejam transmitir autoridade imediata.',
    estimatedDays: '5 a 8 dias úteis',
    badge: 'Mais Procurado',
    accentColor: 'orange',
    image: '/images/service_divulgacao_1790288336582.webp'
  },
  {
    id: 'integrados-whatsapp',
    emoji: '📲',
    title: 'Sites Integrados ao WhatsApp',
    shortDescription: 'Facilite o contato com clientes através de botões e chamadas diretas para o WhatsApp.',
    detailedDescription: 'Página focada em velocidade de conversão. Todos os botões estratégicos levam o visitante diretamente ao seu WhatsApp comercial com mensagens pré-formatadas para iniciar a negociação.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Botão flutuante inteligente e fixo de WhatsApp',
      'Mensagens personalizadas por tipo de serviço clicado',
      'Carregamento ultra-rápido (menos de 2 segundos)',
      'Rastreamento de cliques para métricas de conversão'
    ],
    idealFor: 'Negócios cujo fechamento acontece rápido pelo WhatsApp com atendimento humanizado.',
    estimatedDays: '3 a 5 dias úteis',
    badge: 'Alta Conversão',
    accentColor: 'orange',
    image: '/images/service_whatsapp_1790288324880.webp'
  },
  {
    id: 'profissionais-autonomos',
    emoji: '🏆',
    title: 'Sites para Profissionais Autônomos',
    shortDescription: 'Páginas profissionais para médicos, advogados, arquitetos, fotógrafos, consultores e outros profissionais.',
    detailedDescription: 'Seu nome é a sua marca. Construímos uma presença digital elegante e confiável que posiciona você como referência no seu segmento de atuação.',
    category: 'essenciais',
    categoryLabel: 'Essenciais',
    deliverables: [
      'Biografia e credenciais profissionais com destaque',
      'Exibição de portfólio de casos ou especialidades',
      'Canal de agendamento ou consulta prévia integrado',
      'Identidade visual alinhada ao público-alvo'
    ],
    idealFor: 'Advogados, arquitetos, médicos, consultores, engenheiros e especialistas.',
    estimatedDays: '6 a 9 dias úteis',
    badge: 'Autoridade',
    accentColor: 'orange',
    image: '/images/service_autonomo_1790288348438.webp'
  },
  {
    id: 'premium-personalizados',
    emoji: '💎',
    title: 'Sites Premium Personalizados',
    shortDescription: 'Projetos exclusivos com identidade visual, animações e experiências diferenciadas.',
    detailedDescription: 'Nada de modelos prontos. Projeto desenhado do zero com micro-interações fluidas, transições cinematográficas e código sob medida para marcas que exigem excelência.',
    category: 'essenciais',
    categoryLabel: 'Essenciais',
    deliverables: [
      'Design 100% autoral e sob medida',
      'Animações interativas e micro-interações suaves',
      'Arquitetura de informação personalizada de alto impacto',
      'Painel intuitivo de gerenciamento de conteúdo'
    ],
    idealFor: 'Marcas de alto padrão, agências, studios e negócios que valorizam design exclusivo.',
    estimatedDays: '10 a 18 dias úteis',
    badge: 'Exclusivo',
    accentColor: 'orange',
    image: '/images/service_premium_1790288360338.webp'
  },
  {
    id: 'empresas-locais',
    emoji: '📍',
    title: 'Sites para Empresas Locais',
    shortDescription: 'Fortaleça a presença da sua empresa na sua cidade e facilite que novos clientes encontrem você.',
    detailedDescription: 'Criado para atrair consumidores da sua região geográfica com mapa interativo, rota com 1 clique no Google Maps / Waze, horários e fotos do espaço físico.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Integração direta com Google Maps e Waze',
      'Destaque para horário de funcionamento e endereço',
      'Otimização para buscas locais no Google (SEO Local)',
      'Galeria de fotos do estabelecimento ou equipe'
    ],
    idealFor: 'Comércios de bairro, clínicas, lojas físicas e empresas de atendimento regional.',
    estimatedDays: '5 a 7 dias úteis',
    badge: 'Presença Local',
    accentColor: 'orange',
    image: '/images/service_local_1790288370789.webp'
  },
  {
    id: 'fotografos-criadores',
    emoji: '📸',
    title: 'Sites para Fotógrafos e Criadores',
    shortDescription: 'Apresente trabalhos, projetos e serviços através de portfólios visuais e impactantes.',
    detailedDescription: 'Grid visual com carregamento de imagens de alta definição sem lentidão, suporte a galerias lightbox, separação por ensaios/categorias e orçamento simplificado.',
    category: 'essenciais',
    categoryLabel: 'Essenciais',
    deliverables: [
      'Galerias em alta definição com modo lightbox expandido',
      'Separação por categorias (casamentos, moda, eventos, etc.)',
      'Compressão inteligente de imagem para máxima nitidez e velocidade',
      'Formulário direcionado para solicitação de datas de ensaio'
    ],
    idealFor: 'Fotógrafos, videomakers, designers gráficos, ilustradores e diretores de arte.',
    estimatedDays: '6 a 9 dias úteis',
    badge: 'Visual Impact',
    accentColor: 'orange',
    image: '/images/service_fotografo_1790288383301.webp'
  },
  {
    id: 'freelancers',
    emoji: '🧑‍💻',
    title: 'Sites para Freelancers',
    shortDescription: 'Mostre suas habilidades, projetos, experiências e formas de contato em um único lugar.',
    detailedDescription: 'Uma vitrine objetiva e persuasiva que comprova seu domínio técnico, apresenta suas stacks/softwares favoritos e facilita o recebimento de propostas e briefings.',
    category: 'agile',
    categoryLabel: 'Estruturas Ágeis',
    deliverables: [
      'Showcase dinâmico de projetos com links para visualização ao vivo',
      'Tabela de competências, ferramentas e linguagens',
      'Seção de valores de pacotes ou solicitação de orçamento',
      'Integração com LinkedIn, GitHub, Behance e WhatsApp'
    ],
    idealFor: 'Desenvolvedores, redatores, gestores de tráfego, social medias e freelancers.',
    estimatedDays: '4 a 6 dias úteis',
    badge: 'Prático & Ágil',
    accentColor: 'orange',
    image: '/images/service_freelancer_1790288394325.webp'
  },
  {
    id: 'captacao-clientes',
    emoji: '🎯',
    title: 'Sites para Captação de Clientes',
    shortDescription: 'Estruturas planejadas para apresentar sua oferta e transformar visitantes em contatos.',
    detailedDescription: 'Landing pages de conversão estruturadas com gatilhos mentais validados: títulos magnéticos, dores do cliente, solução irresistível e CTAs posicionados estrategicamente.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Copywriting focado em objeções e conversão',
      'Formulário enxuto integrado a e-mail e CRM/planilha',
      'Integração com Meta Pixel e Google Analytics 4',
      'Design pensado para tráfego pago (Google Ads / Meta Ads)'
    ],
    idealFor: 'Empresas rodando anúncios ou campanhas que precisam maximizar o retorno do investimento.',
    estimatedDays: '5 a 8 dias úteis',
    badge: 'Foco em Leads',
    accentColor: 'orange',
    image: '/images/service_captacao_1790288405858.webp'
  },
  {
    id: 'campanhas-promocoes',
    emoji: '📣',
    title: 'Sites para Campanhas e Promoções',
    shortDescription: 'Páginas específicas para divulgar ofertas, eventos, lançamentos e campanhas.',
    detailedDescription: 'Páginas temporárias ou sazonais com cronômetro regressivo, detalhes de lotes ou descontos promocionais e botão direto para garantia da condição exclusiva.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Contador regressivo para gerar senso de urgência real',
      'Tabela comparativa de planos ou lotes de ingressos',
      'Aviso de vagas ou unidades limitadas',
      'Totalmente preparado para picos de acessos simultâneos'
    ],
    idealFor: 'Lançamentos de produtos, Black Friday, eventos presenciais e workshops.',
    estimatedDays: '3 a 5 dias úteis',
    badge: 'Campanhas',
    accentColor: 'orange',
    image: '/images/service_campanhas_1790288418431.webp'
  },
  {
    id: 'link-na-bio',
    emoji: '🔗',
    title: 'Página Profissional / Link na Bio',
    shortDescription: 'Uma página personalizada para reunir seus principais links, serviços, contatos e redes sociais.',
    detailedDescription: 'Substitua plataformas genéricas por uma página personalizada no seu próprio domínio pela Agency Git Pires, sem restrições visuais, com velocidade máxima e métricas próprias.',
    category: 'agile',
    categoryLabel: 'Estruturas Ágeis',
    deliverables: [
      'Layout sob medida com as cores e tipografia da sua marca',
      'Botões de acesso rápido ao WhatsApp, catálogo e redes',
      'Carregamento instantâneo via redes sociais',
      'Rastreamento completo de cliques de onde vêm seus seguidores'
    ],
    idealFor: 'Influenciadores, pequenas marcas, prestadores de serviços e criadores no Instagram/TikTok.',
    estimatedDays: '2 a 3 dias úteis',
    badge: 'Express',
    accentColor: 'orange',
    image: '/images/service_bio_1790288428951.webp'
  },

  // Mais 10 Ideias para Ampliar o Catálogo
  {
    id: 'pequenas-empresas',
    emoji: '🏢',
    title: 'Sites para Pequenas Empresas',
    shortDescription: 'Uma presença digital profissional para apresentar sua empresa, serviços e diferenciais.',
    detailedDescription: 'Site institucional corporativo completo com página sobre a empresa, missão e valores, serviços prestados, equipe de líderes e canais oficiais de contato.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Estrutura institucional completa (Home, Sobre, Serviços, Contato)',
      'E-mails profissionais vinculados ao domínio próprio',
      'Certificado de segurança SSL e conformidade com a LGPD',
      'Área para blog de novidades ou notícias da empresa'
    ],
    idealFor: 'Empresas consolidadas que querem elevar o patamar da sua presença digital corporativa.',
    estimatedDays: '7 a 12 dias úteis',
    badge: 'Corporativo',
    accentColor: 'black',
    image: '/images/service_empresa_1790288441136.webp'
  },
  {
    id: 'clinicas-consultorios',
    emoji: '🩺',
    title: 'Sites para Clínicas e Consultórios',
    shortDescription: 'Sites profissionais para apresentar especialidades, profissionais, serviços e formas de agendamento.',
    detailedDescription: 'Design limpo, acolhedor e humanizado que transmite higiene, confiança e credibilidade médica. Apresentação dos especialistas com CRM/RQE e botão de pré-agendamento.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Apresentação da equipe médica com registros profissionais',
      'Lista clara de convênios atendidos e procedimentos',
      'Formulário de solicitação de agendamento ou triagem',
      'Guia de localização e preparação para consultas'
    ],
    idealFor: 'Clínicas odontológicas, dermatologia, psicologia, fisioterapia e consultórios médicos.',
    estimatedDays: '7 a 11 dias úteis',
    badge: 'Saúde & Bem-Estar',
    accentColor: 'orange',
    image: '/images/service_clinica_1790288451695.webp'
  },
  {
    id: 'restaurantes-lanchonetes',
    emoji: '🍽️',
    title: 'Sites para Restaurantes e Lanchonetes',
    shortDescription: 'Apresente seu cardápio, localização, horários, promoções e canais de atendimento.',
    detailedDescription: 'Cardápio digital responsivo com fotos apetitosas dos pratos, indicação de preços, horários de funcionamento em tempo real e redirecionamento para pedidos via iFood ou WhatsApp próprio.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Cardápio interativo e fácil de atualizar pelo smartphone',
      'Indicação de pratos do dia e promoções do momento',
      'Botão de reserva de mesas e pedidos para retirada/delivery',
      'Integração com Google Maps para navegação imediata'
    ],
    idealFor: 'Restaurantes, hamburguerias, pizzarias, cafeterias e bistrôs.',
    estimatedDays: '5 a 8 dias úteis',
    badge: 'Gastronomia',
    accentColor: 'orange',
    image: '/images/service_restaurante_1790288463910.webp'
  },
  {
    id: 'saloes-estetica',
    emoji: '💇',
    title: 'Sites para Salões e Estética',
    shortDescription: 'Mostre serviços, resultados, profissionais e facilite o agendamento de clientes.',
    detailedDescription: 'Página moderna com galeria de transformações antes/depois, tabela de tratamentos capilares e corporais, depoimentos de clientes e integração com agenda digital.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Galeria deslizante de resultados antes/depois',
      'Apresentação de profissionais e técnicas especializadas',
      'Links diretos para marcação de horários com sua recepção',
      'Visual moderno e aspiracional alinhado à beleza'
    ],
    idealFor: 'Salões de beleza, barbearias premium, clínicas de estética e spas.',
    estimatedDays: '5 a 8 dias úteis',
    badge: 'Estética',
    accentColor: 'orange',
    image: '/images/service_salao_1790288475800.webp'
  },
  {
    id: 'imobiliarias-corretores',
    emoji: '🏠',
    title: 'Sites para Imobiliárias e Corretores',
    shortDescription: 'Apresente imóveis, serviços, localização e canais de contato de maneira profissional.',
    detailedDescription: 'Plataforma para divulgação de empreendimentos, lançamentos na planta e imóveis prontos, com fotos em carrossel, filtros de dormitórios/bairro e formulário de visita.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Fichas detalhadas de imóveis com fotos, plantas e valores',
      'Filtro simplificado por tipo, bairro e faixa de preço',
      'Botão direto "Agendar Visita com Corretor"',
      'Integração com portais e redes de atendimento'
    ],
    idealFor: 'Corretores autônomos, imobiliárias regionais e incorporadoras.',
    estimatedDays: '8 a 14 dias úteis',
    badge: 'Imóveis',
    accentColor: 'orange',
    image: '/images/service_imobiliaria_1790288486369.webp'
  },
  {
    id: 'oficinas-automotivos',
    emoji: '🚗',
    title: 'Sites para Oficinas e Serviços Automotivos',
    shortDescription: 'Mostre serviços, diferenciais, localização e facilite o contato com novos clientes.',
    detailedDescription: 'Apresente seus serviços mecânicos, funilaria, estética automotiva ou guincho com clareza, gerando confiança para proprietários de veículos em busca de assistência técnica confiável.',
    category: 'nichos',
    categoryLabel: 'Negócios Locais',
    deliverables: [
      'Lista dos principais reparos e marcas atendidas',
      'Botão de socorro ou orçamento rápido via WhatsApp',
      'Localização precisa com rotas e facilidades de estacionamento',
      'Garantias de peças e certificações técnicas da oficina'
    ],
    idealFor: 'Centros automotivos, oficinas mecânicas, estética automotiva e autoelétricas.',
    estimatedDays: '5 a 7 dias úteis',
    badge: 'Automotivo',
    accentColor: 'black',
    image: '/images/service_oficina_1790288498501.webp'
  },
  {
    id: 'cursos-professores',
    emoji: '🎓',
    title: 'Sites para Cursos e Professores',
    shortDescription: 'Apresente cursos, aulas, conteúdos, materiais e informações para alunos.',
    detailedDescription: 'Página estruturada para educadores e infoprodutores destacando a metodologia de ensino, ementa das aulas, módulos do treinamento e link para checkout ou matrículas.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Módulos do curso e cronograma de aulas expostos com clareza',
      'Vídeo de apresentação integrado (YouTube/Vimeo)',
      'FAQ detalhado com dúvidas frequentes sobre certificado e acesso',
      'Integração com plataformas de pagamento (Hotmart, Eduzz, Kiwify)'
    ],
    idealFor: 'Professores particulares, criadores de cursos livres, mentores e escolas.',
    estimatedDays: '6 a 10 dias úteis',
    badge: 'Educação',
    accentColor: 'orange',
    image: '/images/service_cursos_1790288511388.webp'
  },
  {
    id: 'catalogos-online',
    emoji: '📋',
    title: 'Catálogos Online',
    shortDescription: 'Apresente produtos e serviços em um catálogo digital organizado e acessível pelo celular.',
    detailedDescription: 'Perfeito para empresas que vendem sem carrinho de compras complexo: o cliente navega pelos produtos organizados, seleciona os itens desejados e envia o pedido pronto para o seu WhatsApp.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Categorias organizadas com fotos, códigos e descrições',
      'Botão "Pedir no WhatsApp" ou simulador de sacola de itens',
      'Atualização simples de preços e fotos',
      'Carregamento ultra-leve mesmo em conexões 4G instáveis'
    ],
    idealFor: 'Lojas de roupas, atacadistas, distribuidoras, artesãos e fornecedores.',
    estimatedDays: '6 a 10 dias úteis',
    badge: 'Vendas Diretas',
    accentColor: 'orange',
    image: '/images/service_catalogo_1790288521288.webp'
  },
  {
    id: 'paginas-de-oferta',
    emoji: '🔥',
    title: 'Páginas de Oferta',
    shortDescription: 'Landing pages focadas em apresentar uma oferta, promoção ou serviço específico.',
    detailedDescription: 'Uma página hiper-focada em um único objetivo: transformar um anúncio em uma compra ou lead qualificado. Sem menus de navegação dispersivos para reter 100% da atenção do usuário.',
    category: 'conversao',
    categoryLabel: 'Conversão & Vendas',
    deliverables: [
      'Gatilhos de urgência, escassez e exclusividade',
      'Prova de satisfação com depoimentos reais',
      'Garantia incondicional destacada para eliminar risco',
      'Botão de checkout ou conversa direta em posição nobre'
    ],
    idealFor: 'Promoções relâmpago, lançamentos de serviços e campanhas de conversão direta.',
    estimatedDays: '4 a 6 dias úteis',
    badge: 'Campanhas Quentes',
    accentColor: 'orange',
    image: '/images/service_oferta_1790288531774.webp'
  },
  {
    id: 'migracao-de-sites',
    emoji: '🔄',
    title: 'Migração de Sites',
    shortDescription: 'Transferência e reconstrução de sites antigos para tecnologias mais modernas e atuais.',
    detailedDescription: 'Seu site atual é lento, não abre bem no celular ou parou no tempo? Nós reconstruímos seu código com tecnologias modernas e rápidas, mantendo seu domínio e seu histórico.',
    category: 'agile',
    categoryLabel: 'Estruturas Ágeis',
    deliverables: [
      'Reestruturação visual completa com design atual e moderno',
      'Aceleração radical do tempo de carregamento da página',
      'Preservação de links importantes e reputação de SEO',
      'Migração segura sem que seu site fique fora do ar'
    ],
    idealFor: 'Empresas com sites desatualizados criados há anos que precisam de um choque de modernidade.',
    estimatedDays: '7 a 14 dias úteis',
    badge: 'Modernização',
    accentColor: 'orange',
    image: '/images/service_migracao_1790288544965.webp'
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  client: string;
  year: string;
  overview: string;
  metrics: string;
  tags: string[];
  keyFeatures: string[];
  liveUrl?: string;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: 'git-pires-manager',
    title: 'GIT PIRES MANAGER',
    subtitle: 'Painel de Gestão de Contratos, Clientes e Acessos',
    category: 'SaaS & Gestão',
    image: '/images/pires_manager_ui_1790544161070.jpg',
    client: 'Agency Git Pires',
    year: '2025',
    overview: 'Plataforma administrativa para gestão centralizada de contratos, clientes e controle de acessos operacionais da agência, garantindo fluxo organizado e carregamento instantâneo via Cloudflare Pages.',
    metrics: '+300% de agilidade operacional na gestão de clientes e contratos',
    tags: ['SaaS', 'Painel de Gestão', 'Cloudflare Pages', 'React', 'Produtividade'],
    liveUrl: 'https://git-pires-manager.pages.dev/',
    keyFeatures: [
      'Gestão centralizada de contratos e clientes da agência',
      'Painel administrativo com permissões e controle de status',
      'Carregamento instantâneo via Cloudflare Edge Network',
      'Interface moderna responsiva com alta densidade de dados'
    ]
  },
  {
    id: 'gitpires-web',
    title: 'GIT PIRES SOLUÇÕES',
    subtitle: 'Portal Oficial & Criação de Sites Profissionais',
    category: 'Web Design',
    image: '/images/pires_web_ui_1790544172076.jpg',
    client: 'Agency Git Pires',
    year: '2025',
    overview: 'Website oficial e portal institucional de soluções digitais modernas, landing pages persuasivas e páginas de alta conversão, otimizado para velocidade máxima e presença de marca na Vercel.',
    metrics: 'Carregamento < 0.8s e 100% de pontuação em responsividade',
    tags: ['Web Design', 'Vercel', 'Next.js/React', 'Alta Conversão', 'SEO'],
    liveUrl: 'https://gitpires.vercel.app/',
    keyFeatures: [
      'Design responsivo impecável em smartphones e desktops',
      'Integração direta com canais de atendimento e WhatsApp',
      'Otimização avançada para velocidade e SEO orgânico',
      'Deploy global contínuo com alta disponibilidade na Vercel'
    ]
  },
  {
    id: 'git-pires-briefing',
    title: 'GIT PIRES BRIEFING',
    subtitle: 'Coleta Rápida de Informações & Onboarding de Clientes',
    category: 'Web App & UX',
    image: '/images/pires_briefing_ui_1790544180434.jpg',
    client: 'Agency Git Pires',
    year: '2025',
    overview: 'Aplicação interativa de onboarding e levantamento rápido de briefing para clientes locais (clínicas, advogados, pintores, comércios), permitindo alinhamento de escopo sem fricção nem jargões técnicos.',
    metrics: 'Redução de 70% no tempo de alinhamento e início de desenvolvimento',
    tags: ['Briefing Interativo', 'UX/UI', 'Cloudflare Pages', 'Formulários Ágeis'],
    liveUrl: 'https://git-pires-briefing.pages.dev/',
    keyFeatures: [
      'Questionário passo a passo dinâmico sem complicações técnicas',
      'Estrutura adaptada para dezenas de nichos de negócios locais',
      'Exportação organizada de dados para a equipe técnica',
      'Experiência móvel ágil para o cliente responder em minutos'
    ]
  },
  {
    id: 'prospect-empresas',
    title: 'ENCONTRE EMPRESAS',
    subtitle: 'Prospecção Comercial B2B via Google Places API',
    category: 'B2B & Big Data',
    image: '/images/prospect_empresas_ui_1790544189154.jpg',
    client: 'Wesley Pires',
    year: '2025',
    overview: 'Solução de inteligência de prospecção comercial B2B rodando em Cloudflare Workers. Permite busca precisa por nicho e cidade via Google Places API, WhatsApp direto, consulta de CNPJ e exportação.',
    metrics: '+450 empresas qualificadas mapeadas em poucos minutos',
    tags: ['Prospecção B2B', 'Cloudflare Workers', 'Google Places API', 'Exportação'],
    liveUrl: 'https://prospect-empresas.info-wesleypires.workers.dev/',
    keyFeatures: [
      'Busca geográfica de estabelecimentos por nicho de atuação',
      'Links diretos para disparo de WhatsApp com tomadores de decisão',
      'Identificação rápida de empresas sem presença digital ou site fraco',
      'Arquitetura serverless ultra-rápida em Cloudflare Workers'
    ]
  },
  {
    id: 'arbix-arbitragem',
    title: 'ARBIX ARBITRAGEM',
    subtitle: 'Monitor em Tempo Real Forex & B3',
    category: 'FinTech / Realtime',
    image: '/images/arbix_arbitragem_ui_1790544199385.jpg',
    client: 'ArbiX Capital',
    year: '2025',
    overview: 'Terminal analítico de alta performance para monitoramento contínuo e detecção automatizada de spreads de arbitragem entre ativos de Forex e mercado brasileiro (B3) com dados 100% reais de APIs.',
    metrics: 'Taxa de atualização sub-segundo com alertas instantâneos de spread',
    tags: ['FinTech', 'Arbitragem', 'Forex & B3', 'APIs Financeiras', 'Analytics'],
    liveUrl: 'https://arbix-arbitragem.pages.dev/',
    keyFeatures: [
      'Feed de dados exclusivamente reais com latência mínima',
      'Cálculo automático de custos operacionais e margem líquida',
      'Modo escuro com paleta de alto contraste para operadores',
      'Painel de alertas configurável para spreads anômalos'
    ]
  }
];
