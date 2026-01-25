import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { getSocialLinks } from "../services/contactService";
import type { SocialLink } from "../types/contact";
import { useLanguage } from "../i18n";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const whatsappMessage = useMemo(
    () => encodeURIComponent(t.contact.whatsappMessage),
    [t]
  );

  const socialLinks = useMemo<SocialLink[]>(
    () => getSocialLinks(whatsappMessage),
    [whatsappMessage]
  );

  const wa = useMemo(
    () => socialLinks.find((l) => l.label === "WhatsApp"),
    [socialLinks]
  );
  const WaIcon = wa?.icon;

  return (
    <section
      id="contact"
      className="
        relative
        bg-[#5B4636] dark:bg-[#0B0D10]
        py-16 sm:py-18 lg:py-24
        overflow-hidden
      "
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* light */}
        <div className="absolute -top-32 left-[-40px] w-72 h-72 rounded-full bg-[#C07A50] opacity-25 blur-3xl dark:opacity-0" />
        <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[#A6806A] opacity-20 blur-3xl dark:opacity-0" />

        {/* dark (bem discreto, no padrão “hero”) */}
        <div className="absolute -top-28 left-[-60px] w-80 h-80 rounded-full bg-black/55 opacity-0 blur-3xl dark:opacity-100" />
        <div className="absolute bottom-[-90px] right-[-60px] w-96 h-96 rounded-full bg-[#C07A50]/10 opacity-0 blur-3xl dark:opacity-100" />
      </div>

      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-10 sm:mb-12 md:mb-14"
        >
          <p
            className="
              text-xs sm:text-sm md:text-lg
              tracking-[0.32em] uppercase
              text-[#D1BFA3] dark:text-[#D1BFA3]
              font-montserrat
              mb-5 sm:mb-6
              -mt-8 sm:-mt-10 md:-mt-12
            "
          >
            {t.contact.subtitle}
          </p>

          <h2 className="font-montserrat text-2xl xs:text-[28px] sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-[#F8F5F2] dark:text-[#F8F5F2] leading-tight">
            {t.contact.title}{" "}
            <span className="text-[#C07A50]">{t.contact.titleHighlight}</span>
          </h2>

          <p className="mt-4 max-w-2xl text-[13px] xs:text-sm md:text-base text-[#E9DFD2] dark:text-[#CFC7BE] md:mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Bloco principal */}
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-stretch lg:items-center">
          {/* WhatsApp destaque */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              bg-[#4A3A2C] border border-[#E9DFD2]/18
              px-5 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8
              shadow-[0_18px_40px_rgba(0,0,0,0.45)]

              dark:bg-[#111418]
              dark:border-white/10
              dark:shadow-[0_28px_80px_rgba(0,0,0,0.65)]
            "
          >
            <p className="text-[10px] xs:text-xs md:text-sm uppercase tracking-[0.18em] text-[#D1BFA3] dark:text-[#D1BFA3] font-montserrat mb-3">
              {t.contact.mainChannel}
            </p>

            <h3 className="font-montserrat text-lg xs:text-xl md:text-2xl font-semibold text-[#F8F5F2] dark:text-[#F8F5F2] mb-3 leading-tight">
              {t.contact.whatsappTitle}
            </h3>

            <p className="text-[13px] xs:text-sm md:text-[15px] text-[#E9DFD2] dark:text-[#CFC7BE] leading-relaxed mb-5">
              {t.contact.whatsappDescription}
            </p>

            <Button
              asChild
              className="
                w-full md:w-auto
                bg-[#E9DFD2] hover:bg-[#E9DFD2]
                text-[#5B4636]
                font-montserrat font-semibold
                rounded-full
                px-6 sm:px-8 md:px-10
                py-4
                text-sm md:text-base
                shadow-lg
                inline-flex items-center justify-center
                min-h-[56px] gap-2

                dark:bg-[#050607]
                dark:text-[#F8F5F2]
                dark:hover:bg-[#131922]
                dark:shadow-[0_22px_60px_rgba(0,0,0,0.55)]
                dark:border dark:border-white/10
              "
            >
              <a
                href={`https://wa.me/5534999865512?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2"
              >
                {WaIcon ? <WaIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : null}
                <span className="whitespace-normal leading-snug text-center">
                  {t.contact.whatsappButton}
                </span>
              </a>
            </Button>

            <p className="mt-3 text-[11px] md:text-xs text-[#E9DFD2]/75 dark:text-white/55 font-montserrat leading-relaxed" />
          </motion.div>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] xs:text-xs md:text-sm uppercase tracking-[0.18em] text-[#D1BFA3] dark:text-[#D1BFA3] font-montserrat mb-4">
              {t.contact.otherContacts}
            </p>

            {/* mobile/tablet = pílulas lado a lado; desktop = lista vertical como antes */}
            <div
              className="
                grid grid-cols-2 gap-2 sm:gap-3
                lg:grid-cols-1
                lg:flex lg:flex-col lg:space-y-3 lg:gap-0
              "
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
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
                    className="
                      w-full
                      flex items-center justify-between gap-3 sm:gap-4
                      rounded-2xl sm:rounded-full
                      border border-[#E9DFD2]/26
                      bg-[#4A3A2C]/70
                      px-4 py-3 md:px-5 md:py-3.5
                      cursor-pointer
                      transition-all
                      hover:border-[#C07A50] hover:bg-[#4A3A2C]/90

                      dark:border-white/10
                      dark:bg-[#0F1216]
                      dark:hover:bg-[#131922]
                      dark:hover:border-white/15
                    "
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="
                          flex h-9 w-9 items-center justify-center
                          rounded-full
                          bg-[#F8F5F2]/10
                          shrink-0

                          dark:bg-white/5
                        "
                      >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#F8F5F2]" />
                      </div>

                      <span className="text-sm md:text-[15px] font-montserrat text-[#F8F5F2] truncate">
                        {link.label}
                      </span>
                    </div>

                    <span className="text-[10px] md:text-xs font-montserrat text-[#E9DFD2]/80 dark:text-white/55 hidden sm:inline shrink-0">
                      {t.contact.openNewTab} →
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <p className="mt-5 text-[11px] md:text-xs text-[#E9DFD2]/70 dark:text-white/55 font-montserrat leading-relaxed">
              {t.contact.freelanceNote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
