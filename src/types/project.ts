export type Project = {
  title: string;
  type?: string;
  segment?: string;
  url?: string | null;
  description: string;
  focus?: string | null;
  testimonial?: string | null;
  client?: string | null;
  stack?: string[];
  desktopImage?: string;
  mobileImage?: string;
  desktopImages?: string[];
  mobileImages?: string[];
  featured?: boolean;
};
