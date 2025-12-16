import React from "react";
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

const TailwindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 33"
    className="w-5 h-5 md:w-6 md:h-6"
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

const Technologies = () => {
  const stackGroups = [
    {
      title: "Front-end SPA & Componentização",
      area: "Aplicações React",
      description:
        "Construo interfaces reativas, organizadas em componentes, com foco em clareza, performance e manutenção a longo prazo.",
      items: [
        { name: "React", Icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", Icon: FaJsSquare, color: "#F7DF1E" },
        { name: "Vite", Icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      title: "Estrutura, Estilo & UI",
      area: "UI · UX · Layout",
      description:
        "Penso em hierarquia visual, espaçamentos e leitura fluida, sempre alinhando beleza com uso real no dia a dia.",
      items: [
        { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind", Icon: TailwindIcon, color: "#38BDF8" },
        { name: "UI/UX", Icon: FiLayout, color: "#C07A50" },
      ],
    },
    {
      title: "Back-end, Dados & Automação",
      area: "APIs & Lógica",
      description:
        "Integro o front com APIs REST, modelo dados e uso automações para apoiar regras de negócio e rotinas internas.",
      items: [
        { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
        { name: "SQL", Icon: FiDatabase, color: "#5B4636" },
        { name: "Python", Icon: FaPython, color: "#3776AB" },
      ],
    },
    {
      title: "SEO, Performance & Qualidade",
      area: "Qualidade de entrega",
      description:
        "Cuido de estrutura semântica, tempo de carregamento e boas práticas para entregar páginas rápidas e encontráveis.",
      items: [
        { name: "SEO", Icon: FiSearch, color: "#C07A50" },
        { name: "Otimização", Icon: FiTrendingUp, color: "#A6806A" },
        { name: "Acessibilidade", Icon: FiLayout, color: "#5B4636" },
      ],
    },
    {
      title: "Design & Prototipação",
      area: "Produto & Experiência",
      description:
        "Trabalho próxima de UI/UX, validando fluxos, protótipos e microinterações antes de ir para código.",
      items: [
        { name: "Figma", Icon: FaFigma, color: "#F24E1E" },
        { name: "UI Kits", Icon: FiLayout, color: "#A6806A" },
      ],
    },
    {
      title: "Git, Fluxo de Código & Colaboração",
      area: "Dev Workflow",
      description:
        "Atuo com versionamento, branches, PRs e revisão, garantindo organização e histórico limpo dos projetos.",
      items: [
        { name: "Git", Icon: FaGitAlt, color: "#F05033" },
        { name: "GitHub", Icon: FaGithub, color: "#181717" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 18, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="technologies"
      className="relative bg-[#F8F5F2] py-20 lg:py-24 overflow-hidden"
    >
      {/* Glow / shapes de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[-40px] w-72 h-72 rounded-full bg-[#D1BFA3] opacity-30 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-25 blur-3xl" />
      </div>

      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-14 md:mb-16"
        >
          <p className="text-xs md:text-sm tracking-[0.22em] uppercase text-[#A6806A] font-montserrat mb-4">
            Stack & Tecnologias
          </p>
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[38px] font-bold text-[#5B4636]">
            Uma stack pensada para{" "}
            <span className="text-[#C07A50]">produtos digitais incríveis.</span>
          </h2>
          <div className="mt-5 h-[3px] w-28 md:w-32 rounded-full bg-[#C07A50] md:mx-auto" />
          <p className="mt-5 max-w-3xl text-sm md:text-base lg:text-[15px] text-[#7A6A5B] md:mx-auto leading-relaxed">
            Mais do que listar ferramentas, aqui estão os conjuntos de
            tecnologias que realmente uso no dia a dia para tirar ideias do
            papel e manter produtos perfeitos, performáticos e agradáveis para o usuário.
          </p>
        </motion.div>

        {/* Painel glassy com os grupos de stack */}
        <div className="rounded-3xl border border-[#E0D3C2]/70 bg-white/85 backdrop-blur-xl px-4 sm:px-6 md:px-8 py-6 md:py-8 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
          >
            {stackGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={card}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 230,
                    damping: 18,
                  },
                }}
                className="group relative rounded-2xl bg-[#F8F5F2] p-5 md:p-6 shadow-sm cursor-default transition-all hover:shadow-lg border border-transparent hover:border-[#C07A50]/70 flex flex-col gap-4"
              >
                {/* barra de destaque no topo */}
                <div className="absolute -top-[1px] left-6 right-6 h-[3px] rounded-full bg-[#C07A50] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#A6806A] font-montserrat">
                    {group.area}
                  </span>
                  <h3 className="text-sm md:text-base lg:text-[17px] font-montserrat font-semibold text-[#5B4636]">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#7A6A5B] leading-relaxed font-montserrat">
                  {group.description}
                </p>

                {/* tags de tecnologias dentro do card */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E0D3C2] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.Icon className="text-[13px] text-white" />
                      </span>
                      <span className="text-[11px] md:text-xs font-montserrat text-[#5B4636]">
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
