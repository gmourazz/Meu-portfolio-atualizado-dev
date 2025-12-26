import type { SocialLink } from "../types/contact";
import { Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export const buildWhatsappMessage = (): string => {
  return encodeURIComponent(
    "Oi Geovanna, encontrei seu portfólio e gostaria de conversar sobre um projeto. 🙂"
  );
};

export const getSocialLinks = (whatsappMessage: string): SocialLink[] => [
  {
    icon: FaWhatsapp,
    href: `https://wa.me/5534999865512?text=${whatsappMessage}`,
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:geovannamouragr@outlook.com?subject=Contato%20via%20portf%C3%B3lio&body=Oi%20Geovanna,%20vi%20seu%20portf%C3%B3lio%20e...",
    label: "E-mail",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/geovannamoura-23472b216",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/gmourazz",
    label: "GitHub",
  },
];
