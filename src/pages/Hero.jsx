import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-[#F8F5F2] min-h-[100vh] flex items-start"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 w-64 h-64 rounded-full bg-[#D1BFA3] opacity-25 blur-3xl" />
        <div className="absolute bottom-[-60px] right-0 w-72 h-72 rounded-full bg-[#A6806A] opacity-20 blur-3xl" />
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
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#E9DFD2] text-xs md:text-sm lg:text-[15px] font-montserrat text-[#A9623A] shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
              <span>
                Geovanna Moura · Front-End Developer | Software Engineer
              </span>
            </div>

            {/* Título + texto */}
            <div className="space-y-5 lg:space-y-6 2xl:space-y-7 max-w-2xl lg:max-w-3xl 2xl:max-w-4xl">
              <h1 className="font-montserrat text-3xl md:text-4xl lg:text-[42px] font-bold text-[#5B4636] leading-snug">
                Desenvolvedora Frontend apaixonada em criar interfaces{" "}
                <span className="text-[#C07A50]">
                  intuitivas, dinâmicas e modernas.
                </span>
              </h1>

              <p className="font-montserrat text-sm md:text-base lg:text-[17px] text-[#7A6A5B] leading-relaxed">
                Trabalho com React, TypeScript, JavaScript, HTML e CSS para
                criar aplicações web dinâmicas e responsivas. Integro o
                front-end com APIs (geralmente em Node.js) e uso Python em
                automações e apoio na resolução de problemas. Meu foco é ter
                código organizado e componentizado, com usabilidade e
                acessibilidade em mente, para que cada interface seja agradável
                de usar e fácil de evoluir.
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-4 lg:mt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-[#C07A50] hover:bg-[#5B4636] text-[#F8F5F2] font-semibold px-8 py-3 text-sm md:text-base rounded-full shadow-sm"
                size="lg"
              >
                Ver projetos
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border bg-[#5B4636] text-white hover:bg-[#C07A50] hover:text-white font-semibold px-8 py-3 text-sm md:text-base rounded-full"
                size="lg"
              >
                Falar comigo
              </Button>
            </div>

            {/* Chips – pílulas padronizadas e mais gordinhas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-3xl 2xl:max-w-5xl lg:mt-2 2xl:mt-4">
              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-code" />
                React · TypeScript · Tailwind
              </span>

              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-layout" />
                UI · UIX · SEO
              </span>

              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-users" />
                Experiência do Usuário
              </span>

              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-network" />
                Integração com APIs REST · Node.js
              </span>

              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-ruler-pencil" />
                Qualidade de código e QA
              </span>

              <span
                className="inline-flex w-full min-h-[48px] lg:min-h-[54px] items-center justify-start gap-4 px-5 py-3 rounded-full border border-[#D1BFA3] bg-white/90
                text-xs md:text-sm font-montserrat text-[#5B4636] whitespace-nowrap
                hover:bg-[#C07A50]/10 hover:border-[#C07A50]/60
                cursor-default
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-sm"
              >
                <i className="lni lni-mobile" />
                Acessibilidade e Responsividade
              </span>
            </div>
          </motion.div>

          {/* DIREITA: terminal / console */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative lg:mt-8 xl:mt-12"
          >
            <div className="relative w-full ml-auto rounded-2xl border border-[#D1BFA3] bg-white shadow-sm overflow-hidden">
              {/* Barra da janela */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#E4DACB] bg-[#F8F5F2]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D1BFA3]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A6806A]" />
                </div>
                <span className="text-[11px] font-montserrat text-[#7A6A5B]">
                  portfolio/hero.jsx
                </span>
              </div>

              {/* Código fake */}
              <div className="p-4 md:p-6 bg-[#1E1A17] text-[#F8F5F2] font-mono text-[11px] md:text-xs leading-relaxed overflow-auto min-h-[220px] lg:min-h-[260px]">
                <pre>
                  {`const dev = {
  name: "Geovanna Moura",
  role: "Front-end Developer | Software Engineer",
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
    "Front-end bem estruturado, com foco em performance e durabilidade",
    "Componentização pensada para reutilização e consistência visual",
    "Interfaces orientadas à usabilidade e acessibilidade",
  ],
  currentlyExploring: [
    "Design Systems aplicados a produtos web e times diferentes",
    "Padrões de arquitetura front-end para aplicações React escaláveis",
  ],
};`}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
