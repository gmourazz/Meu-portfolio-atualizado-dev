export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  title: string;
  type: string;
  segment: string;
  url: string;
  description: string;
  focus: string;
  testimonial: string;
  client: string;
  stack: string[];
  desktopImages: string[];
  mobileImages: string[];
  featured: boolean;
  links?: ProjectLink[];
}
