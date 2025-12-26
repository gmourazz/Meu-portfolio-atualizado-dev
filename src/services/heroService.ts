import type { HeroContent } from "../types/hero";

export function getHeroContent(): HeroContent {
  return {
    badgeText: "Geovanna Moura · Front-End Developer | Software Engineer",

    titlePrefix: "Desenvolvedora Frontend apaixonada em criar interfaces",
    titleHighlight: "intuitivas, dinâmicas e modernas.",

    description:
      "Trabalho com React, TypeScript, JavaScript, HTML e CSS para criar aplicações web dinâmicas e responsivas. Integro o front-end com APIs (geralmente em Node.js) e uso Python em automações e apoio na resolução de problemas. Meu foco é ter código organizado e componentizado, com usabilidade e acessibilidade em mente, para que cada interface seja agradável de usar e fácil de evoluir.",

    primaryCta: { label: "Ver projetos", targetId: "projects" },
    secondaryCta: { label: "Falar comigo", targetId: "contact" },

    chips: [
      { iconClass: "lni lni-code", label: "React · TypeScript · Tailwind" },
      { iconClass: "lni lni-layout", label: "UI · UIX · SEO" },
      { iconClass: "lni lni-users", label: "Experiência do Usuário" },
      { iconClass: "lni lni-network", label: "Integração com APIs REST · Node.js" },
      { iconClass: "lni lni-ruler-pencil", label: "Qualidade de código e QA" },
      { iconClass: "lni lni-mobile", label: "Acessibilidade e Responsividade" },
    ],

    codeFilename: "portfolio/hero.tsx",

    codeBlock: `const dev = {
  name: "Geovanna Moura",
  role: "Front-end Developer | Software Engineer",
  stack: [
    "JavaScript",
    "CSS3",
    "HTML5",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "Python",
  ],
  principles: [
    "Front-end bem estruturado, com foco em performance e durabilidade",
    "Componentização pensada para reutilização e consistência visual",
    "Interfaces orientadas à usabilidade e acessibilidade",
  ],
  currentlyExploring: [
    "Design Systems aplicados a produtos web e times diferentes",
    "Padrões de arquitetura front-end para aplicações React escaláveis",
  ],
};`,
  };
}
