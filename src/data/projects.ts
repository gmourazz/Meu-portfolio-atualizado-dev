import type { Project } from "@/types/project";
import { translations, type Language } from "@/i18n";

export const projects = [
  {
    title: "Mundo Pro – Landing Pages Dinâmicas",
    type: "Landing Pages · Conversão · One Page",
    segment: "Agência de Viagens · Turismo",
    url: "https://mundoproviagens.com.br/",
    description:
      "Desenvolvimento completo de 7 landing pages temáticas (Peru, Atacama, Itália, Eurotrip, Leste Europeu, Tailândia) + 1 site one page para a agência de viagens Mundo Pro. Construído com React, TypeScript e Node.js, com foco em alta conversão através de redirecionamentos estratégicos para WhatsApp, seguindo fielmente o design do Figma.",
    focus:
      "Criar um sistema de landing pages leves e performáticas que direcionam diferentes públicos (destinos específicos) a contatos personalizados no WhatsApp. Cada página foi otimizada para mobile-first com responsividade perfeita, garantindo experiência fluída em todos os dispositivos.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão. Todas as páginas funcionam perfeitamente em qualquer dispositivo.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
      "Deploy Otimizado",
    ],
    desktopImages: [
      "/img/projects/mundoprodesktop.png",
      "/img/projects/mundoprodesktopdois.png",
      "/img/projects/perudesktop.png",
      "/img/projects/atacamadesktop.png",
      "/img/projects/italiadesktop.png",
      "/img/projects/eurotripdesktop.png",
      "/img/projects/lesteeuropeudesktop.png",
    ],
    mobileImages: [
      "/img/projects/mundopromobile.png",
      "/img/projects/perumobile.png",
      "/img/projects/atacamamobile.png",
      "/img/projects/italiamobile.png",
      "/img/projects/eurotripmobile.png",
      "/img/projects/lesteeuropeumobile.png",
    ],
    featured: true,
    links: [
      { name: "Site Principal", url: "https://mundoproviagens.com.br/" },
      { name: "LP Peru", url: "https://peru.mundoproviagens.com.br/" },
      { name: "LP Atacama", url: "https://atacama.mundoproviagens.com.br/" },
      { name: "LP Itália", url: "https://italia.mundoproviagens.com.br/" },
      { name: "LP Eurotrip", url: "https://eurotrip.mundoproviagens.com.br/" },
      {
        name: "LP Leste Europeu",
        url: "https://lesteeuropeu.mundoproviagens.com.br/",
      },
      {
        name: "LP Tailândia",
        url: "https://tailandia.mundoproviagens.com.br/",
      },
    ],
  },
  {
    title: "Mundo Pro – Site One Page",
    type: "One Page · Conversão · Site Institucional",
    segment: "Agência de Viagens · Turismo",
    url: "https://mundoproviagens.com.br/",
    description:
      "Site one page completo desenvolvido para a Mundo Pro Viagens, servindo como hub central da agência. Apresenta todos os destinos e serviços oferecidos, com design moderno e navegação intuitiva que facilita o contato direto com a equipe comercial via WhatsApp.",
    focus:
      "Criar uma presença digital profissional que transmita confiança e organize todos os serviços da agência em uma página única e fluída. Design responsivo com foco em conversão através de calls-to-action estratégicos para WhatsApp.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão. Todas as páginas funcionam perfeitamente em qualquer dispositivo.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: [
      "/img/projects/mundoprodesktop.png",
      "/img/projects/mundoprodesktopdois.png",
    ],
    mobileImages: ["/img/projects/mundopromobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Peru",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Destinos Internacionais",
    url: "https://peru.mundoproviagens.com.br/",
    description:
      "Landing page dedicada aos pacotes turísticos para o Peru, destacando os principais atrativos como Machu Picchu, Cusco e Lima. Design temático que captura a essência da cultura peruana com elementos visuais que remetem às cores e texturas locais.",
    focus:
      "Converter visitantes interessados em viagens ao Peru em leads qualificados através de WhatsApp. Interface mobile-first com informações objetivas sobre roteiros, incluindo o icônico Machu Picchu e experiências culturais únicas.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/perudesktop.png"],
    mobileImages: ["/img/projects/perumobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Atacama",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Destinos Internacionais",
    url: "https://atacama.mundoproviagens.com.br/",
    description:
      "Landing page focada em pacotes para o Deserto do Atacama, um dos destinos mais impressionantes da América do Sul. Apresenta as paisagens únicas do deserto chileno, gêiseres, lagunas e o céu mais estrelado do mundo.",
    focus:
      "Capturar a beleza árida e majestosa do Atacama através de um design clean que remete às tonalidades do deserto. Página otimizada para apresentar roteiros de aventura e experiências astronômicas exclusivas.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/atacamadesktop.png"],
    mobileImages: ["/img/projects/atacamamobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Itália",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Europa",
    url: "https://italia.mundoproviagens.com.br/",
    description:
      "Landing page elegante dedicada aos pacotes turísticos para a Itália, apresentando roteiros por Roma, Veneza, Florença, Milão e a Costa Amalfitana. Design sofisticado que reflete o charme e a cultura italiana.",
    focus:
      "Transmitir a elegância e riqueza cultural italiana através de um design refinado. Apresentação clara de roteiros que incluem arte renascentista, gastronomia autêntica e paisagens mediterrâneas incomparáveis.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/italiadesktop.png"],
    mobileImages: ["/img/projects/italiamobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Eurotrip",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Europa",
    url: "https://eurotrip.mundoproviagens.com.br/",
    description:
      "Landing page para pacotes de Eurotrip, apresentando roteiros que conectam múltiplas cidades e países europeus em uma única viagem. Ideal para quem deseja conhecer o melhor da Europa em um único pacote, passando por destinos icônicos como Paris, Londres, Amsterdã, Berlim e mais.",
    focus:
      "Apresentar a praticidade e economia de conhecer vários países europeus em uma única viagem. Design dinâmico que reflete a diversidade cultural europeia e facilita a visualização dos roteiros integrados.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/eurotripdesktop.png"],
    mobileImages: ["/img/projects/eurotripmobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Leste Europeu",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Europa",
    url: "https://lesteeuropeu.mundoproviagens.com.br/",
    description:
      "Landing page especializada em roteiros pelo Leste Europeu, região rica em história, arquitetura medieval e cultura única. Apresenta destinos como Praga, Budapeste, Viena, Cracóvia e outros tesouros menos explorados da Europa Oriental.",
    focus:
      "Revelar a beleza e autenticidade do Leste Europeu, região conhecida por seus castelos imponentes, cidades medievais preservadas e custo-benefício atrativo. Design que equilibra história e modernidade.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/lesteeuropeudesktop.png"],
    mobileImages: ["/img/projects/lesteeuropeumobile.png"],
    featured: false,
  },
  {
    title: "Mundo Pro – Landing Page Tailândia",
    type: "Landing Page · Conversão · Turismo",
    segment: "Agência de Viagens · Ásia",
    url: "https://tailandia.mundoproviagens.com.br/",
    description:
      "Landing page vibrante dedicada aos pacotes para a Tailândia, apresentando a magia do Sudeste Asiático com seus templos dourados, praias paradisíacas, mercados flutuantes e a hospitalidade tailandesa. Roteiros incluem Bangkok, Chiang Mai, Phuket e Phi Phi Islands.",
    focus:
      "Capturar a essência exótica e colorida da Tailândia através de um design que combina elementos tradicionais e modernos. Apresentar a diversidade de experiências: desde a agitação urbana de Bangkok até a tranquilidade das ilhas tropicais.",
    testimonial:
      "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementação dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversão.",
    client: "Mundo Pro Agência de Viagens",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "HTML5",
      "CSS3",
      "Design Responsivo",
      "Mobile-First",
      "Integração WhatsApp API",
    ],
    desktopImages: ["/img/projects/tailandiadesktop.png"],
    mobileImages: ["/img/projects/tailandiamobile.png"],
    featured: false,
  },
  {
    title: "CRM Premium – Gestão de Carteira",
    type: "Sistema web · CRM",
    segment: "Telecom · Clientes premium",
    url: "https://bootstrap.rbi.skyhigh.cloud/clientless/#url=https://geovannamoura-com-br-275547.hostingersite.com/painel",
    description:
      "Painel desenvolvido durante minha trajetória na Algar, focado em clientes premium, com visão de carteira, contratos, chamados e contatos importantes para follow-up.",
    focus:
      "Organizar o dia a dia do consultor com uma visão clara da carteira, facilitando priorização de incidentes, registro de interações e acompanhamento dos clientes mais estratégicos.",
    testimonial:
      "A Geovanna ajudou a transformar um fluxo complexo em algo bem mais visual e utilizável no dia a dia do time. Evoluímos muito a visão de carteira com esse painel.",
    client: "Fabrício (Agile Master)",
    stack: [
      "React",
      "TypeScript",
      "APIs REST",
      "UI/UX",
      "Tabelas responsivas",
      "Filtros avançados",
    ],
    desktopImages: [
      "/img/projects/crmdesktopum.jpg",
      "/img/projects/crmdesktopdois.jpg",
      "/img/projects/crmdesktoptres.jpg",
      "/img/projects/crmdesktopquatro.jpg",
      "/img/projects/crmdesktopcinco.jpg",
      "/img/projects/crmdesktopseis.jpg",
      "/img/projects/crmdesktopsete.jpg",
      "/img/projects/crmdesktopoito.jpg",
    ],
    mobileImages: ["/img/projects/crmmobile.jpeg"],
    featured: true,
  },
  {
    title: "Riconomia – Calculadoras Financeiras",
    type: "Site institucional · Calculadoras",
    segment: "Finanças · Contabilidade",
    url: "http://riconomia.com.br/",
    description:
      "Plataforma de apoio para contadores e profissionais de finanças, com simuladores práticos para diferentes cenários do dia a dia.",
    focus:
      "Oferecer calculadoras intuitivas para salário líquido, 13º, aposentadoria, financiamentos e custo de vida, com resultados claros e linguagem acessível. Incluido Dark/Clean Mode para adaptabilidade e conforto visual do usuário.",
    testimonial:
      "O site ficou com a clareza que eu precisava para os cálculos. Ficou do jeitinho que eu pedi, As simulações ficaram fáceis de usar até para quem não é da área. A Geovanna é muito atenciosa e escutou todos os detalhes que solicitei, recomendo!!",
    client: "Carlos H.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Calculadoras JS",
      "UX focada em clareza",
    ],
    desktopImages: [
      "/img/projects/riconomiadesktopclaroum.jpeg",
      "/img/projects/riconomiadesktopclarodois.jpeg",
      "/img/projects/riconomiadesktopclarotres.jpeg",
      "/img/projects/riconomiadesktopdarkum.jpeg",
      "/img/projects/riconomiadesktopdarkdois.jpeg",
    ],
    mobileImages: ["/img/projects/riconomiamobile.jpeg"],
    featured: true,
  },
  {
    title: "Ignis – Terapia Cognitiva",
    type: "Site institucional",
    segment: "Saúde · Psicologia",
    url: "https://ignisoficial.com.br/",
    description:
      "Site leve e acolhedor para atendimento psicológico remoto, com foco em transmitir confiança e aproximar a marca das pessoas.",
    focus:
      "Explicar de forma simples como funciona o atendimento, reforçar credibilidade e facilitar o agendamento de sessões com poucos cliques.",
    testimonial:
      "Representou bem a minha marca e tudo que eu pedi. A Geovanna esteve à disposição para escutar e colocar em prática. O resultado ficou muito profissional.",
    client: "Rafael",
    stack: ["WordPress", "HTML5", "CSS3", "UX focada em confiança"],
    desktopImages: [
      "/img/projects/ignisdesktopum.jpg",
      "/img/projects/ignisdesktopdois.jpg",
      "/img/projects/ignisdesktoptres.jpg",
      "/img/projects/ignisdesktopquatro.jpg",
      "/img/projects/ignisdesktopcinco.jpg",
      "/img/projects/ignisdesktopseis.jpg",
      "/img/projects/ignisdesktopsete.jpg",
    ],
    mobileImages: ["/img/projects/ignismobile.jpeg"],
    featured: true,
  },
  {
    title: "Site – Gráfica Rápida",
    type: "Site institucional",
    segment: "Serviços · Gráfica rápida",
    url: "https://graficaloprint.com.br",
    description:
      "Site completo com páginas internas, apresentação de serviços, exibição de portfólio visual e formulário de orçamento alinhado ao fluxo da gráfica.",
    focus:
      "Deixar claro o que a gráfica oferece, mostrar trabalhos realizados e facilitar o contato do cliente com poucos cliques.",
    testimonial:
      "Muito rápida na entrega e muito proativa. Foi muito profissional e superou minhas expectativas no visual e na organização do site.",
    client: "Douglas",
    stack: ["WordPress", "HTML5", "CSS3", "Formulário de orçamento"],
    desktopImages: [
      "/img/projects/graficadesktopum.jpg",
      "/img/projects/graficadesktopdois.jpg",
      "/img/projects/graficadesktoptres.jpg",
      "/img/projects/graficadesktopquatro.jpg",
      "/img/projects/graficadesktopcinco.jpg",
      "/img/projects/graficadesktopseis.jpg",
      "/img/projects/graficadesktopsete.jpg",
    ],
    mobileImages: [
      "/img/projects/graficamobileum.jpeg",
      "/img/projects/graficamobiledois.jpeg",
      "/img/projects/graficamobiletres.jpeg",
      "/img/projects/graficamobilequatro.jpeg",
      "/img/projects/graficamobilecinco.jpeg",
    ],
    featured: true,
  },
] satisfies Project[];

