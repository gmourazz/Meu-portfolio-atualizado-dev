import type { Project } from "@/types/project";

export const projects = [
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
    mobileImages: [
      "/img/projects/ignismobile.jpeg",
    ],
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
