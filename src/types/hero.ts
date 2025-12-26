export type HeroChip = {
  iconClass: string; // ex: "lni lni-code"
  label: string;     // ex: "React · TypeScript · Tailwind"
};

export type HeroContent = {
  badgeText: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryCta: { label: string; targetId: string };
  secondaryCta: { label: string; targetId: string };
  chips: HeroChip[];
  codeFilename: string;
  codeBlock: string;
};
