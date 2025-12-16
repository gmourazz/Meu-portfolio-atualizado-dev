import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectCard = ({ project, index }) => {
  const hasLink = !!project.url;
  const hasTestimonial = !!project.testimonial;
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-2xl border border-[#D1BFA3] bg-white/95 shadow-[0_18px_48px_rgba(15,10,5,0.12)] p-5 md:p-6"
    >
      <div
        className={`grid gap-8 items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.1fr)]
        ${
          isEven
            ? ""
            : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
        }`}
      >
        {/* PREVIEW: desktop + iPhone */}
        <div className="relative">
          <div className="absolute inset-3 rounded-3xl bg-gradient-to-tr from-[#D1BFA3]/80 via-[#F8F5F2] to-[#C07A50]/45 blur-2xl opacity-70 -z-10" />

          {/* desktop mock */}
          <div className="rounded-2xl bg-[#1E1A17] border border-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-[#15110F]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D1BFA3]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6806A]" />
              </div>
              <span className="text-[10px] text-[#E9DFD2] font-montserrat">
                preview.desktop
              </span>
            </div>

            <div className="relative aspect-[16/9] bg-black overflow-hidden">
              {project.desktopImage && (
                <img
                  src={project.desktopImage}
                  alt={`${project.title} – preview em desktop`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* iPhone mock – todos iguais */}
          <motion.div
            whileHover={{ y: -2 }}
            className={`absolute bottom-[-16px] w-32 md:w-36 aspect-[9/19] rounded-[1.6rem] bg-[#050505] border-[3px] border-[#222222] shadow-[0_18px_45px_rgba(0,0,0,0.75)] flex flex-col px-1.5 pt-1.5 pb-2
          ${isEven ? "right-0" : "left-0"}`}
          >
            <div className="w-10 h-2 rounded-full bg-[#151515] mx-auto mb-1.5" />
            <div className="flex-1 rounded-[1rem] overflow-hidden bg-black">
              {project.mobileImage && (
                <img
                  src={project.mobileImage}
                  alt={`${project.title} – preview em mobile`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="mt-1.5 w-8 h-1.5 rounded-full bg-[#333333] mx-auto" />
          </motion.div>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-4">
          <header className="space-y-2">
            <h3 className="font-montserrat text-xl md:text-[22px] font-semibold text-[#5B4636]">
              {project.title}
            </h3>

            {(project.type || project.segment) && (
              <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#A6806A] font-montserrat">
                {project.type && <span>{project.type}</span>}
                {project.type && project.segment && (
                  <span className="mx-2">•</span>
                )}
                {project.segment && <span>{project.segment}</span>}
              </p>
            )}

            <div className="h-px w-10 md:w-12 bg-[#D1BFA3]" />
          </header>

          <p className="text-xs md:text-[13px] leading-relaxed text-[#7A6A5B]">
            {project.description}
          </p>

          {project.focus && (
            <div className="mt-2 border-l-4 border-[#C07A50] bg-[#F8F5F2]/90 px-4 py-3 rounded-r-xl">
              <p className="text-[11px] md:text-xs text-[#5B4636] leading-relaxed">
                <span className="font-semibold uppercase tracking-[0.16em] text-[10px] block mb-1">
                  Foco do projeto
                </span>
                {project.focus}
              </p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-[#E0D3C2] bg-[#FDF9F4] px-3.5 py-1.5 text-[11px] text-[#5B4636] font-montserrat"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {hasTestimonial && (
            <div className="mt-3 rounded-xl border border-[#E0D3C2] bg-[#F8F5F2] px-4 py-3 flex gap-3">
              <div className="mt-0.5">
                <Quote className="w-4 h-4 text-[#C07A50]" />
              </div>
              <div>
                <p className="text-[11px] md:text-xs italic text-[#7A6A5B] leading-relaxed">
                  “{project.testimonial}”
                </p>
                {project.client && (
                  <p className="mt-2 text-[11px] font-montserrat font-semibold text-[#5B4636]">
                    — {project.client}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasLink && (
            <div className="pt-2">
              {/* botão de ver projeto online com cor do antigo “ver mais projetos” */}
              <Button
                onClick={() => window.open(project.url, "_blank")}
                className="w-full bg-[#5B4636] hover:bg-[#C07A50] text-[#F8F5F2] font-montserrat font-semibold rounded-full px-7 py-3 text-sm shadow-md"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver projeto online
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Landing Page – Curso de Autoajuda",
      type: "Landing page",
      segment: "Infoproduto · Desenvolvimento pessoal",
      url: "https://www.adauangoes.com.br/homemnovo",
      description:
        "Landing focada em conversão, com narrativa crescente, prova social e CTAs bem posicionados para venda de um curso de autoajuda.",
      focus:
        "Guiar o visitante por uma história clara até a ação final, equilibrando texto, visual e credibilidade.",
      testimonial:
        "Entregou com qualidade e excelência o que eu pedi, recomendo!",
      client: "Adauan",
      stack: ["HTML5", "CSS3", "JavaScript", "Responsividade", "SEO básico"],
      desktopImage: "/img/projects/homemnovo-desktop.png",
      mobileImage: "/img/projects/homemnovo-mobile.png",
    },
    {
      title: "Landing Page – Curso Agropecuário",
      type: "Landing page",
      segment: "Educação · Público rural",
      url: "https://www.primeprofissoes.com.br/",
      description:
        "Página objetiva para cursos da área agropecuária, com comunicação clara, layout direto e botão de ação sempre visível.",
      focus:
        "Falar com um público diverso de forma simples, sem perder credibilidade e captação de leads.",
      testimonial:
        "Muito rápida e muito proativa, sempre disposta a fazer os ajustes que eu peço. Trabalharei com ela novamente.",
      client: "Debora",
      stack: ["HTML5", "CSS3", "JavaScript", "Layout mobile-first"],
      desktopImage: "/img/projects/primeprofissoes-desktop.png",
      mobileImage: "/img/projects/primeprofissoes-mobile.png",
    },
    {
      title: "Site – Gráfica Rápida",
      type: "Site institucional",
      segment: "Serviços · Gráfica rápida",
      url: "https://graficaloprint.com.br",
      description:
        "Site completo com páginas internas, lista de serviços e formulário de orçamento integrado ao fluxo da gráfica.",
      focus:
        "Deixar claro o que a gráfica oferece e facilitar o contato do cliente com poucos cliques.",
      testimonial:
        "Muito rápida na entrega e muito proativa. Foi muito profissional e surpreendeu as minhas expectativas.",
      client: "Douglas",
      stack: ["WordPress", "HTML5", "CSS3", "Formulário de orçamento"],
      desktopImage: "/img/projects/graficaloprint-desktop.png",
      mobileImage: "/img/projects/graficaloprint-mobile.png",
    },
    {
      title: "Site – Método IPD",
      type: "Site de curso",
      segment: "Desenvolvimento pessoal · Infoproduto",
      url: "https://www.adauangoes.com.br/metodoipd",
      description:
        "Site para método de desenvolvimento pessoal, com blocos de conteúdo bem definidos, foco em captura de leads e integração com CRM.",
      focus:
        "Explicar o método de forma leve e guiada, mantendo o CTA presente durante toda a página.",
      testimonial:
        "Muito comprometida com cada etapa do projeto. Entregou exatamente como eu pedi e ainda deu sugestões para melhorar.",
      client: "Adauan",
      stack: ["HTML5", "CSS3", "GreatPages", "Integração com CRM"],
      desktopImage: "/img/projects/metodoipd-desktop.png",
      mobileImage: "/img/projects/metodoipd-mobile.png",
    },
    {
      title: "Site – Ignis (Terapia Cognitiva)",
      type: "Site institucional",
      segment: "Saúde · Psicologia",
      url: "https://ignisoficial.com.br/",
      description:
        "Site leve e acolhedor para atendimento psicológico remoto, com identidade visual calma e navegação simples.",
      focus:
        "Transmitir confiança e acolhimento, explicando como funciona o atendimento e como agendar sem fricção.",
      testimonial:
        "Representou bem a minha marca, e tudo que eu pedi, ela esteve à disposição para escutar e pôr em prática no projeto.",
      client: "Rafael",
      stack: ["WordPress", "HTML5", "CSS3", "UX focada em confiança"],
      desktopImage: "/img/projects/ignis-desktop.png",
      mobileImage: "/img/projects/ignis-mobile.png",
    },
    {
      title: "Use Dude – Loja de Moda Feminina",
      type: "Loja / catálogo",
      segment: "Moda · Pequeno negócio",
      url: null,
      description:
        "Projeto com estética inspirada no Instagram, carrossel de peças, depoimento da fundadora e foco total em navegação mobile.",
      focus:
        "Refletir a personalidade da marca e facilitar a descoberta das peças e o contato com a loja.",
      testimonial:
        "Ela foi muito solícita, escutou todos os meus áudios, todos os detalhes que eu pedi, e colocou em produção o site para a minha loja.",
      client: "Maria Eduarda",
      stack: ["HTML5", "CSS3", "JavaScript", "Mobile-first"],
      desktopImage: "/img/projects/usedude-desktop.png",
      mobileImage: "/img/projects/usedude-mobile.png",
    },
  ];

  const handleViewMore = () => {
    window.open("/projetos", "_blank");
  };

  return (
    <section
      id="projects"
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
          className="text-left md:text-center mb-14 md:mb-16"
        >
          <p className="text-sm md:text-base lg:text-lg tracking-[0.32em] uppercase text-[#A6806A] font-montserrat mb-12 -mt-10">
            Cases & Projetos
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[38px] font-bold text-[#5B4636]">
            Projetos que já{" "}
            <span className="text-[#C07A50]">saíram do papel.</span>
          </h2>
          <div className="mt-4 h-[4px] w-96 md:w-96 rounded-full bg-[#C07A50] md:mx-auto" />
          <p className="mt-5 max-w-3xl text-sm md:text-base lg:text-[15px] text-[#7A6A5B] md:mx-auto leading-relaxed">
            Uma mistura de sites, landing pages e projetos entregues aos meus
            clientes! Todos com foco em interface clara, responsiva e pensada
            para quem realmente usa, feitos com muito amor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            onClick={handleViewMore}
            className="bg-[#C07A50] hover:bg-[#A9623A] text-[#F8F5F2] font-montserrat font-semibold rounded-full px-14 md:px-16 py-4 md:py-5 text-sm md:text-lg shadow-lg shadow-[rgba(192,122,80,0.45)] tracking-wide hover:-translate-y-0.5 transition-transform"
          >
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
