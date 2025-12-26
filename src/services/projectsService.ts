import type { Project } from "@/types/project";

function getAllTechs(list: Project[]): string[] {
  const set = new Set<string>();
  list.forEach((p) => (p.stack ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function filterByTechs(list: Project[], selectedTechs: string[]): Project[] {
  if (selectedTechs.length === 0) return list;

  return list.filter((p) =>
    selectedTechs.every((t) => (p.stack ?? []).includes(t))
  );
}

function getFeaturedProjects(list: Project[], limit = 6): Project[] {
  const featured = list.filter((p) => p.featured);
  const base = featured.length ? featured : list;
  return base.slice(0, limit);
}

export const projectsService = {
  getAllTechs,
  filterByTechs,
  getFeaturedProjects,
};