// Helper function to get translated projects
export function getTranslatedProjects(language: Language): Project[] {
  const t = translations[language].projects.items;

  return projects.map((project) => {
    // Map project titles to translation keys
    if (project.title.includes("Mundo Pro – Landing Pages")) {
      return {
        ...project,
        title: t.mundoPro.title,
        description: t.mundoPro.description,
        focus: t.mundoPro.focus,
        testimonial: t.mundoPro.testimonial,
      };
    }

    if (project.title.includes("CRM Premium")) {
      return {
        ...project,
        title: t.crm.title,
        description: t.crm.description,
        focus: t.crm.focus,
        testimonial: t.crm.testimonial,
      };
    }

    if (project.title.includes("Riconomia")) {
      return {
        ...project,
        title: t.riconomia.title,
        description: t.riconomia.description,
        focus: t.riconomia.focus,
        testimonial: t.riconomia.testimonial,
      };
    }

    if (project.title.includes("Ignis")) {
      return {
        ...project,
        title: t.ignis.title,
        description: t.ignis.description,
        focus: t.ignis.focus,
        testimonial: t.ignis.testimonial,
      };
    }

    if (project.title.includes("Gráfica") || project.title.includes("Grafica")) {
      return {
        ...project,
        title: t.grafica.title,
        description: t.grafica.description,
        focus: t.grafica.focus,
        testimonial: t.grafica.testimonial,
      };
    }

    // Return project as is if no translation found (landing pages individuais)
    return project;
  });
}
