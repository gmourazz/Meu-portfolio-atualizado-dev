import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getTranslatedProjects } from "@/data/projects";
import { projectsService } from "@/services/projectsService";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/i18n";

const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  const translatedProjects = useMemo(
    () => getTranslatedProjects(language),
    [language],
  );

  const featuredProjects = useMemo(
    () => projectsService.getFeaturedProjects(translatedProjects, 4),
    [translatedProjects],
  );

  return (
    <section
      id="projects"
      className="
        relative
        bg-[#E9DFD2] dark:bg-[#0B0D10]
        py-14 sm:py-18 lg:py-24
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* glow light */}
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-35 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl dark:opacity-0" />

        {/* glow dark */}
        <div className="absolute -top-28 left-[-60px] w-80 h-80 rounded-full bg-black/55 opacity-0 blur-3xl dark:opacity-100" />
        <div className="absolute bottom-[-90px] right-[-60px] w-96 h-96 rounded-full bg-[#C07A50]/10 opacity-0 blur-3xl dark:opacity-100" />
      </div>

      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <div className="max-w-3xl text-left">
            <p className="text-[10px] xs:text-xs md:text-sm tracking-[0.24em] xs:tracking-[0.28em] uppercase text-[#A6806A] dark:text-[#D1BFA3] font-montserrat mb-2.5 sm:mb-3">
              {t.projects.subtitle}
            </p>

            <h1 className="font-montserrat text-2xl xs:text-[26px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#5B4636] dark:text-[#F8F5F2] leading-tight">
              {t.projects.title}{" "}
              <span className="text-[#C07A50]">{t.projects.titleHighlight}</span>
            </h1>

            <div className="mt-3 sm:mt-4 h-[3px] w-full max-w-[220px] sm:max-w-[280px] md:max-w-[360px] rounded-full bg-[#C07A50]" />

            <p className="mt-4 sm:mt-5 text-[13px] xs:text-sm md:text-base lg:text-[15px] text-[#7A6A5B] dark:text-[#CFC7BE] leading-relaxed">
              {t.projects.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            to="/projetos"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-[#5B4636] bg-[#5B4636]
              text-[#F8F5F2]
              px-6 py-3
              text-sm md:text-base
              font-montserrat font-medium
              shadow-sm
              hover:bg-[#C07A50] hover:border-[#C07A50]
              transition-colors

              dark:border-white/10 dark:bg-[#050607]
              dark:text-[#F8F5F2]
              dark:hover:bg-[#131922] dark:hover:border-white/15
            "
          >
            {t.projects.viewMore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
