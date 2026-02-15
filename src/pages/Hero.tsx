import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { scrollToSection } from "../services/scrollService";
import { useLanguage } from "../i18n";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const chips = React.useMemo(
    () => [
      { iconClass: "lni lni-code", label: t.hero.chips.reactStack },
      { iconClass: "lni lni-layout", label: t.hero.chips.uiUx },
      { iconClass: "lni lni-users", label: t.hero.chips.userExperience },
      { iconClass: "lni lni-network", label: t.hero.chips.apiIntegration },
      { iconClass: "lni lni-ruler-pencil", label: t.hero.chips.codeQuality },
      { iconClass: "lni lni-mobile", label: t.hero.chips.accessibility },
    ],
    [t],
  );

  const codeBlock = React.useMemo(
    () => `const dev = {
  name: "Geovanna Moura",
  role: "${t.hero.codeBlock.role}",
  stack: [
    "JavaScript",
    "CSS3",
    "HTML5",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "Python",
  ],
  principles: [
    "${t.hero.codeBlock.principles[0]}",
    "${t.hero.codeBlock.principles[1]}",
    "${t.hero.codeBlock.principles[2]}",
  ],
  currentlyExploring: [
    "${t.hero.codeBlock.currentlyExploring[0]}",
    "${t.hero.codeBlock.currentlyExploring[1]}",
  ],
};`,
    [t],
  );

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

        {/* dark */}
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
        {/* =================== DESKTOP / LG+ =================== */}
        <div
          className="
            hidden lg:grid
            gap-12 xl:gap-16 2xl:gap-20
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            items-start
          "
        >
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
              <span>{t.hero.badge}</span>
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
                {t.hero.titlePrefix}{" "}
                <span className="text-[#C07A50]">{t.hero.titleHighlight}</span>
              </h1>

              <p
                className="
                  font-montserrat
                  text-sm md:text-base lg:text-[17px]
                  leading-relaxed
                  text-[#7A6A5B] dark:text-[#CBBCA8]
                "
              >
                {t.hero.description}
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-4 lg:mt-2">
              <Button
                onClick={() => handleScroll("projects")}
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
                {t.hero.primaryCta}
              </Button>

              <Button
                onClick={() => handleScroll("contact")}
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
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Chips desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 max-w-3xl 2xl:max-w-5xl lg:mt-2 2xl:mt-4">
              {chips.map((chip) => (
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

          {/* DIREITA: terminal / console (desktop) */}
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
                  portfolio/hero.tsx
                </span>
              </div>

              {/* Código fake (desktop) */}
              <div className="p-4 md:p-6 bg-[#1E1A17] text-[#F8F5F2] font-mono text-[11px] md:text-xs leading-relaxed overflow-auto min-h-[260px]">
                <pre>{codeBlock}</pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================== MOBILE / TABLET (< lg) =================== */}
        <div className="block lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Linha com TEXTO + CONSOLE lado a lado */}
            <div className="flex flex-col xs:flex-row items-stretch gap-5">
              {/* Coluna TEXTO */}
              <div className="flex-1 space-y-5">
                {/* Badge */}
                <div
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2 rounded-full
                    bg-[#E9DFD2] text-[#A9623A] shadow-md
                    text-xs
                    font-montserrat
                    dark:bg-white/5 dark:text-[#E9DFD2]
                    dark:border dark:border-white/10
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-[#C07A50]" />
                  <span>{t.hero.badge}</span>
                </div>

                {/* Título + descrição */}
                <div className="space-y-3 max-w-xl">
                  <h1
                    className="
                      font-montserrat
                      text-[24px] xs:text-[26px] sm:text-[30px]
                      font-bold leading-snug
                      text-[#5B4636] dark:text-[#E9DFD2]
                    "
                  >
                    {t.hero.titlePrefix}{" "}
                    <span className="text-[#C07A50]">
                      {t.hero.titleHighlight}
                    </span>
                  </h1>

                  <p
                    className="
                      font-montserrat
                      text-[13px] xs:text-sm sm:text-[15px]
                      leading-relaxed
                      text-[#7A6A5B] dark:text-[#CBBCA8]
                    "
                  >
                    {t.hero.description}
                  </p>
                </div>

                {/* Botões lado a lado no mobile */}
                <div className="flex flex-row gap-3 mt-1">
                  <Button
                    onClick={() => handleScroll("projects")}
                    className="
                      bg-[#C07A50] hover:bg-[#5B4636]
                      text-[#F8F5F2]
                      font-semibold
                      px-4 py-3
                      text-sm
                      rounded-full
                      shadow-sm
                      flex-1
                      justify-center
                      dark:hover:bg-[#E9DFD2] dark:hover:text-[#0F0D0B]
                    "
                    size="lg"
                  >
                    {t.hero.primaryCta}
                  </Button>

                  <Button
                    onClick={() => handleScroll("contact")}
                    variant="outline"
                    className="
                      border
                      bg-[#5B4636] text-white
                      hover:bg-[#C07A50] hover:text-white
                      font-semibold
                      px-4 py-3
                      text-sm
                      rounded-full
                      flex-1
                      justify-center
                      dark:bg-transparent
                      dark:text-[#E9DFD2]
                      dark:border-white/20
                      dark:hover:bg-white/10
                      dark:hover:border-white/30
                    "
                    size="lg"
                  >
                    {t.hero.secondaryCta}
                  </Button>
                </div>
              </div>

              {/* Coluna CONSOLE – menor e SEM SCROLL HORIZONTAL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="
                  w-full xs:w-auto
                  flex justify-center xs:justify-end
                "
              >
                <div
                  className="
                    w-full max-w-[260px]
                    rounded-2xl overflow-hidden
                    border border-[#D1BFA3]
                    bg-white shadow-sm
                    dark:bg-white/[0.03]
                    dark:border-white/10
                  "
                >
                  <div
                    className="
                      flex items-center justify-between
                      px-3 py-2
                      border-b border-[#E4DACB]
                      bg-[#F8F5F2]
                      dark:bg-white/[0.04]
                      dark:border-white/10
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C07A50]" />
                      <span className="w-2 h-2 rounded-full bg-[#D1BFA3]" />
                      <span className="w-2 h-2 rounded-full bg-[#A6806A]" />
                    </div>
                    <span className="text-[8px] font-montserrat text-[#7A6A5B] dark:text-[#CBBCA8]">
                      portfolio/hero.tsx
                    </span>
                  </div>

                  {/* aqui: só scroll vertical, texto quebrando linha */}
                  <div
                    className="
                      p-2
                      bg-[#1E1A17] text-[#F8F5F2]
                      font-mono text-[9px] leading-relaxed
                      overflow-y-auto overflow-x-hidden
                      min-h-[150px] max-h-[190px]
                    "
                  >
                    <pre className="whitespace-pre-wrap break-words">
                      {codeBlock}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Chips abaixo – 2/linha e 3/linha em xs+ */}
            <div className="mt-4 grid grid-cols-2 xs:grid-cols-3 gap-2.5 max-w-xl">
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className="
                    inline-flex w-full
                    items-center justify-center
                    gap-2
                    rounded-full
                    border border-[#D1BFA3]
                    bg-white/90
                    px-3 py-2.5
                    min-h-[40px]
                    text-[11px]
                    font-montserrat
                    text-[#5B4636]
                    whitespace-normal break-words leading-snug
                    cursor-default
                    dark:bg-white/[0.04]
                    dark:border-white/10
                    dark:text-[#E9DFD2]
                  "
                >
                  <i className={`${chip.iconClass} shrink-0`} />
                  <span className="min-w-0 text-center">{chip.label}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
