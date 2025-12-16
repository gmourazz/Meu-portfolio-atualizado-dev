import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // mostra a seta quando o topo da seção "Sobre" já passou do topo da tela
        setVisible(rect.top <= 0);
      } else {
        // fallback se não achar o #about
        setVisible(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // já checa na primeira montagem

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="
        fixed
        bottom-6 right-6
        z-40
        rounded-full
        bg-[#C07A50]
        text-[#F8F5F2]
        shadow-[0_12px_30px_rgba(0,0,0,0.35)]
        hover:bg-[#A9623A]
        transition-all
        duration-300
        flex items-center justify-center
        w-11 h-11 md:w-12 md:h-12
        border border-[#F8F5F2]/40
      "
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTopButton;
