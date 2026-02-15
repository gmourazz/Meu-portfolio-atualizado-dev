export type NavSectionId =
  | "hero"
  | "about"
  | "certificates"
  | "technologies"
  | "projects"
  | "contact";

export type NavItem = {
  id: NavSectionId;
  label: string;
};