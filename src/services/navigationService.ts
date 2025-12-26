
import type { NavItem, NavSectionId } from "@/types/navigation";

export function getDefaultNavItems(): NavItem[] {
  return [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "technologies", label: "Tecnologias" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];
}

export function getVisibleNavItems(pathname: string, items: NavItem[]): NavItem[] {
  if (pathname === "/projetos") {
    return items.filter((item) => item.id !== "projects");
  }
  return items;
}

export function scrollToSection(sectionId: NavSectionId): void {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

type HandleNavClickParams = {
  pathname: string;
  navigate: (to: string) => void;
  closeMenu: () => void;
  delayMs?: number;
};

export function handleNavClick(
  sectionId: NavSectionId,
  { pathname, navigate, closeMenu, delayMs = 200 }: HandleNavClickParams
): void {
  // se não estiver na home, vai pra home e depois faz o scroll
  if (pathname !== "/") {
    navigate("/");
    closeMenu();

    window.setTimeout(() => {
      scrollToSection(sectionId);
    }, delayMs);

    return;
  }

  scrollToSection(sectionId);
  closeMenu();
}
