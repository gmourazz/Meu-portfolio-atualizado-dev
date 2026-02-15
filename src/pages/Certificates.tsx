import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLanguage } from "@/i18n";

type Certificate = {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  image: string;
};

const Certificates: React.FC = () => {
  const { t } = useLanguage();

  // Placeholder para os certificados
  const certificates: Certificate[] = [
    {
      id: "cert-1",
      title: t.certificates.items[0]?.title || "NLW Pocket Javascript Básico",
      institution: t.certificates.items[0]?.institution || "Rocketseat",
      date: t.certificates.items[0]?.date || "Setembro 2024",
      description:
        t.certificates.items[0]?.description ||
        "Curso completo de Javascript básico focado em fundamentos da linguagem, estruturas de dados e lógica de programação.",
      image: "/img/certificates/NLW Pocket_Javascript.jpg",
    },
    {
      id: "cert-2",
      title: t.certificates.items[1]?.title || "Ciência de Dados com Python",
      institution: t.certificates.items[1]?.institution || "DIO",
      date: t.certificates.items[1]?.date || "Janeiro 2026",
      description:
        t.certificates.items[1]?.description ||
        "Bootcamp de Ciência de Dados com Python, incluindo análise de dados, Pandas, visualização e machine learning aplicado.",
      image: "/img/certificates/cienciadedados.png",
    },
    {
      id: "cert-3",
      title: t.certificates.items[2]?.title || "AZ-900 com a Microsoft",
      institution: t.certificates.items[2]?.institution || "DIO",
      date: t.certificates.items[2]?.date || "Setembro 2025",
      description:
        t.certificates.items[2]?.description ||
        "Fundamentos de computação em nuvem Microsoft Azure, cloud computing, serviços Azure, segurança, privacidade e precificação.",
      image: "/img/certificates/az900.png",
    },
    {
      id: "cert-4",
      title: t.certificates.items[3]?.title || "Introdução a Computação em Nuvem",
      institution: t.certificates.items[3]?.institution || "DIO",
      date: t.certificates.items[3]?.date || "Setembro de 2025",
      description:
        t.certificates.items[3]?.description || "Fundamentos de cloud computing, modelos de serviço (IaaS, PaaS, SaaS), provedores de nuvem e conceitos de infraestrutura escalável.",
      image: "/img/certificates/computacaoemnuvem.png",
    },
    {
      id: "cert-5",
      title: t.certificates.items[4]?.title || " AWS Cloud Foundations",
      institution: t.certificates.items[4]?.institution || "DIO",
      date: t.certificates.items[4]?.date || "Setembro 2025",
      description:
        t.certificates.items[4]?.description || "Fundamentos da plataforma AWS, incluindo serviços principais, arquitetura de nuvem, segurança.",
      image: "/img/certificates/awscloud.png",
    },
    {
      id: "cert-6",
      title: t.certificates.items[5]?.title || "Fundamentos  da Infraestrutura AWS",
      institution: t.certificates.items[5]?.institution || "DIO",
      date: t.certificates.items[5]?.date || "Setembro 2025",
      description:
        t.certificates.items[5]?.description || "Conceitos de infraestrutura AWS, incluindo EC2, S3, VPC, balanceamento de carga, escalabilidade e alta disponibilidade.",
      image: "/img/certificates/infraaws.png",
    },
    {
      id: "cert-7",
      title: t.certificates.items[6]?.title || "Versionamento de Código com Git e GitHub",
      institution: t.certificates.items[6]?.institution || "DIO",
      date: t.certificates.items[6]?.date || "Dezembro 2025",
      description:
        t.certificates.items[6]?.description || "Controle de versão com Git, comandos essenciais, branching, merge, resolução de conflitos e colaboração em projetos através do GitHub.",
      image: "/img/certificates/gitegithub.png",
    },
    {
      id: "cert-8",
      title: t.certificates.items[7]?.title || "Banco de Dados Relacionais (SQL)",
      institution: t.certificates.items[7]?.institution || "DIO",
      date: t.certificates.items[7]?.date || "Janeiro 2026",
      description:
        t.certificates.items[7]?.description || "Fundamentos de SQL, criação e manipulação de tabelas, consultas, joins, normalização e modelagem de banco de dados relacional.",
      image: "/img/certificates/bancosql.png",
    },
    {
      id: "cert-9",
      title: t.certificates.items[8]?.title || "Banco de Dados NoSQL",
      institution: t.certificates.items[8]?.institution || "DIO",
      date: t.certificates.items[8]?.date || "Janeiro 2026",
      description:
        t.certificates.items[8]?.description || "Conceitos de bancos NoSQL, tipos de armazenamento (documento, chave-valor, grafos), MongoDB, escalabilidade horizontal e casos de uso.",
      image: "/img/certificates/banconosql.png",
    },
    {
      id: "cert-10",
      title: t.certificates.items[9]?.title || "Infraestrutura Global AWS",
      institution: t.certificates.items[9]?.institution || "DIO",
      date: t.certificates.items[9]?.date || "Janeiro 2026",
      description:
        t.certificates.items[9]?.description || "Arquitetura global da AWS, regiões, zonas de disponibilidade, edge locations e estratégias de distribuição global de aplicações.",
      image: "/img/certificates/infraglobalaws.png",
    },
    {
      id: "cert-11",
      title: t.certificates.items[10]?.title || "Linguagens de Programação para Machine Learning",
      institution: t.certificates.items[10]?.institution || "DIO",
      date: t.certificates.items[10]?.date || "Janeiro 2026",
      description:
        t.certificates.items[10]?.description || "Python aplicado a ML, bibliotecas essenciais (NumPy, Pandas, Scikit-learn), algoritmos de aprendizado e implementação de modelos.",
      image: "/img/certificates/machinelearning.png",
    },
    {
      id: "cert-12",
      title: t.certificates.items[11]?.title || "Algoritmos e Lógica de Programação",
      institution: t.certificates.items[11]?.institution || "Udemy",
      date: t.certificates.items[11]?.date || "Dezembro 2024",
      description:
        t.certificates.items[11]?.description || "Fundamentos de lógica de programação, estruturas de controle, laços de repetição, arrays, funções...",
      image: "/img/certificates/algotirmoselogica.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="
        relative min-h-screen
        bg-[#F8F5F2] dark:bg-[#0F0D0B]
        py-20 lg:py-28
      "
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#D1BFA3] opacity-20 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#A6806A] opacity-15 blur-3xl dark:opacity-0" />

        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#C07A50] opacity-0 blur-3xl dark:opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#A6806A] opacity-0 blur-3xl dark:opacity-8" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E9DFD2] dark:bg-white/5 dark:border dark:border-white/10 mb-6">
            <Award className="w-4 h-4 text-[#C07A50]" />
            <span className="text-xs md:text-sm font-montserrat text-[#A9623A] dark:text-[#E9DFD2]">
              {t.certificates.badge}
            </span>
          </div>

          <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B4636] dark:text-[#E9DFD2] mb-6">
            {t.certificates.title}
          </h1>

          <p className="font-montserrat text-base md:text-lg text-[#7A6A5B] dark:text-[#CBBCA8] max-w-3xl mx-auto leading-relaxed">
            {t.certificates.description}
          </p>
        </motion.div>

        {/* Grid de certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card do certificado */}
              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-[#D1BFA3]/40 dark:border-white/10
                  bg-white dark:bg-[#1A1512]
                  shadow-[0_8px_30px_rgba(91,70,54,0.08)]
                  dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                  transition-all duration-300
                  hover:shadow-[0_12px_40px_rgba(91,70,54,0.12)]
                  dark:hover:shadow-[0_15px_50px_rgba(192,122,80,0.15)]
                  hover:-translate-y-1
                "
              >
                {/* Ícone de medalha no canto superior esquerdo */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                  "
                  >
                    <svg
                      className="w-14 h-14"
                      viewBox="0 0 64 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Fita esquerda */}
                      <path
                        d="M20 40L12 70L22 65L28 75L32 45"
                        fill="#C07A50"
                        className="dark:fill-[#C07A50]"
                      />
                      {/* Fita direita */}
                      <path
                        d="M44 40L52 70L42 65L36 75L32 45"
                        fill="#C07A50"
                        className="dark:fill-[#C07A50]"
                      />
                      {/* Círculo da medalha */}
                      <circle
                        cx="32"
                        cy="28"
                        r="22"
                        fill="#C07A50"
                        className="dark:fill-[#C07A50]"
                        stroke="#F8F5F2"
                        strokeWidth="2"
                      />
                      {/* Borda serrilhada */}
                      <circle
                        cx="32"
                        cy="28"
                        r="22"
                        fill="none"
                        stroke="#F8F5F2"
                        strokeWidth="1.5"
                        strokeDasharray="3 2"
                      />
                      {/* Check mark */}
                      <path
                        d="M24 28L29 33L40 22"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                {/* Container da imagem */}
                <div className="relative aspect-[4/3] bg-[#F8F5F2] dark:bg-[#0F0D0B] p-6 pt-20">
                  <div className="w-full h-full rounded-lg overflow-hidden border border-[#D1BFA3]/30 dark:border-white/10">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback caso a imagem não carregue
                        (e.target as HTMLImageElement).src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23E9DFD2' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%235B4636' font-family='monospace' font-size='16'%3ECertificados%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                {/* Informações do certificado */}
                <div className="p-6 space-y-3">
                  <h3 className="font-montserrat text-lg md:text-xl font-bold text-[#5B4636] dark:text-[#E9DFD2] line-clamp-2 leading-tight">
                    {cert.title}
                  </h3>

                  <p className="font-montserrat text-sm text-[#A9623A] dark:text-[#C07A50] font-semibold">
                    {cert.institution}
                  </p>

                  <div className="flex items-center gap-2 text-[#7A6A5B] dark:text-[#CBBCA8]">
                    {/* Check icon */}
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#7CB342] flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-montserrat text-xs">
                      Emitido em:{" "}
                      <span className="font-semibold">{cert.date}</span>
                    </span>
                  </div>

                  <p className="font-montserrat text-sm text-[#7A6A5B] dark:text-[#CBBCA8] leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Linha decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C07A50] via-[#D1BFA3] to-[#C07A50]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
