import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { getHeroContent } from "../services/heroService";
import { scrollToSection } from "../services/scrollService";
import type { HeroChip } from "../types/hero";

const Hero: React.FC = () => {
  const content = React.useMemo(() => getHeroContent(), []);

  const handleScroll = (sectionId: string): void => {
    scrollToSection(sectionId);
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100vh] flex items-start
        bg-[#F8F5F2] dark:bg-[#0F0D0B]
      "
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* light */}
        <div className="absolute -top-24 left-0 w-64 h-64 rounded-full bg-[#D1BFA3] opacity-25 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-[-60px] right-0 w-72 h-72 rounded-full bg-[#A6806A] opacity-20 blur-3xl dark:opacity-0" />

        {/* dark (mais discreto e “chique”) */}
        <div className="absolute -top-28 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-0 blur-3xl dark:opacity-[0.14]" />
        <div className="absolute bottom-[-90px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-0 blur-3xl dark:opacity-[0.10]" />
      </div>

      <div
        className="
          w-full mx-auto
          max-w-6xl xl:max-w-7xl 2xl:max-w-none
          px-4 sm:px-8 lg:px-12 2xl:px-16
          pt-24 lg:pt-28
          pb-16 lg:pb-20
        "
      >
        <div className="grid gap-12 xl:gap-16 2xl:gap-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          {/* ESQUERDA: texto + botões + chips */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:space-y-12 2xl:space-y-16 text-left"
          >
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2.5
                px-6 py-2.5 rounded-full
                bg-[#E9DFD2] text-[#A9623A] shadow-md
                text-xs md:text-sm lg:text-[15px]
                font-montserrat
                dark:bg-white/5 dark:text-[#E9DFD2]
                dark:border dark:border-white/10
                dark:shadow-none
              "
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
              <span>{content.badgeText}</span>
            </div>

            {/* Título + texto */}
            <div className="space-y-5 lg:space-y-6 2xl:space-y-7 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl">
              <h1
                className="
                  font-montserrat text-3xl md:text-4xl lg:text-[42px]
                  font-bold leading-snug
                  text-[#5B4636] dark:text-[#E9DFD2]
                "
              >
                {content.titlePrefix}{" "}
                <span className="text-[#C07A50]">{content.titleHighlight}</span>
              </h1>

              <p
                className="
                  font-montserrat
                  text-sm md:text-base lg:text-[17px]
                  leading-relaxed
                  text-[#7A6A5B] dark:text-[#CBBCA8]
                "
              >
                {content.description}
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-4 lg:mt-2">
              <Button
                onClick={() => handleScroll(content.primaryCta.targetId)}
                className="
                  bg-[#C07A50] hover:bg-[#5B4636]
                  text-[#F8F5F2]
                  font-semibold
                  px-8 py-3
                  text-sm md:text-base
                  rounded-full
                  shadow-sm
                  dark:hover:bg-[#E9DFD2] dark:hover:text-[#0F0D0B]
                "
                size="lg"
              >
                {content.primaryCta.label}
              </Button>

              <Button
                onClick={() => handleScroll(content.secondaryCta.targetId)}
                variant="outline"
                className="
                  border
                  bg-[#5B4636] text-white
                  hover:bg-[#C07A50] hover:text-white
                  font-semibold
                  px-8 py-3
                  text-sm md:text-base
                  rounded-full
                  dark:bg-transparent
                  dark:text-[#E9DFD2]
                  dark:border-white/20
                  dark:hover:bg-white/10
                  dark:hover:border-white/30
                "
                size="lg"
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            {/* Chips (RESPONSIVO) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 max-w-3xl 2xl:max-w-5xl lg:mt-2 2xl:mt-4">
              {content.chips.map((chip: HeroChip) => (
                <span
                  key={chip.label}
                  className="
                    inline-flex w-full
                    items-center justify-start
                    gap-3 sm:gap-4
                    rounded-full
                    border border-[#D1BFA3]
                    bg-white/90
                    px-4 py-2.5 sm:px-5 sm:py-3
                    min-h-[44px] sm:min-h-[48px] lg:min-h-[54px]
                    text-[11px] sm:text-xs md:text-sm
                    font-montserrat
                    text-[#5B4636]
                    whitespace-normal break-words leading-snug
                    cursor-default
                    transition-all duration-300 ease-out
                    hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm
                    hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60

                    dark:bg-white/[0.04]
                    dark:border-white/10
                    dark:text-[#E9DFD2]
                    dark:hover:bg-white/[0.07]
                    dark:hover:border-white/18
                  "
                >
                  <i className={`${chip.iconClass} shrink-0`} />
                  <span className="min-w-0">{chip.label}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* DIREITA: terminal / console */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative lg:mt-8 xl:mt-12"
          >
            <div
              className="
                relative w-full ml-auto
                rounded-2xl overflow-hidden
                border border-[#D1BFA3]
                bg-white shadow-sm
                dark:bg-white/[0.03]
                dark:border-white/10
                dark:shadow-none
              "
            >
              {/* Barra da janela */}
              <div
                className="
                  flex items-center justify-between
                  px-4 py-2
                  border-b border-[#E4DACB]
                  bg-[#F8F5F2]
                  dark:bg-white/[0.04]
                  dark:border-white/10
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D1BFA3]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6806A]" />
                </div>
                <span className="text-[11px] font-montserrat text-[#7A6A5B] dark:text-[#CBBCA8]">
                  {content.codeFilename}
                </span>
              </div>

              {/* Código fake */}
              <div className="p-4 md:p-6 bg-[#1E1A17] text-[#F8F5F2] font-mono text-[11px] md:text-xs leading-relaxed overflow-auto min-h-[220px] lg:min-h-[260px]">
                <pre>{content.codeBlock}</pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
