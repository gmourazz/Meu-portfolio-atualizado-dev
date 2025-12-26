import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { projects } from "@/data/projects";
import { projectsService } from "@/services/projectsService";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types/project";

const AllProjects: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const allTechs = useMemo<string[]>(
    () => projectsService.getAllTechs(projects),
    []
  );

  const filteredProjects = useMemo<Project[]>(
    () => projectsService.filterByTechs(projects, selectedTechs),
    [selectedTechs]
  );

  const toggleTech = (tech: string): void => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = (): void => setSelectedTechs([]);

  return (
    <section
      id="all-projects"
      className="
        relative
        bg-[#E9DFD2] dark:bg-[#0B0D10]
        py-16 sm:py-18 lg:py-24
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* glow light */}
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-35 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl dark:opacity-0" />

        {/* glow dark (mais discreto) */}
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
          {/* header responsivo */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl text-left">
              <p className="text-[10px] xs:text-xs md:text-sm tracking-[0.28em] uppercase text-[#A6806A] dark:text-[#D1BFA3] font-montserrat mb-3">
                Meus Projetos
              </p>

              <h1 className="font-montserrat text-2xl xs:text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#5B4636] dark:text-[#F8F5F2] leading-tight">
                Todos os <span className="text-[#C07A50]">meus projetos</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                em um só lugar.
              </h1>

              <div className="mt-4 h-[3px] w-full max-w-[240px] sm:max-w-[320px] md:max-w-[384px] rounded-full bg-[#C07A50]" />

              <p className="mt-4 sm:mt-5 text-[13px] xs:text-sm md:text-base lg:text-[15px] text-[#7A6A5B] dark:text-[#CFC7BE] leading-relaxed">
                Aqui você encontra uma visão mais completa dos projetos que já
                desenvolvi para os meus clientes como: One pages, Landing pages,
                Experiências focadas em UX/UI e alguns Projetos Acadêmicos.
              </p>
            </div>

            {/* filtros */}
            <div className="md:self-start md:text-right w-full md:w-auto">
              <button
                type="button"
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="
                  w-full md:w-auto
                  inline-flex items-center justify-center gap-2
                  rounded-full
                  border border-[#5B4636] bg-[#5B4636]
                  text-[#F8F5F2]
                  px-4 py-2
                  text-[12px] md:text-sm
                  font-montserrat
                  shadow-sm
                  hover:bg-[#C07A50] hover:border-[#C07A50]
                  transition-colors

                  dark:border-white/10 dark:bg-[#050607]
                  dark:text-[#F8F5F2]
                  dark:hover:bg-[#131922] dark:hover:border-white/15
                "
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
                {selectedTechs.length > 0 && (
                  <span
                    className="
                      ml-1 rounded-full
                      bg-[#F8F5F2] text-[#5B4636]
                      px-2 py-[2px]
                      text-[10px]

                      dark:bg-[#0C0F13] dark:text-[#F8F5F2]
                      dark:border dark:border-white/10
                    "
                  >
                    {selectedTechs.length}
                  </span>
                )}
              </button>

              {isFilterOpen && (
                <div
                  className="
                    mt-3 w-full md:w-auto inline-block
                    rounded-2xl
                    border border-[#E0D3C2] bg-[#FDF9F4]
                    px-4 py-3
                    shadow-lg
                    text-left
                    md:min-w-[280px]

                    dark:border-white/10
                    dark:bg-[#0C0F13]
                    dark:shadow-[0_28px_80px_rgba(0,0,0,0.65)]
                  "
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-montserrat tracking-[0.14em] uppercase text-[#A6806A] dark:text-[#D1BFA3]">
                      Filtrar por tecnologias
                    </span>

                    {selectedTechs.length > 0 && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="flex items-center gap-1 text-[11px] text-[#C07A50] hover:text-[#A9623A] dark:hover:text-[#F8F5F2]"
                      >
                        <X className="w-3 h-3" />
                        Limpar
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 max-h-48 sm:max-h-44 overflow-y-auto pr-1">
                    {allTechs.map((tech) => {
                      const active = selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          className={`
                            inline-flex items-center
                            rounded-full border
                            px-3 py-1.5
                            text-[11px] font-montserrat
                            transition-colors
                            break-words whitespace-normal leading-snug
                            ${
                              active
                                ? "bg-[#C07A50] border-[#C07A50] text-[#F8F5F2]"
                                : "bg-white border-[#E0D3C2] text-[#5B4636] hover:bg-[#C07A50]/10 hover:border-[#C07A50]/70"
                            }

                            ${
                              active
                                ? "dark:bg-[#C07A50] dark:border-[#C07A50] dark:text-[#F8F5F2]"
                                : "dark:bg-[#050607] dark:border-white/10 dark:text-[#F8F5F2] dark:hover:bg-[#131922] dark:hover:border-white/15"
                            }
                          `}
                        >
                          {tech}
                        </button>
                      );
                    })}

                    {allTechs.length === 0 && (
                      <p className="text-[11px] text-[#7A6A5B] dark:text-[#CFC7BE]">
                        Nenhuma tecnologia cadastrada ainda.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
            />
          ))}

          {filteredProjects.length === 0 && (
            <div
              className="
                rounded-2xl
                border border-[#E0D3C2] bg-[#FDF9F4]
                px-5 sm:px-6 py-7 sm:py-8
                text-center

                dark:border-white/10
                dark:bg-[#050607]
                dark:shadow-[0_28px_80px_rgba(0,0,0,0.70)]
              "
            >
              <p className="font-montserrat text-sm md:text-base text-[#5B4636] dark:text-[#F8F5F2]">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 text-[12px] text-[#C07A50] font-montserrat underline underline-offset-2 hover:text-[#A9623A] dark:hover:text-[#F8F5F2]"
              >
                Limpar filtros e ver todos
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
