import type { Project } from "@/types/project";
import type { Language } from "@/i18n";
import { projectTranslations } from "./projectTranslations";

type ProjectBase = Omit<Project, "title" | "type" | "segment" | "description" | "focus" | "testimonial" | "client"> & {
  translationKey: string;
};

const projectsBase: ProjectBase[] = [
  {
    translationKey: "crm",
    url: "https://bootstrap.rbi.skyhigh.cloud/clientless/#url=https://geovannamoura-com-br-275547.hostingersite.com/painel",
    stack: [
      "React",
      "TypeScript",
      "APIs REST",
      "UI/UX",
      "Responsive Tables",
      "Advanced Filters",
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
    translationKey: "riconomia",
    url: "http://riconomia.com.br/",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "JS Calculators",
      "UX focused on clarity",
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
    translationKey: "ignis",
    url: "https://ignisoficial.com.br/",
    stack: ["WordPress", "HTML5", "CSS3", "UX focused on trust"],
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
    translationKey: "grafica",
    url: "https://graficaloprint.com.br",
    stack: ["WordPress", "HTML5", "CSS3", "Quote Form"],
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
];

export function getProjects(language: Language): Project[] {
  return projectsBase.map((project) => {
    const translation = projectTranslations[project.translationKey]?.[language];
    if (!translation) {
      // Fallback to English
      const fallback = projectTranslations[project.translationKey]?.["en"];
      return {
        ...project,
        title: fallback?.title || project.translationKey,
        type: fallback?.type || "",
        segment: fallback?.segment || "",
        description: fallback?.description || "",
        focus: fallback?.focus || "",
        testimonial: fallback?.testimonial || "",
        client: fallback?.client || "",
      };
    }
    return {
      ...project,
      title: translation.title,
      type: translation.type,
      segment: translation.segment,
      description: translation.description,
      focus: translation.focus,
      testimonial: translation.testimonial,
      client: translation.client,
    };
  });
}

// For backwards compatibility - exports default English projects
export const projects = getProjects("en");
