import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import type { BackToTopConfig } from "@/types/backToTop";
import {
  scrollToTopSmooth,
  shouldShowBackToTop,
} from "@/services/backToTopService";

const DEFAULT_CONFIG: Required<BackToTopConfig> = {
  anchorId: "about",
  fallbackScrollY: 400,
};

type Props = {
  config?: BackToTopConfig;
};

const BackToTopButton: React.FC<Props> = ({ config }) => {
  const { anchorId, fallbackScrollY } = { ...DEFAULT_CONFIG, ...(config ?? {}) };

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(shouldShowBackToTop(anchorId, fallbackScrollY));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [anchorId, fallbackScrollY]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTopSmooth}
      className="
        fixed
        bottom-7 right-14
        sm:bottom-7 sm:right-8
        md:bottom-6 md:right-4
        z-40
        rounded-full
        bg-[#C07A50]
        text-[#F8F5F2]
        shadow-[0_12px_30px_rgba(0,0,0,0.35)]
        hover:bg-[#A9623A]
        transition-all
        duration-300
        flex items-center justify-center
        w-10 h-10 md:w-12 md:h-12
        border border-[#F8F5F2]/40
      "
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTopButton;
