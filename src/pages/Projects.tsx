import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { projectsService } from "@/services/projectsService";
import type { Project } from "@/types/project";

const Projects: React.FC = () => {
  const featuredProjects = useMemo<Project[]>(
    () => projectsService.getFeaturedProjects(projects, 6),
    []
  );

  const handleViewMore = (): void => {
    window.open("/projetos", "_blank");
  };

  return (
    <section
      id="projects"
      className="
        relative
        bg-[#E9DFD2] dark:bg-[#141619]
        py-14 sm:py-18 lg:py-24
        overflow-hidden
        transition-colors
      "
    >
      {/* glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* LIGHT */}
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-35 blur-3xl dark:hidden" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl dark:hidden" />

        {/* DARK (mesma pegada do About) */}
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-[0.12] blur-3xl hidden dark:block" />
        <div className="absolute bottom-[-90px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-[0.10] blur-3xl hidden dark:block" />
      </div>

      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-10 sm:mb-12 md:mb-16"
        >
          <p
            className="
              text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg
              tracking-[0.22em] xs:tracking-[0.26em] sm:tracking-[0.32em]
              uppercase
              text-[#A6806A] dark:text-[#D1BFA3]
              font-montserrat
              mb-5 sm:mb-8 md:mb-12
              -mt-4 sm:-mt-6 md:-mt-10
              transition-colors
            "
          >
            Cases & Projetos
          </p>

          <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-[#5B4636] dark:text-[#F8F5F2] leading-snug transition-colors">
            Projetos que já{" "}
            <span className="text-[#C07A50]">saíram do papel.</span>
          </h2>

          <div className="mt-4 h-[3px] sm:h-[4px] w-full max-w-[200px] sm:max-w-[260px] md:max-w-[384px] rounded-full bg-[#C07A50] md:mx-auto" />

          <p className="mt-4 sm:mt-5 max-w-3xl text-[13px] sm:text-sm md:text-base lg:text-[15px] text-[#7A6A5B] dark:text-[#D1BFA3] md:mx-auto leading-relaxed transition-colors">
            Uma mistura de sites, landing pages e projetos entregues aos meus
            clientes. Todos com foco em interface clara, responsiva e pensada
            para quem realmente usa — com bastante carinho e atenção aos
            detalhes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:gap-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
          <Button
            onClick={handleViewMore}
            className="
              bg-[#C07A50] hover:bg-[#A9623A]
              text-[#F8F5F2]
              font-montserrat font-semibold
              rounded-full
              px-8 sm:px-14 md:px-16
              py-3.5 md:py-5
              text-sm sm:text-[15px] md:text-lg
              shadow-lg shadow-[rgba(192,122,80,0.45)]
              tracking-wide
              hover:-translate-y-0.5 transition-transform
              w-full sm:w-auto
              max-w-[420px]
            "
          >
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
