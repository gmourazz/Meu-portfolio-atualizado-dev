import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Users, Award } from "lucide-react";
import { useLanguage } from "../i18n";

const About: React.FC = () => {
  const { t } = useLanguage();

  const traits = useMemo(
    () => [
      {
        icon: Palette,
        title: t.about.traits.uiUx.title,
        description: t.about.traits.uiUx.description,
      },
      {
        icon: Code,
        title: t.about.traits.responsive.title,
        description: t.about.traits.responsive.description,
      },
      {
        icon: Users,
        title: t.about.traits.userExperience.title,
        description: t.about.traits.userExperience.description,
      },
      {
        icon: Award,
        title: t.about.traits.seoQuality.title,
        description: t.about.traits.seoQuality.description,
      },
      {
        icon: Code,
        title: t.about.traits.productVision.title,
        description: t.about.traits.productVision.description,
      },
      {
        icon: Users,
        title: t.about.traits.teamwork.title,
        description: t.about.traits.teamwork.description,
      },
    ],
    [t]
  );

  // Helper to render paragraph with highlights
  const renderParagraph = (text: string) => {
    const parts = text.split(/<highlight>|<\/highlight>/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="font-semibold text-[#5B4636] dark:text-[#F3EEE7]">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="about"
      className="
        relative
        bg-[#E9DFD2] dark:bg-[#0F1113]
        transition-colors
        overflow-hidden
      "
    >
      {/* glows bem sutis (só no dark) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute -top-24 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-[0.10] blur-3xl" />
        <div className="absolute bottom-[-90px] right-[-60px] w-80 h-80 rounded-full bg-[#A6806A] opacity-[0.10] blur-3xl" />
      </div>

      <div
        className="
          w-full mx-auto
          max-w-6xl xl:max-w-7xl 2xl:max-w-none
          px-4 sm:px-8 lg:px-12 2xl:px-16
          py-16 sm:py-18 lg:py-24
        "
      >
        {/* Foto + heading no topo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12 md:mb-14"
        >
          <div className="relative mb-6 sm:mb-7">
            <div
              className="
                relative
                w-40 h-40 xs:w-44 xs:h-44
                sm:w-52 sm:h-52
                md:w-64 md:h-64
                lg:w-72 lg:h-72
                rounded-full overflow-hidden
                border border-[#D1BFA3] dark:border-white/10
                bg-[#F8F5F2] dark:bg-[#141619]
                shadow-2xl dark:shadow-[0_28px_70px_rgba(0,0,0,0.60)]
                ring-1 ring-black/0 dark:ring-white/5
                transition-colors
              "
            >
              <img
                src="/img/perfilcorp.jpeg"
                alt={t.about.photoAlt}
                className="w-full h-full object-cover"
              />
              {/* brilho sutil no dark */}
              <div className="pointer-events-none absolute inset-0 hidden dark:block bg-gradient-to-b from-white/10 via-transparent to-black/30" />
            </div>
          </div>

          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-5xl font-bold tracking-[0.12em] text-[#5B4636] dark:text-[#F3EEE7]">
            {t.about.title}
          </h2>

          <div className="mt-4 sm:mt-5 h-1.5 w-32 sm:w-40 md:w-52 rounded-full bg-[#C07A50]" />
        </motion.div>

        {/* Conteúdo principal – texto + cards */}
        <div
          className="
            grid
            gap-y-10 sm:gap-y-12
            gap-x-6 md:gap-x-10 xl:gap-x-14
            lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]
            items-start
          "
        >
          {/* Coluna esquerda – texto mais pessoal */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5 sm:space-y-6 max-w-3xl lg:pl-4 xl:pl-8"
          >
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[14px] sm:text-base md:text-lg font-montserrat leading-relaxed text-[#7A6A5B] dark:text-[#CFC6BB]"
              >
                {renderParagraph(paragraph)}
              </p>
            ))}
          </motion.div>

          {/* Coluna direita – cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              grid grid-cols-1
              md:grid-cols-2
              gap-4 md:gap-5
            "
          >
            {traits.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="
                  rounded-2xl
                  border border-[#D1BFA3] dark:border-white/10
                  bg-white/95 dark:bg-[#141619]
                  p-4 sm:p-5 md:p-6
                  shadow-sm dark:shadow-[0_18px_48px_rgba(0,0,0,0.50)]
                  cursor-default
                  transition-shadow hover:shadow-md
                "
              >
                <div className="flex items-start sm:items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A6806A]/15 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#5B4636] dark:text-[#F3EEE7]" />
                  </div>

                  <h4 className="text-[14px] sm:text-base md:text-lg font-montserrat font-semibold leading-snug text-[#5B4636] dark:text-[#F3EEE7]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-[12px] sm:text-sm md:text-base font-montserrat leading-relaxed text-[#7A6A5B] dark:text-[#CFC6BB]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
