export type Language = "pt-BR" | "en" | "es";

export const LANGUAGE_KEY = "portfolio_language";

export const languageLabels: Record<Language, string> = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
};

export const languageFullNames: Record<Language, string> = {
  "pt-BR": "Portugues (BR)",
  en: "English",
  es: "Espanol",
};

type TranslationKeys = {
  // Navigation
  nav: {
    home: string;
    about: string;
    technologies: string;
    projects: string;
    contact: string;
    navigation: string;
    openMenu: string;
    closeMenu: string;
    lightMode: string;
    darkMode: string;
    goToHome: string;
    changeLanguage: string;
  };

  // Hero
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    chips: {
      reactStack: string;
      uiUx: string;
      userExperience: string;
      apiIntegration: string;
      codeQuality: string;
      accessibility: string;
    };
    codeBlock: {
      role: string;
      principles: string[];
      currentlyExploring: string[];
    };
  };

  // About
  about: {
    title: string;
    photoAlt: string;
    paragraphs: string[];
    traits: {
      uiUx: { title: string; description: string };
      responsive: { title: string; description: string };
      userExperience: { title: string; description: string };
      seoQuality: { title: string; description: string };
      productVision: { title: string; description: string };
      teamwork: { title: string; description: string };
    };
  };

  // Technologies
  technologies: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    groups: {
      frontend: { title: string; area: string; description: string };
      uiStyle: { title: string; area: string; description: string };
      backend: { title: string; area: string; description: string };
      seoPerformance: { title: string; area: string; description: string };
      design: { title: string; area: string; description: string };
      git: { title: string; area: string; description: string };
    };
    items: {
      optimization: string;
      accessibility: string;
      uiKits: string;
    };
  };

  // Projects
  projects: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    viewMore: string;
    projectFocus: string;
    viewOnline: string;
    items: {
      mundoPro: {
        title: string;
        description: string;
        focus: string;
        testimonial: string;
      };
      crm: {
        title: string;
        description: string;
        focus: string;
        testimonial: string;
      };
      riconomia: {
        title: string;
        description: string;
        focus: string;
        testimonial: string;
      };
      ignis: {
        title: string;
        description: string;
        focus: string;
        testimonial: string;
      };
      grafica: {
        title: string;
        description: string;
        focus: string;
        testimonial: string;
      };
    };
  };

  // Contact
  contact: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    mainChannel: string;
    whatsappTitle: string;
    whatsappDescription: string;
    whatsappButton: string;
    whatsappMessage: string;
    otherContacts: string;
    openNewTab: string;
    freelanceNote: string;
  };

  // Footer
  footer: {
    copyright: string;
    madeWith: string;
    privacyPolicy: string;
    privacyDescription: string;
  };

  // AllProjects page
  allProjects: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    filters: string;
    filterByTech: string;
    clear: string;
    noProjectsFound: string;
    clearAndViewAll: string;
    noTechsYet: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  "pt-BR": {
    nav: {
      home: "Inicio",
      about: "Sobre",
      technologies: "Tecnologias",
      projects: "Projetos",
      contact: "Contato",
      navigation: "Navegacao",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      lightMode: "Modo claro",
      darkMode: "Modo escuro",
      goToHome: "Ir para a pagina inicial",
      changeLanguage: "Mudar idioma",
    },
    hero: {
      badge: "Geovanna Moura - Front-End Developer | Software Engineer",
      titlePrefix: "Desenvolvedora Frontend apaixonada em criar interfaces",
      titleHighlight: "intuitivas, dinamicas e modernas.",
      description:
        "Trabalho com React, TypeScript, JavaScript, HTML e CSS para criar aplicacoes web dinamicas e responsivas. Integro o front-end com APIs (geralmente em Node.js) e uso Python em automacoes e apoio na resolucao de problemas. Meu foco e ter codigo organizado e componentizado, com usabilidade e acessibilidade em mente, para que cada interface seja agradavel de usar e facil de evoluir.",
      primaryCta: "Ver projetos",
      secondaryCta: "Falar comigo",
      chips: {
        reactStack: "React - TypeScript - Tailwind",
        uiUx: "UI - UX - SEO",
        userExperience: "Experiencia do Usuario",
        apiIntegration: "Integracao com APIs REST - Node.js",
        codeQuality: "Qualidade de codigo e QA",
        accessibility: "Acessibilidade e Responsividade",
      },
      codeBlock: {
        role: "Front-end Developer | Software Engineer",
        principles: [
          "Front-end bem estruturado, com foco em performance e durabilidade",
          "Componentizacao pensada para reutilizacao e consistencia visual",
          "Interfaces orientadas a usabilidade e acessibilidade",
        ],
        currentlyExploring: [
          "Design Systems aplicados a produtos web e times diferentes",
          "Padroes de arquitetura front-end para aplicacoes React escalaveis",
        ],
      },
    },
    about: {
      title: "SOBRE MIM",
      photoAlt: "Foto profissional de Geovanna Moura",
      paragraphs: [
        'Ola, eu sou a <highlight>Geovanna Moura</highlight>, desenvolvedora front-end, e fico muito feliz que voce esteja conhecendo meu portfolio. Sou natural de Santos - SP e atualmente moro em Uberlandia - MG, nascida em <highlight>12/03/2002</highlight>.',
        'Atuo ha mais de <highlight>2 anos com desenvolvimento front-end</highlight> em uma empresa certificada <highlight>GPTW</highlight> e curso <highlight>Engenharia de Software</highlight>, unindo pratica diaria em produto com uma base academica solida na area.',
        'Me encontrei na tecnologia porque consigo unir logica, design e pessoas no mesmo lugar. Gosto bastante de pegar <highlight>fluxos e regras de negocio complexas</highlight> e traduzir tudo isso em telas claras, objetivas e faceis de entender. Sempre penso em como a pessoa que usa o sistema vai se sentir ao interagir com cada parte da interface, principalmente em contextos de sistemas de gestao e rotinas criticas do dia a dia.',
        'Tenho uma paixao especial por <highlight>solucoes digitais responsivas e bem estruturadas</highlight>. Gosto de ver a interface se comportando bem em diferentes dispositivos e resolucoes e de cuidar de detalhes de <highlight>UI e UX</highlight>, como hierarquia visual, microinteracoes, mensagens de erro e estados vazios. Esses pequenos cuidados fazem o usuario sentir que o produto foi realmente pensado para a rotina dele.',
        'No dia a dia, nao fico so no codigo. Gosto de estar proxima de quem usa o sistema e de quem define as regras de negocio. Participo de testes manuais e colaboro como <highlight>QA em fluxos importantes</highlight>, sempre tentando antecipar problemas, validar cenarios de uso real e garantir que o que vai para producao esteja estavel e faca sentido na pratica.',
        'Fora do ambiente corporativo, tambem desenvolvo projetos para <highlight>pequenos negocios e empreendedores</highlight>. Crio sites e landing pages com foco em clareza, responsividade e <highlight>boas praticas de SEO</highlight>, sempre com visao de produto: entender o objetivo daquela pagina, o publico que vai acessar e como a interface pode apoiar o negocio a crescer de forma profissional.',
      ],
      traits: {
        uiUx: {
          title: "UI e UX centrados no usuario",
          description:
            "Nao crio tela so para ficar bonita. Penso em fluxo, contexto e expectativa de quem usa, deixando a navegacao leve, intuitiva e sem ruidos desnecessarios.",
        },
        responsive: {
          title: "Responsividade na pratica",
          description:
            "Cuido do comportamento da interface em diferentes tamanhos de tela. Ajusto componentes, tipografia e layout para manter a experiencia consistente no desktop e no mobile.",
        },
        userExperience: {
          title: "Experiencia real de quem usa",
          description:
            "Trago muito do dia a dia de quem trabalha com sistemas para as decisoes de interface. Gosto de ouvir o usuario, entender sua rotina e reduzir atritos sempre que possivel.",
        },
        seoQuality: {
          title: "SEO e qualidade de entrega",
          description:
            "Em sites e landing pages penso em estrutura semantica, performance e boas praticas de SEO, sempre junto de testes e revisoes para garantir uma entrega confiavel.",
        },
        productVision: {
          title: "Olhar analitico para produto",
          description:
            "Conecto interface com negocio: analiso regras, indicadores e impactos de cada ajuste para que a tela nao seja so bonita, mas ajude o produto a entregar resultado.",
        },
        teamwork: {
          title: "Comunicacao e parceria com o time",
          description:
            "Gosto de trabalhar perto de produto, back-end e areas de negocio. Acredito que uma boa solucao nasce de conversas claras, alinhamento de expectativas e feedback constante.",
        },
      },
    },
    technologies: {
      subtitle: "Stack & Tecnologias",
      title: "Uma stack pensada para",
      titleHighlight: "produtos digitais incriveis.",
      description:
        "Mais do que listar ferramentas, aqui estao os conjuntos de tecnologias que realmente uso no dia a dia para tirar ideias do papel e manter produtos estaveis, performaticos e agradaveis para o usuario.",
      groups: {
        frontend: {
          title: "Front-end SPA & Componentizacao",
          area: "Aplicacoes React",
          description:
            "Construo interfaces reativas, organizadas em componentes, com foco em clareza, performance e manutencao a longo prazo.",
        },
        uiStyle: {
          title: "Estrutura, Estilo & UI",
          area: "UI - UX - Layout",
          description:
            "Penso em hierarquia visual, espacamentos e leitura fluida, sempre alinhando beleza com uso real no dia a dia.",
        },
        backend: {
          title: "Back-end, Dados & Automacao",
          area: "APIs & Logica",
          description:
            "Integro o front com APIs REST, modelo dados e uso automacoes para apoiar regras de negocio e rotinas internas.",
        },
        seoPerformance: {
          title: "SEO, Performance & Qualidade",
          area: "Qualidade de entrega",
          description:
            "Cuido de estrutura semantica, tempo de carregamento e boas praticas para entregar paginas rapidas e encontraveis.",
        },
        design: {
          title: "Design & Prototipacao",
          area: "Produto & Experiencia",
          description:
            "Trabalho proxima de UI/UX, validando fluxos, prototipos e microinteracoes antes de ir para codigo.",
        },
        git: {
          title: "Git, Fluxo de Codigo & Colaboracao",
          area: "Dev Workflow",
          description:
            "Atuo com versionamento, branches, PRs e revisao, garantindo organizacao e historico limpo dos projetos.",
        },
      },
      items: {
        optimization: "Otimizacao",
        accessibility: "Acessibilidade",
        uiKits: "UI Kits",
      },
    },
    projects: {
      subtitle: "Cases & Projetos",
      title: "Projetos que ja",
      titleHighlight: "sairam do papel.",
      description:
        "Uma mistura de sites, landing pages e projetos entregues aos meus clientes. Todos com foco em interface clara, responsiva e pensada para quem realmente usa - com bastante carinho e atencao aos detalhes.",
      viewMore: "Ver mais projetos",
      projectFocus: "Foco do projeto",
      viewOnline: "Ver projeto online",
      items: {
        mundoPro: {
          title: "Mundo Pro - Landing Pages Dinamicas",
          description:
            "Desenvolvimento completo de 7 landing pages tematicas (Peru, Atacama, Italia, Eurotrip, Leste Europeu, Tailandia) + 1 site one page para a agencia de viagens Mundo Pro. Construido com React, TypeScript e Node.js, com foco em alta conversao atraves de redirecionamentos estrategicos para WhatsApp, seguindo fielmente o design do Figma.",
          focus:
            "Criar um sistema de landing pages leves e performaticas que direcionam diferentes publicos (destinos especificos) a contatos personalizados no WhatsApp. Cada pagina foi otimizada para mobile-first com responsividade perfeita, garantindo experiencia fluida em todos os dispositivos.",
          testimonial:
            "A Geovanna entregou um conjunto de landing pages que superou nossas expectativas. O cuidado com a responsividade e a implementacao dos redirecionamentos para WhatsApp otimizou significativamente nossa taxa de conversao. Todas as paginas funcionam perfeitamente em qualquer dispositivo.",
        },
        crm: {
          title: "CRM Premium - Gestao de Carteira",
          description:
            "Painel desenvolvido durante minha trajetoria na Algar, focado em clientes premium, com visao de carteira, contratos, chamados e contatos importantes para follow-up.",
          focus:
            "Organizar o dia a dia do consultor com uma visao clara da carteira, facilitando priorizacao de incidentes, registro de interacoes e acompanhamento dos clientes mais estrategicos.",
          testimonial:
            "A Geovanna ajudou a transformar um fluxo complexo em algo bem mais visual e utilizavel no dia a dia do time. Evoluimos muito a visao de carteira com esse painel.",
        },
        riconomia: {
          title: "Riconomia - Calculadoras Financeiras",
          description:
            "Plataforma de apoio para contadores e profissionais de financas, com simuladores praticos para diferentes cenarios do dia a dia.",
          focus:
            "Oferecer calculadoras intuitivas para salario liquido, 13o, aposentadoria, financiamentos e custo de vida, com resultados claros e linguagem acessivel. Incluido Dark/Clean Mode para adaptabilidade e conforto visual do usuario.",
          testimonial:
            "O site ficou com a clareza que eu precisava para os calculos. Ficou do jeitinho que eu pedi, As simulacoes ficaram faceis de usar ate para quem nao e da area. A Geovanna e muito atenciosa e escutou todos os detalhes que solicitei, recomendo!!",
        },
        ignis: {
          title: "Ignis - Terapia Cognitiva",
          description:
            "Site leve e acolhedor para atendimento psicologico remoto, com foco em transmitir confianca e aproximar a marca das pessoas.",
          focus:
            "Explicar de forma simples como funciona o atendimento, reforcar credibilidade e facilitar o agendamento de sessoes com poucos cliques.",
          testimonial:
            "Representou bem a minha marca e tudo que eu pedi. A Geovanna esteve a disposicao para escutar e colocar em pratica. O resultado ficou muito profissional.",
        },
        grafica: {
          title: "Site - Grafica Rapida",
          description:
            "Site completo com paginas internas, apresentacao de servicos, exibicao de portfolio visual e formulario de orcamento alinhado ao fluxo da grafica.",
          focus:
            "Deixar claro o que a grafica oferece, mostrar trabalhos realizados e facilitar o contato do cliente com poucos cliques.",
          testimonial:
            "Muito rapida na entrega e muito proativa. Foi muito profissional e superou minhas expectativas no visual e na organizacao do site.",
        },
      },
    },
    contact: {
      subtitle: "Contato",
      title: "Vamos tirar o seu",
      titleHighlight: "projeto do papel?",
      description:
        "Se voce chegou ate aqui que tal criamos algo juntos? Me chama por onde for mais confortavel pra voce e me conta um pouco da sua ideia.",
      mainChannel: "Canal principal",
      whatsappTitle: "Fale comigo direto no WhatsApp",
      whatsappDescription:
        "O WhatsApp e o melhor lugar para falarmos sobre projetos, freelas e ideias que voce queira tirar do papel. Clique no botao abaixo e vamos construir algo incrivel juntos.",
      whatsappButton: "Fale comigo no WhatsApp",
      whatsappMessage:
        "Oi Geovanna, encontrei seu portfolio e gostaria de conversar sobre um projeto.",
      otherContacts: "Outras formas de contato",
      openNewTab: "Abrir em nova aba",
      freelanceNote:
        "Pode me chamar para freelas pontuais, projetos maiores ou oportunidades de time",
    },
    footer: {
      copyright: "2025 Geovanna Moura. Todos os direitos reservados.",
      madeWith: "Desenvolvido com carinho, cafe e codigo.",
      privacyPolicy: "Politica de Privacidade",
      privacyDescription:
        "Os dados informados sao usados apenas para contato profissional e nao sao compartilhados com terceiros.",
    },
    allProjects: {
      subtitle: "Meus Projetos",
      title: "Todos os",
      titleHighlight: "meus projetos",
      description:
        "Aqui voce encontra uma visao mais completa dos projetos que ja desenvolvi para os meus clientes: one pages, landing pages e experiencias digitais focadas em UX/UI, performance e resultado. Alguns projetos podem estar temporariamente fora do ar, pois muitos clientes desativam paginas por motivos pessoais ou estrategicos, mas mantenho esses cases aqui pela relevancia que tiveram na minha trajetoria.",
      filters: "Filtros",
      filterByTech: "Filtrar por tecnologias",
      clear: "Limpar",
      noProjectsFound: "Nenhum projeto encontrado com os filtros selecionados.",
      clearAndViewAll: "Limpar filtros e ver todos",
      noTechsYet: "Nenhuma tecnologia cadastrada ainda.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
      navigation: "Navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      goToHome: "Go to home page",
      changeLanguage: "Change language",
    },
    hero: {
      badge: "Geovanna Moura - Front-End Developer | Software Engineer",
      titlePrefix: "Frontend Developer passionate about creating",
      titleHighlight: "intuitive, dynamic and modern interfaces.",
      description:
        "I work with React, TypeScript, JavaScript, HTML and CSS to create dynamic and responsive web applications. I integrate the front-end with APIs (usually in Node.js) and use Python for automation and problem-solving support. My focus is on having organized and componentized code, with usability and accessibility in mind, so that each interface is pleasant to use and easy to evolve.",
      primaryCta: "View projects",
      secondaryCta: "Contact me",
      chips: {
        reactStack: "React - TypeScript - Tailwind",
        uiUx: "UI - UX - SEO",
        userExperience: "User Experience",
        apiIntegration: "REST APIs Integration - Node.js",
        codeQuality: "Code Quality and QA",
        accessibility: "Accessibility and Responsiveness",
      },
      codeBlock: {
        role: "Front-end Developer | Software Engineer",
        principles: [
          "Well-structured front-end, focused on performance and durability",
          "Componentization designed for reuse and visual consistency",
          "Interfaces oriented towards usability and accessibility",
        ],
        currentlyExploring: [
          "Design Systems applied to web products and different teams",
          "Front-end architecture patterns for scalable React applications",
        ],
      },
    },
    about: {
      title: "ABOUT ME",
      photoAlt: "Professional photo of Geovanna Moura",
      paragraphs: [
        "Hi, I'm <highlight>Geovanna Moura</highlight>, a front-end developer, and I'm very happy that you're getting to know my portfolio. I'm from Santos - SP and currently live in Uberlandia - MG, born on <highlight>03/12/2002</highlight>.",
        "I've been working with <highlight>front-end development for over 2 years</highlight> at a <highlight>GPTW</highlight> certified company and I'm studying <highlight>Software Engineering</highlight>, combining daily practice in product with a solid academic foundation in the field.",
        "I found myself in technology because I can unite logic, design and people in the same place. I really enjoy taking <highlight>complex flows and business rules</highlight> and translating them into clear, objective and easy-to-understand screens. I always think about how the person using the system will feel when interacting with each part of the interface, especially in contexts of management systems and critical daily routines.",
        "I have a special passion for <highlight>responsive and well-structured digital solutions</highlight>. I like to see the interface behaving well on different devices and resolutions and taking care of <highlight>UI and UX</highlight> details, such as visual hierarchy, micro-interactions, error messages and empty states. These small details make the user feel that the product was really designed for their routine.",
        "On a daily basis, I don't just stay in the code. I like to be close to those who use the system and those who define business rules. I participate in manual testing and collaborate as <highlight>QA in important flows</highlight>, always trying to anticipate problems, validate real usage scenarios and ensure that what goes to production is stable and makes practical sense.",
        "Outside the corporate environment, I also develop projects for <highlight>small businesses and entrepreneurs</highlight>. I create websites and landing pages focused on clarity, responsiveness and <highlight>SEO best practices</highlight>, always with a product vision: understanding the goal of that page, the audience that will access it and how the interface can support the business to grow professionally.",
      ],
      traits: {
        uiUx: {
          title: "User-centered UI and UX",
          description:
            "I don't create screens just to look pretty. I think about flow, context and user expectations, making navigation light, intuitive and without unnecessary noise.",
        },
        responsive: {
          title: "Responsiveness in practice",
          description:
            "I take care of interface behavior across different screen sizes. I adjust components, typography and layout to maintain a consistent experience on desktop and mobile.",
        },
        userExperience: {
          title: "Real user experience",
          description:
            "I bring a lot of everyday experience from people who work with systems to interface decisions. I like to listen to users, understand their routine and reduce friction whenever possible.",
        },
        seoQuality: {
          title: "SEO and delivery quality",
          description:
            "For websites and landing pages I think about semantic structure, performance and SEO best practices, always together with tests and reviews to ensure reliable delivery.",
        },
        productVision: {
          title: "Analytical product vision",
          description:
            "I connect interface with business: I analyze rules, indicators and impacts of each adjustment so that the screen is not just beautiful, but helps the product deliver results.",
        },
        teamwork: {
          title: "Communication and team partnership",
          description:
            "I like to work close to product, back-end and business areas. I believe that a good solution comes from clear conversations, alignment of expectations and constant feedback.",
        },
      },
    },
    technologies: {
      subtitle: "Stack & Technologies",
      title: "A stack designed for",
      titleHighlight: "amazing digital products.",
      description:
        "More than listing tools, here are the sets of technologies I actually use on a daily basis to bring ideas to life and keep products stable, performant and pleasant for users.",
      groups: {
        frontend: {
          title: "Front-end SPA & Componentization",
          area: "React Applications",
          description:
            "I build reactive interfaces, organized in components, focused on clarity, performance and long-term maintenance.",
        },
        uiStyle: {
          title: "Structure, Style & UI",
          area: "UI - UX - Layout",
          description:
            "I think about visual hierarchy, spacing and fluid reading, always aligning beauty with real daily use.",
        },
        backend: {
          title: "Back-end, Data & Automation",
          area: "APIs & Logic",
          description:
            "I integrate the front with REST APIs, model data and use automations to support business rules and internal routines.",
        },
        seoPerformance: {
          title: "SEO, Performance & Quality",
          area: "Delivery Quality",
          description:
            "I take care of semantic structure, loading time and best practices to deliver fast and findable pages.",
        },
        design: {
          title: "Design & Prototyping",
          area: "Product & Experience",
          description:
            "I work close to UI/UX, validating flows, prototypes and micro-interactions before going to code.",
        },
        git: {
          title: "Git, Code Flow & Collaboration",
          area: "Dev Workflow",
          description:
            "I work with versioning, branches, PRs and review, ensuring organization and clean project history.",
        },
      },
      items: {
        optimization: "Optimization",
        accessibility: "Accessibility",
        uiKits: "UI Kits",
      },
    },
    projects: {
      subtitle: "Cases & Projects",
      title: "Projects that have",
      titleHighlight: "come to life.",
      description:
        "A mix of websites, landing pages and projects delivered to my clients. All focused on clear, responsive interface designed for those who actually use it - with plenty of care and attention to detail.",
      viewMore: "View more projects",
      projectFocus: "Project focus",
      viewOnline: "View project online",
      items: {
        mundoPro: {
          title: "Mundo Pro - Dynamic Landing Pages",
          description:
            "Complete development of 7 thematic landing pages (Peru, Atacama, Italy, Eurotrip, Eastern Europe, Thailand) + 1 one page site for the Mundo Pro travel agency. Built with React, TypeScript and Node.js, focused on high conversion through strategic redirects to WhatsApp, faithfully following the Figma design.",
          focus:
            "Create a system of light and performant landing pages that direct different audiences (specific destinations) to personalized WhatsApp contacts. Each page was optimized for mobile-first with perfect responsiveness, ensuring a smooth experience on all devices.",
          testimonial:
            "Geovanna delivered a set of landing pages that exceeded our expectations. The care with responsiveness and implementation of WhatsApp redirects significantly optimized our conversion rate. All pages work perfectly on any device.",
        },
        crm: {
          title: "Premium CRM - Portfolio Management",
          description:
            "Dashboard developed during my journey at Algar, focused on premium clients, with portfolio view, contracts, tickets and important contacts for follow-up.",
          focus:
            "Organize the consultant's daily routine with a clear portfolio view, facilitating incident prioritization, interaction logging and monitoring of the most strategic clients.",
          testimonial:
            "Geovanna helped transform a complex flow into something much more visual and usable in the team's daily routine. We evolved a lot the portfolio view with this dashboard.",
        },
        riconomia: {
          title: "Riconomia - Financial Calculators",
          description:
            "Support platform for accountants and finance professionals, with practical simulators for different daily scenarios.",
          focus:
            "Offer intuitive calculators for net salary, 13th salary, retirement, financing and cost of living, with clear results and accessible language. Includes Dark/Clean Mode for adaptability and user visual comfort.",
          testimonial:
            "The website has the clarity I needed for the calculations. It turned out exactly as I asked. The simulations are easy to use even for those outside the field. Geovanna is very attentive and listened to all the details I requested, I recommend!!",
        },
        ignis: {
          title: "Ignis - Cognitive Therapy",
          description:
            "Light and welcoming website for remote psychological care, focused on conveying trust and bringing the brand closer to people.",
          focus:
            "Explain simply how the service works, reinforce credibility and make it easy to schedule sessions with just a few clicks.",
          testimonial:
            "It represented my brand and everything I asked for well. Geovanna was available to listen and put it into practice. The result was very professional.",
        },
        grafica: {
          title: "Website - Quick Print Shop",
          description:
            "Complete website with internal pages, service presentation, visual portfolio display and quote form aligned with the print shop flow.",
          focus:
            "Make clear what the print shop offers, show completed work and make it easy for customers to get in touch with just a few clicks.",
          testimonial:
            "Very fast delivery and very proactive. Very professional and exceeded my expectations in the visual and organization of the website.",
        },
      },
    },
    contact: {
      subtitle: "Contact",
      title: "Let's bring your",
      titleHighlight: "project to life?",
      description:
        "If you've made it this far, how about we create something together? Reach out to me through whichever way is most comfortable for you and tell me a bit about your idea.",
      mainChannel: "Main channel",
      whatsappTitle: "Talk to me directly on WhatsApp",
      whatsappDescription:
        "WhatsApp is the best place to talk about projects, freelance work and ideas you want to bring to life. Click the button below and let's build something amazing together.",
      whatsappButton: "Contact me on WhatsApp",
      whatsappMessage:
        "Hi Geovanna, I found your portfolio and would like to talk about a project.",
      otherContacts: "Other ways to contact",
      openNewTab: "Open in new tab",
      freelanceNote:
        "Feel free to reach out for one-time freelance work, larger projects or team opportunities",
    },
    footer: {
      copyright: "2025 Geovanna Moura. All rights reserved.",
      madeWith: "Made with love, coffee and code.",
      privacyPolicy: "Privacy Policy",
      privacyDescription:
        "The information provided is used only for professional contact and is not shared with third parties.",
    },
    allProjects: {
      subtitle: "My Projects",
      title: "All my",
      titleHighlight: "projects",
      description:
        "Here you find a more complete view of the projects I have developed for my clients: one pages, landing pages and digital experiences focused on UX/UI, performance and results. Some projects may be temporarily offline, as many clients deactivate pages for personal or strategic reasons, but I keep these cases here for the relevance they had in my journey.",
      filters: "Filters",
      filterByTech: "Filter by technologies",
      clear: "Clear",
      noProjectsFound: "No projects found with the selected filters.",
      clearAndViewAll: "Clear filters and view all",
      noTechsYet: "No technologies registered yet.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      technologies: "Tecnologias",
      projects: "Proyectos",
      contact: "Contacto",
      navigation: "Navegacion",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      lightMode: "Modo claro",
      darkMode: "Modo oscuro",
      goToHome: "Ir a la pagina de inicio",
      changeLanguage: "Cambiar idioma",
    },
    hero: {
      badge: "Geovanna Moura - Front-End Developer | Software Engineer",
      titlePrefix: "Desarrolladora Frontend apasionada por crear interfaces",
      titleHighlight: "intuitivas, dinamicas y modernas.",
      description:
        "Trabajo con React, TypeScript, JavaScript, HTML y CSS para crear aplicaciones web dinamicas y responsivas. Integro el front-end con APIs (generalmente en Node.js) y uso Python en automatizaciones y apoyo en la resolucion de problemas. Mi enfoque es tener codigo organizado y componentizado, con usabilidad y accesibilidad en mente, para que cada interfaz sea agradable de usar y facil de evolucionar.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactame",
      chips: {
        reactStack: "React - TypeScript - Tailwind",
        uiUx: "UI - UX - SEO",
        userExperience: "Experiencia del Usuario",
        apiIntegration: "Integracion con APIs REST - Node.js",
        codeQuality: "Calidad de codigo y QA",
        accessibility: "Accesibilidad y Responsividad",
      },
      codeBlock: {
        role: "Front-end Developer | Software Engineer",
        principles: [
          "Front-end bien estructurado, enfocado en rendimiento y durabilidad",
          "Componentizacion pensada para reutilizacion y consistencia visual",
          "Interfaces orientadas a la usabilidad y accesibilidad",
        ],
        currentlyExploring: [
          "Design Systems aplicados a productos web y diferentes equipos",
          "Patrones de arquitectura front-end para aplicaciones React escalables",
        ],
      },
    },
    about: {
      title: "SOBRE MI",
      photoAlt: "Foto profesional de Geovanna Moura",
      paragraphs: [
        "Hola, soy <highlight>Geovanna Moura</highlight>, desarrolladora front-end, y estoy muy feliz de que estes conociendo mi portafolio. Soy de Santos - SP y actualmente vivo en Uberlandia - MG, nacida el <highlight>12/03/2002</highlight>.",
        "Trabajo hace mas de <highlight>2 anos con desarrollo front-end</highlight> en una empresa certificada <highlight>GPTW</highlight> y estudio <highlight>Ingenieria de Software</highlight>, combinando practica diaria en producto con una base academica solida en el area.",
        "Me encontre en la tecnologia porque puedo unir logica, diseno y personas en el mismo lugar. Me gusta mucho tomar <highlight>flujos y reglas de negocio complejas</highlight> y traducirlas en pantallas claras, objetivas y faciles de entender. Siempre pienso en como la persona que usa el sistema se sentira al interactuar con cada parte de la interfaz, especialmente en contextos de sistemas de gestion y rutinas criticas del dia a dia.",
        "Tengo una pasion especial por <highlight>soluciones digitales responsivas y bien estructuradas</highlight>. Me gusta ver la interfaz comportandose bien en diferentes dispositivos y resoluciones y cuidar detalles de <highlight>UI y UX</highlight>, como jerarquia visual, microinteracciones, mensajes de error y estados vacios. Estos pequenos cuidados hacen que el usuario sienta que el producto fue realmente pensado para su rutina.",
        "En el dia a dia, no me quedo solo en el codigo. Me gusta estar cerca de quienes usan el sistema y de quienes definen las reglas de negocio. Participo en pruebas manuales y colaboro como <highlight>QA en flujos importantes</highlight>, siempre intentando anticipar problemas, validar escenarios de uso real y garantizar que lo que va a produccion este estable y tenga sentido en la practica.",
        "Fuera del ambiente corporativo, tambien desarrollo proyectos para <highlight>pequenos negocios y emprendedores</highlight>. Creo sitios web y landing pages con enfoque en claridad, responsividad y <highlight>buenas practicas de SEO</highlight>, siempre con vision de producto: entender el objetivo de esa pagina, el publico que va a acceder y como la interfaz puede apoyar al negocio a crecer de forma profesional.",
      ],
      traits: {
        uiUx: {
          title: "UI y UX centrados en el usuario",
          description:
            "No creo pantallas solo para que se vean bonitas. Pienso en flujo, contexto y expectativa de quien usa, dejando la navegacion ligera, intuitiva y sin ruidos innecesarios.",
        },
        responsive: {
          title: "Responsividad en la practica",
          description:
            "Cuido el comportamiento de la interfaz en diferentes tamanos de pantalla. Ajusto componentes, tipografia y layout para mantener la experiencia consistente en desktop y movil.",
        },
        userExperience: {
          title: "Experiencia real del usuario",
          description:
            "Traigo mucho del dia a dia de quienes trabajan con sistemas a las decisiones de interfaz. Me gusta escuchar al usuario, entender su rutina y reducir fricciones siempre que sea posible.",
        },
        seoQuality: {
          title: "SEO y calidad de entrega",
          description:
            "En sitios web y landing pages pienso en estructura semantica, rendimiento y buenas practicas de SEO, siempre junto con pruebas y revisiones para garantizar una entrega confiable.",
        },
        productVision: {
          title: "Vision analitica del producto",
          description:
            "Conecto interfaz con negocio: analizo reglas, indicadores e impactos de cada ajuste para que la pantalla no sea solo bonita, sino que ayude al producto a entregar resultados.",
        },
        teamwork: {
          title: "Comunicacion y colaboracion con el equipo",
          description:
            "Me gusta trabajar cerca de producto, back-end y areas de negocio. Creo que una buena solucion nace de conversaciones claras, alineamiento de expectativas y feedback constante.",
        },
      },
    },
    technologies: {
      subtitle: "Stack y Tecnologias",
      title: "Un stack pensado para",
      titleHighlight: "productos digitales increibles.",
      description:
        "Mas que listar herramientas, aqui estan los conjuntos de tecnologias que realmente uso en el dia a dia para sacar ideas del papel y mantener productos estables, performantes y agradables para el usuario.",
      groups: {
        frontend: {
          title: "Front-end SPA y Componentizacion",
          area: "Aplicaciones React",
          description:
            "Construyo interfaces reactivas, organizadas en componentes, con enfoque en claridad, rendimiento y mantenimiento a largo plazo.",
        },
        uiStyle: {
          title: "Estructura, Estilo y UI",
          area: "UI - UX - Layout",
          description:
            "Pienso en jerarquia visual, espaciados y lectura fluida, siempre alineando belleza con uso real en el dia a dia.",
        },
        backend: {
          title: "Back-end, Datos y Automatizacion",
          area: "APIs y Logica",
          description:
            "Integro el front con APIs REST, modelo datos y uso automatizaciones para apoyar reglas de negocio y rutinas internas.",
        },
        seoPerformance: {
          title: "SEO, Rendimiento y Calidad",
          area: "Calidad de entrega",
          description:
            "Cuido de estructura semantica, tiempo de carga y buenas practicas para entregar paginas rapidas y encontrables.",
        },
        design: {
          title: "Diseno y Prototipado",
          area: "Producto y Experiencia",
          description:
            "Trabajo cerca de UI/UX, validando flujos, prototipos y microinteracciones antes de ir al codigo.",
        },
        git: {
          title: "Git, Flujo de Codigo y Colaboracion",
          area: "Dev Workflow",
          description:
            "Trabajo con versionado, branches, PRs y revision, garantizando organizacion e historial limpio de los proyectos.",
        },
      },
      items: {
        optimization: "Optimizacion",
        accessibility: "Accesibilidad",
        uiKits: "UI Kits",
      },
    },
    projects: {
      subtitle: "Cases y Proyectos",
      title: "Proyectos que ya",
      titleHighlight: "salieron del papel.",
      description:
        "Una mezcla de sitios web, landing pages y proyectos entregados a mis clientes. Todos con enfoque en interfaz clara, responsiva y pensada para quien realmente usa - con mucho carino y atencion a los detalles.",
      viewMore: "Ver mas proyectos",
      projectFocus: "Enfoque del proyecto",
      viewOnline: "Ver proyecto online",
      items: {
        mundoPro: {
          title: "Mundo Pro - Landing Pages Dinamicas",
          description:
            "Desarrollo completo de 7 landing pages tematicas (Peru, Atacama, Italia, Eurotrip, Este de Europa, Tailandia) + 1 sitio one page para la agencia de viajes Mundo Pro. Construido con React, TypeScript y Node.js, con enfoque en alta conversion a traves de redirecciones estrategicas a WhatsApp, siguiendo fielmente el diseno de Figma.",
          focus:
            "Crear un sistema de landing pages ligeras y performantes que dirijan diferentes publicos (destinos especificos) a contactos personalizados en WhatsApp. Cada pagina fue optimizada para mobile-first con responsividad perfecta, garantizando experiencia fluida en todos los dispositivos.",
          testimonial:
            "Geovanna entrego un conjunto de landing pages que supero nuestras expectativas. El cuidado con la responsividad y la implementacion de las redirecciones a WhatsApp optimizo significativamente nuestra tasa de conversion. Todas las paginas funcionan perfectamente en cualquier dispositivo.",
        },
        crm: {
          title: "CRM Premium - Gestion de Cartera",
          description:
            "Panel desarrollado durante mi trayectoria en Algar, enfocado en clientes premium, con vision de cartera, contratos, tickets y contactos importantes para seguimiento.",
          focus:
            "Organizar el dia a dia del consultor con una vision clara de la cartera, facilitando la priorizacion de incidentes, registro de interacciones y seguimiento de los clientes mas estrategicos.",
          testimonial:
            "Geovanna ayudo a transformar un flujo complejo en algo mucho mas visual y utilizable en el dia a dia del equipo. Evolucionamos mucho la vision de cartera con este panel.",
        },
        riconomia: {
          title: "Riconomia - Calculadoras Financieras",
          description:
            "Plataforma de apoyo para contadores y profesionales de finanzas, con simuladores practicos para diferentes escenarios del dia a dia.",
          focus:
            "Ofrecer calculadoras intuitivas para salario neto, aguinaldo, jubilacion, financiamientos y costo de vida, con resultados claros y lenguaje accesible. Incluye Dark/Clean Mode para adaptabilidad y confort visual del usuario.",
          testimonial:
            "El sitio quedo con la claridad que necesitaba para los calculos. Quedo exactamente como pedi. Las simulaciones son faciles de usar incluso para quienes no son del area. Geovanna es muy atenta y escucho todos los detalles que solicite, la recomiendo!!",
        },
        ignis: {
          title: "Ignis - Terapia Cognitiva",
          description:
            "Sitio ligero y acogedor para atencion psicologica remota, enfocado en transmitir confianza y acercar la marca a las personas.",
          focus:
            "Explicar de forma simple como funciona la atencion, reforzar credibilidad y facilitar la programacion de sesiones con pocos clics.",
          testimonial:
            "Represento bien mi marca y todo lo que pedi. Geovanna estuvo disponible para escuchar y poner en practica. El resultado quedo muy profesional.",
        },
        grafica: {
          title: "Sitio Web - Imprenta Rapida",
          description:
            "Sitio completo con paginas internas, presentacion de servicios, exhibicion de portafolio visual y formulario de presupuesto alineado al flujo de la imprenta.",
          focus:
            "Dejar claro lo que ofrece la imprenta, mostrar trabajos realizados y facilitar el contacto del cliente con pocos clics.",
          testimonial:
            "Muy rapida en la entrega y muy proactiva. Fue muy profesional y supero mis expectativas en el visual y la organizacion del sitio.",
        },
      },
    },
    contact: {
      subtitle: "Contacto",
      title: "Vamos a sacar tu",
      titleHighlight: "proyecto del papel?",
      description:
        "Si llegaste hasta aqui, que tal si creamos algo juntos? Contactame por donde te sea mas comodo y cuentame un poco de tu idea.",
      mainChannel: "Canal principal",
      whatsappTitle: "Habla conmigo directo en WhatsApp",
      whatsappDescription:
        "WhatsApp es el mejor lugar para hablar sobre proyectos, freelance e ideas que quieras sacar del papel. Haz clic en el boton de abajo y vamos a construir algo increible juntos.",
      whatsappButton: "Contactame en WhatsApp",
      whatsappMessage:
        "Hola Geovanna, encontre tu portafolio y me gustaria hablar sobre un proyecto.",
      otherContacts: "Otras formas de contacto",
      openNewTab: "Abrir en nueva pestana",
      freelanceNote:
        "Puedes contactarme para freelance puntual, proyectos mas grandes u oportunidades de equipo",
    },
    footer: {
      copyright: "2025 Geovanna Moura. Todos los derechos reservados.",
      madeWith: "Desarrollado con carino, cafe y codigo.",
      privacyPolicy: "Politica de Privacidad",
      privacyDescription:
        "Los datos proporcionados se utilizan solo para contacto profesional y no se comparten con terceros.",
    },
    allProjects: {
      subtitle: "Mis Proyectos",
      title: "Todos mis",
      titleHighlight: "proyectos",
      description:
        "Aqui encuentras una vision mas completa de los proyectos que he desarrollado para mis clientes: one pages, landing pages y experiencias digitales enfocadas en UX/UI, rendimiento y resultados. Algunos proyectos pueden estar temporalmente fuera de linea, ya que muchos clientes desactivan paginas por motivos personales o estrategicos, pero mantengo estos casos aqui por la relevancia que tuvieron en mi trayectoria.",
      filters: "Filtros",
      filterByTech: "Filtrar por tecnologias",
      clear: "Limpiar",
      noProjectsFound: "No se encontraron proyectos con los filtros seleccionados.",
      clearAndViewAll: "Limpiar filtros y ver todos",
      noTechsYet: "Ninguna tecnologia registrada aun.",
    },
  },
};
