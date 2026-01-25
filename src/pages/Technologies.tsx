import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaFigma,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiVite } from "react-icons/si";
import { FiDatabase, FiSearch, FiTrendingUp, FiLayout } from "react-icons/fi";
import { useLanguage } from "../i18n";

type IconComponent = React.ComponentType<{ className?: string }>;

type StackItem = {
  name: string;
  Icon: IconComponent;
  color: string;
};

type StackGroup = {
  title: string;
  area: string;
  description: string;
  items: StackItem[];
};

const TailwindIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 33"
    className={className ?? "w-5 h-5 md:w-6 md:h-6"}
  >
    <g clipPath="url(#tw)">
      <path
        fill="#38BDF8"
        fillRule="evenodd"
        d="M27 0c-7.2 0-13.1 5.9-13.1 13.1 0 5.3 3.2 9.8 7.6 11.8 1.1.5 2.3.8 3.5.8 1.2 0 2.4-.3 3.5-.8 4.4-2 7.6-6.5 7.6-11.8C40.1 5.9 34.2 0 27 0zM13.5 16.5c-7.2 0-13.1 5.9-13.1 13.1 0 5.3 3.2 9.8 7.6 11.8 1.1.5 2.3.8 3.5.8 1.2 0 2.4-.3 3.5-.8 4.4-2 7.6-6.5 7.6-11.8C27 22.4 20.7 16.5 13.5 16.5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tw">
        <path fill="#fff" d="M0 0h54v33H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Technologies: React.FC = () => {
  const { t } = useLanguage();

  const stackGroups: StackGroup[] = useMemo(
    () => [
      {
        title: t.technologies.groups.frontend.title,
        area: t.technologies.groups.frontend.area,
        description: t.technologies.groups.frontend.description,
        items: [
          { name: "React", Icon: FaReact as unknown as IconComponent, color: "#61DAFB" },
          { name: "TypeScript", Icon: SiTypescript as unknown as IconComponent, color: "#3178C6" },
          { name: "JavaScript", Icon: FaJsSquare as unknown as IconComponent, color: "#F7DF1E" },
          { name: "Vite", Icon: SiVite as unknown as IconComponent, color: "#646CFF" },
        ],
      },
      {
        title: t.technologies.groups.uiStyle.title,
        area: t.technologies.groups.uiStyle.area,
        description: t.technologies.groups.uiStyle.description,
        items: [
          { name: "HTML5", Icon: FaHtml5 as unknown as IconComponent, color: "#E34F26" },
          { name: "CSS3", Icon: FaCss3Alt as unknown as IconComponent, color: "#1572B6" },
          { name: "Tailwind", Icon: TailwindIcon, color: "#38BDF8" },
          { name: "UI/UX", Icon: FiLayout as unknown as IconComponent, color: "#C07A50" },
        ],
      },
      {
        title: t.technologies.groups.backend.title,
        area: t.technologies.groups.backend.area,
        description: t.technologies.groups.backend.description,
        items: [
          { name: "Node.js", Icon: FaNodeJs as unknown as IconComponent, color: "#339933" },
          { name: "SQL", Icon: FiDatabase as unknown as IconComponent, color: "#5B4636" },
          { name: "Python", Icon: FaPython as unknown as IconComponent, color: "#3776AB" },
        ],
      },
      {
        title: t.technologies.groups.seoPerformance.title,
        area: t.technologies.groups.seoPerformance.area,
        description: t.technologies.groups.seoPerformance.description,
        items: [
          { name: "SEO", Icon: FiSearch as unknown as IconComponent, color: "#C07A50" },
          { name: t.technologies.items.optimization, Icon: FiTrendingUp as unknown as IconComponent, color: "#A6806A" },
          { name: t.technologies.items.accessibility, Icon: FiLayout as unknown as IconComponent, color: "#5B4636" },
        ],
      },
      {
        title: t.technologies.groups.design.title,
        area: t.technologies.groups.design.area,
        description: t.technologies.groups.design.description,
        items: [
          { name: "Figma", Icon: FaFigma as unknown as IconComponent, color: "#F24E1E" },
          { name: t.technologies.items.uiKits, Icon: FiLayout as unknown as IconComponent, color: "#A6806A" },
        ],
      },
      {
        title: t.technologies.groups.git.title,
        area: t.technologies.groups.git.area,
        description: t.technologies.groups.git.description,
        items: [
          { name: "Git", Icon: FaGitAlt as unknown as IconComponent, color: "#F05033" },
          { name: "GitHub", Icon: FaGithub as unknown as IconComponent, color: "#181717" },
        ],
      },
    ],
    [t]
  );

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
  };

  return (
    <section
      id="technologies"
      className="
        relative
        bg-[#F8F5F2] dark:bg-[#0A0A0A]
        py-16 sm:py-18 lg:py-24
        overflow-hidden
        transition-colors
      "
    >
      {/* glow: claro + escuro */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* LIGHT */}
        <div className="absolute -top-24 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-30 blur-3xl dark:hidden" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl dark:hidden" />

        {/* DARK */}
        <div className="absolute -top-28 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-[0.14] blur-3xl hidden dark:block" />
        <div className="absolute bottom-[-90px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-[0.12] blur-3xl hidden dark:block" />
      </div>

      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-10 sm:mb-14 md:mb-16"
        >
          <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.22em] uppercase text-[#A6806A] dark:text-[#CFC6BB] font-montserrat mb-3 sm:mb-4 transition-colors">
            {t.technologies.subtitle}
          </p>

          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-[#5B4636] dark:text-[#F3EEE7] transition-colors">
            {t.technologies.title}{" "}
            <span className="text-[#C07A50]">{t.technologies.titleHighlight}</span>
          </h2>

          <div className="mt-4 sm:mt-5 h-[3px] w-24 sm:w-28 md:w-32 rounded-full bg-[#C07A50] md:mx-auto" />

          <p className="mt-4 sm:mt-5 max-w-3xl text-[13px] sm:text-sm md:text-base lg:text-[15px] text-[#7A6A5B] dark:text-[#CFC6BB] md:mx-auto leading-relaxed transition-colors">
            {t.technologies.description}
          </p>
        </motion.div>

        {/* “glass” do bloco */}
        <div
          className="
            rounded-3xl
            border border-[#E0D3C2]/70 dark:border-white/10
            bg-white/85 dark:bg-[#0F0D0B]
            backdrop-blur-xl
            px-3 sm:px-5 md:px-8
            py-5 sm:py-6 md:py-8
            shadow-[0_18px_45px_rgba(0,0,0,0.06)] dark:shadow-[0_22px_55px_rgba(0,0,0,0.55)]
            transition-colors
          "
        >
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="
              grid grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-4 sm:gap-5 md:gap-6
            "
          >
            {stackGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={card}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 230, damping: 18 },
                }}
                className="
                  group relative
                  rounded-2xl
                  bg-[#F8F5F2] dark:bg-[#14110E]
                  p-4 sm:p-5 md:p-6
                  shadow-sm dark:shadow-[0_14px_40px_rgba(0,0,0,0.55)]
                  cursor-default
                  transition-all
                  border border-[#E0D3C2]/60 dark:border-white/10
                  hover:border-[#C07A50]/70
                  flex flex-col gap-3 sm:gap-4
                "
              >
                <div className="absolute -top-[1px] left-6 right-6 h-[3px] rounded-full bg-[#C07A50] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#A6806A] dark:text-[#CFC6BB] font-montserrat transition-colors">
                    {group.area}
                  </span>
                  <h3 className="text-sm sm:text-[15px] md:text-base lg:text-[17px] font-montserrat font-semibold text-[#5B4636] dark:text-[#F3EEE7] transition-colors">
                    {group.title}
                  </h3>
                </div>

                <p className="text-[12px] sm:text-xs md:text-sm text-[#7A6A5B] dark:text-[#CFC6BB] leading-relaxed font-montserrat transition-colors">
                  {group.description}
                </p>

                {/* pills */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="
                        inline-flex items-center gap-2
                        px-2.5 sm:px-3 py-1.5 rounded-full
                        bg-white dark:bg-[#0F0D0B]
                        border border-[#E0D3C2] dark:border-white/10
                        shadow-[0_4px_12px_rgba(0,0,0,0.06)] dark:shadow-none
                        transition-colors
                      "
                    >
                      <span
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.Icon className="text-[11px] sm:text-[13px] text-white" />
                      </span>
                      <span className="text-[10px] sm:text-[11px] md:text-xs font-montserrat text-[#5B4636] dark:text-[#F3EEE7] transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
