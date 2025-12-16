import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Oi Geovanna, encontrei seu portfólio e gostaria de conversar sobre um projeto. 🙂"
  );

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: `https://wa.me/5534999865512?text=${whatsappMessage}`,
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:geovannamouragr@outlook.com?subject=Contato%20via%20portf%C3%B3lio&body=Oi%20Geovanna,%20vi%20seu%20portf%C3%B3lio%20e...",
      label: "E-mail",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/geovanna-moura-23472b216",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/gmourazz",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#5B4636] py-20 lg:py-24 overflow-hidden"
    >
      {/* glow de fundo bem discreto */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-25 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-20 blur-3xl" />
      </div>

      <div
        className="
          w-full mx-auto
          max-w-6xl xl:max-w-7xl 2xl:max-w-none
          px-4 sm:px-8 lg:px-12 2xl:px-16
        "
      >
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-12 md:mb-14"
        >
          <p className="text-sm md:text-lg tracking-[0.32em] uppercase text-[#D1BFA3] font-montserrat mb-6 -mt-12">
            Contato
          </p>

          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-[36px] font-bold text-[#F8F5F2]">
            Vamos tirar o seu{" "}
            <span className="text-[#C07A50]">projeto do papel?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-[#E9DFD2] md:mx-auto leading-relaxed">
            Se você chegou até aqui que tal criamos algo juntos? Me chama por
            onde for mais confortável pra você e me conta um pouco da sua ideia.
          </p>
        </motion.div>

        {/* Bloco principal: CTA WhatsApp + redes */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* WhatsApp destaque */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#4A3A2C] border border-[#E9DFD2]/18 px-6 py-7 md:px-8 md:py-8 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#D1BFA3] font-montserrat mb-3">
              Canal principal
            </p>

            <h3 className="font-montserrat text-xl md:text-2xl font-semibold text-[#F8F5F2] mb-3">
              Fale comigo direto no WhatsApp
            </h3>

            <p className="text-sm md:text-[15px] text-[#E9DFD2] leading-relaxed mb-5">
              O WhatsApp é o melhor lugar para falarmos sobre{" "}
              <span className="font-semibold">projetos, freelas</span> e ideias
              que você queira tirar do papel. Clique no botão abaixo e vamos
              construir algo incrível juntos.
            </p>

            <Button
              asChild
              className="w-full md:w-auto bg-[#e9dfd2] hover:bg-[#e9dfd2] text-[#5b4636] font-montserrat font-semibold rounded-full px-8 md:px-10 py-4 text-sm md:text-base shadow-lg flex items-center justify-center h-16 gap-2"
            >
              <a
                href={`https://wa.me/5534999865512?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-8 h-8 text-[18px]" />
                Fale comigo no WhatsApp
              </a>
            </Button>

            <p className="mt-3 text-[11px] md:text-xs text-[#E9DFD2]/75 font-montserrat leading-relaxed"></p>
          </motion.div>

          {/* Redes sociais em layout mais minimalista */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-[#D1BFA3] font-montserrat mb-4">
              Outras formas de contato
            </p>

            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="flex items-center justify-between gap-4 rounded-full border border-[#E9DFD2]/26 bg-[#4A3A2C]/70 px-4 py-3 md:px-5 md:py-3.5 cursor-pointer transition-all hover:border-[#C07A50] hover:bg-[#4A3A2C]/90"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5F2]/10">
                      <link.icon className="w-4 h-4 md:w-5 md:h-5 text-[#F8F5F2]" />
                    </div>
                    <span className="text-sm md:text-[15px] font-montserrat text-[#F8F5F2]">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-montserrat text-[#E9DFD2]/80 hidden sm:inline">
                    Abrir em nova aba →
                  </span>
                </motion.a>
              ))}
            </div>

            <p className="mt-5 text-[11px] md:text-xs text-[#E9DFD2]/70 font-montserrat leading-relaxed">
              Pode me chamar para{" "}
              <span className="font-semibold text-[#F8F5F2]">
                freelas pontuais, projetos maiores ou oportunidades de time
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
