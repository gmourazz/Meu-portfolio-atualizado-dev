import type { Language } from "@/i18n";

type ProjectTranslation = {
  title: string;
  type: string;
  segment: string;
  description: string;
  focus: string;
  testimonial: string;
  client: string;
};

export const projectTranslations: Record<string, Record<Language, ProjectTranslation>> = {
  crm: {
    "pt-BR": {
      title: "CRM Premium - Gestao de Carteira",
      type: "Sistema web - CRM",
      segment: "Telecom - Clientes premium",
      description:
        "Painel desenvolvido durante minha trajetoria na Algar, focado em clientes premium, com visao de carteira, contratos, chamados e contatos importantes para follow-up.",
      focus:
        "Organizar o dia a dia do consultor com uma visao clara da carteira, facilitando priorizacao de incidentes, registro de interacoes e acompanhamento dos clientes mais estrategicos.",
      testimonial:
        "A Geovanna ajudou a transformar um fluxo complexo em algo bem mais visual e utilizavel no dia a dia do time. Evoluimos muito a visao de carteira com esse painel.",
      client: "Fabricio (Agile Master)",
    },
    en: {
      title: "Premium CRM - Portfolio Management",
      type: "Web System - CRM",
      segment: "Telecom - Premium Clients",
      description:
        "Dashboard developed during my journey at Algar, focused on premium clients, with portfolio view, contracts, tickets and important contacts for follow-up.",
      focus:
        "Organize the consultant's daily routine with a clear portfolio view, facilitating incident prioritization, interaction logging and monitoring of the most strategic clients.",
      testimonial:
        "Geovanna helped transform a complex flow into something much more visual and usable in the team's daily routine. We evolved a lot the portfolio view with this dashboard.",
      client: "Fabricio (Agile Master)",
    },
    es: {
      title: "CRM Premium - Gestion de Cartera",
      type: "Sistema web - CRM",
      segment: "Telecom - Clientes premium",
      description:
        "Panel desarrollado durante mi trayectoria en Algar, enfocado en clientes premium, con vision de cartera, contratos, tickets y contactos importantes para seguimiento.",
      focus:
        "Organizar el dia a dia del consultor con una vision clara de la cartera, facilitando la priorizacion de incidentes, registro de interacciones y seguimiento de los clientes mas estrategicos.",
      testimonial:
        "Geovanna ayudo a transformar un flujo complejo en algo mucho mas visual y utilizable en el dia a dia del equipo. Evolucionamos mucho la vision de cartera con este panel.",
      client: "Fabricio (Agile Master)",
    },
  },
  riconomia: {
    "pt-BR": {
      title: "Riconomia - Calculadoras Financeiras",
      type: "Site institucional - Calculadoras",
      segment: "Financas - Contabilidade",
      description:
        "Plataforma de apoio para contadores e profissionais de financas, com simuladores praticos para diferentes cenarios do dia a dia.",
      focus:
        "Oferecer calculadoras intuitivas para salario liquido, 13o, aposentadoria, financiamentos e custo de vida, com resultados claros e linguagem acessivel. Incluido Dark/Clean Mode para adaptabilidade e conforto visual do usuario.",
      testimonial:
        "O site ficou com a clareza que eu precisava para os calculos. Ficou do jeitinho que eu pedi, As simulacoes ficaram faceis de usar ate para quem nao e da area. A Geovanna e muito atenciosa e escutou todos os detalhes que solicitei, recomendo!!",
      client: "Carlos H.",
    },
    en: {
      title: "Riconomia - Financial Calculators",
      type: "Institutional website - Calculators",
      segment: "Finance - Accounting",
      description:
        "Support platform for accountants and finance professionals, with practical simulators for different daily scenarios.",
      focus:
        "Offer intuitive calculators for net salary, 13th salary, retirement, financing and cost of living, with clear results and accessible language. Includes Dark/Clean Mode for adaptability and user visual comfort.",
      testimonial:
        "The website has the clarity I needed for the calculations. It turned out exactly as I asked. The simulations are easy to use even for those outside the field. Geovanna is very attentive and listened to all the details I requested, I recommend!!",
      client: "Carlos H.",
    },
    es: {
      title: "Riconomia - Calculadoras Financieras",
      type: "Sitio institucional - Calculadoras",
      segment: "Finanzas - Contabilidad",
      description:
        "Plataforma de apoyo para contadores y profesionales de finanzas, con simuladores practicos para diferentes escenarios del dia a dia.",
      focus:
        "Ofrecer calculadoras intuitivas para salario neto, aguinaldo, jubilacion, financiamientos y costo de vida, con resultados claros y lenguaje accesible. Incluye Dark/Clean Mode para adaptabilidad y confort visual del usuario.",
      testimonial:
        "El sitio quedo con la claridad que necesitaba para los calculos. Quedo exactamente como pedi. Las simulaciones son faciles de usar incluso para quienes no son del area. Geovanna es muy atenta y escucho todos los detalles que solicite, la recomiendo!!",
      client: "Carlos H.",
    },
  },
  ignis: {
    "pt-BR": {
      title: "Ignis - Terapia Cognitiva",
      type: "Site institucional",
      segment: "Saude - Psicologia",
      description:
        "Site leve e acolhedor para atendimento psicologico remoto, com foco em transmitir confianca e aproximar a marca das pessoas.",
      focus:
        "Explicar de forma simples como funciona o atendimento, reforcar credibilidade e facilitar o agendamento de sessoes com poucos cliques.",
      testimonial:
        "Representou bem a minha marca e tudo que eu pedi. A Geovanna esteve a disposicao para escutar e colocar em pratica. O resultado ficou muito profissional.",
      client: "Rafael",
    },
    en: {
      title: "Ignis - Cognitive Therapy",
      type: "Institutional website",
      segment: "Health - Psychology",
      description:
        "Light and welcoming website for remote psychological care, focused on conveying trust and bringing the brand closer to people.",
      focus:
        "Explain simply how the service works, reinforce credibility and make it easy to schedule sessions with just a few clicks.",
      testimonial:
        "It represented my brand and everything I asked for well. Geovanna was available to listen and put it into practice. The result was very professional.",
      client: "Rafael",
    },
    es: {
      title: "Ignis - Terapia Cognitiva",
      type: "Sitio institucional",
      segment: "Salud - Psicologia",
      description:
        "Sitio ligero y acogedor para atencion psicologica remota, enfocado en transmitir confianza y acercar la marca a las personas.",
      focus:
        "Explicar de forma simple como funciona la atencion, reforzar credibilidad y facilitar la programacion de sesiones con pocos clics.",
      testimonial:
        "Represento bien mi marca y todo lo que pedi. Geovanna estuvo disponible para escuchar y poner en practica. El resultado quedo muy profesional.",
      client: "Rafael",
    },
  },
  grafica: {
    "pt-BR": {
      title: "Site - Grafica Rapida",
      type: "Site institucional",
      segment: "Servicos - Grafica rapida",
      description:
        "Site completo com paginas internas, apresentacao de servicos, exibicao de portfolio visual e formulario de orcamento alinhado ao fluxo da grafica.",
      focus:
        "Deixar claro o que a grafica oferece, mostrar trabalhos realizados e facilitar o contato do cliente com poucos cliques.",
      testimonial:
        "Muito rapida na entrega e muito proativa. Foi muito profissional e superou minhas expectativas no visual e na organizacao do site.",
      client: "Douglas",
    },
    en: {
      title: "Website - Quick Print Shop",
      type: "Institutional website",
      segment: "Services - Quick printing",
      description:
        "Complete website with internal pages, service presentation, visual portfolio display and quote form aligned with the print shop flow.",
      focus:
        "Make clear what the print shop offers, show completed work and make it easy for customers to get in touch with just a few clicks.",
      testimonial:
        "Very fast delivery and very proactive. Very professional and exceeded my expectations in the visual and organization of the website.",
      client: "Douglas",
    },
    es: {
      title: "Sitio Web - Imprenta Rapida",
      type: "Sitio institucional",
      segment: "Servicios - Imprenta rapida",
      description:
        "Sitio completo con paginas internas, presentacion de servicios, exhibicion de portafolio visual y formulario de presupuesto alineado al flujo de la imprenta.",
      focus:
        "Dejar claro lo que ofrece la imprenta, mostrar trabajos realizados y facilitar el contacto del cliente con pocos clics.",
      testimonial:
        "Muy rapida en la entrega y muy proactiva. Fue muy profesional y supero mis expectativas en el visual y la organizacion del sitio.",
      client: "Douglas",
    },
  },
};
