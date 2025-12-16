// src/pages/AllProjects.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./Projects";

const AllProjects = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTechs, setSelectedTechs] = useState([]);

  const allTechs = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      (p.stack || []).forEach((t) => set.add(t));
    });
    return Array.from(set);
  }, []);

  const toggleTech = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTechs([]);

  const filteredProjects =
    selectedTechs.length === 0
      ? projects
      : projects.filter((p) =>
          selectedTechs.every((t) => (p.stack || []).includes(t))
        );

  return (
    <section
      id="all-projects"
      className="relative bg-[#E9DFD2] py-20 lg:py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-35 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl" />
      </div>

      <div
        className="
          w-full mx-auto
          max-w-6xl xl:max-w-7xl 2xl:max-w-none
          px-4 sm:px-8 lg:px-12 2xl:px-16
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-14"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* texto da esquerda */}
            <div className="max-w-3xl text-left">
              <p className="text-xs md:text-sm tracking-[0.28em] uppercase text-[#A6806A] font-montserrat mb-3">
                Meus Projetos
              </p>
              <h1 className="font-montserrat text-3xl md:text-4xl lg:text-[40px] font-bold text-[#5B4636]">
                Todos os <span className="text-[#C07A50]">meus projetos</span>
                <br />
                em um só lugar.
              </h1>
              <div className="mt-4 h-[3px] w-96 md:w-96 rounded-full bg-[#C07A50]" />
              <p className="mt-5 text-sm md:text-base lg:text-[15px] text-[#7A6A5B] leading-relaxed">
                Aqui você encontra uma visão mais completa dos projetos que já
                desenvolvi para os meus clientes como: One pages, Landing pages, Experiências focadas em UX/UI e
                alguns Projetos Acadêmicos.
              </p>
            </div>

            {/* botão de filtros no canto direito */}
            <div className="md:self-start md:text-right">
              <button
                type="button"
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-[#5B4636] bg-[#5B4636] px-4 py-2 text-[12px] md:text-sm font-montserrat text-[#F8F5F2] shadow-sm hover:bg-[#C07A50] hover:border-[#C07A50] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
                {selectedTechs.length > 0 && (
                  <span className="ml-1 rounded-full bg-[#F8F5F2] px-2 py-[2px] text-[10px] text-[#5B4636]">
                    {selectedTechs.length}
                  </span>
                )}
              </button>

              {isFilterOpen && (
                <div className="mt-3 inline-block rounded-2xl border border-[#E0D3C2] bg-[#FDF9F4] px-4 py-3 shadow-lg text-left md:min-w-[280px]">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-montserrat tracking-[0.14em] uppercase text-[#A6806A]">
                      Filtrar por tecnologias
                    </span>
                    {selectedTechs.length > 0 && (
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="flex items-center gap-1 text-[11px] text-[#C07A50] hover:text-[#A9623A]"
                      >
                        <X className="w-3 h-3" />
                        Limpar
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 max-h-44 overflow-y-auto pr-1">
                    {allTechs.map((tech) => {
                      const active = selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-montserrat transition-colors ${
                            active
                              ? "bg-[#C07A50] border-[#C07A50] text-[#F8F5F2]"
                              : "bg-white border-[#E0D3C2] text-[#5B4636] hover:bg-[#C07A50]/10 hover:border-[#C07A50]/70"
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}

                    {allTechs.length === 0 && (
                      <p className="text-[11px] text-[#7A6A5B]">
                        Nenhuma tecnologia cadastrada ainda.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Lista de projetos filtrados */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              project={project}
              index={index}
            />
          ))}

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-[#E0D3C2] bg-[#FDF9F4] px-6 py-8 text-center">
              <p className="font-montserrat text-sm md:text-base text-[#5B4636]">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-3 text-[12px] text-[#C07A50] font-montserrat underline underline-offset-2 hover:text-[#A9623A]"
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
