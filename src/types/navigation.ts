export type NavSectionId =
  | "hero"
  | "about"
  | "technologies"
  | "projects"
  | "contact";

export type NavItem = {
  id: NavSectionId;
  label: string;
};
