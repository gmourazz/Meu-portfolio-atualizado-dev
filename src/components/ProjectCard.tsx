import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";
import { useLanguage } from "@/i18n";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();
  const hasLink = !!project.url;
  const hasTestimonial = !!project.testimonial;
  const isEven = index % 2 === 0;

  // ------- SLIDES (desktop + mobile) -------
  const desktopSlides: string[] =
    project.desktopImages && project.desktopImages.length > 0
      ? project.desktopImages
      : project.desktopImage
      ? [project.desktopImage]
      : [];

  const mobileSlides: string[] =
    project.mobileImages && project.mobileImages.length > 0
      ? project.mobileImages
      : project.mobileImage
      ? [project.mobileImage]
      : [];

  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    if (desktopSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopSlides.length);
    }, 15000);

    return () => window.clearInterval(id);
  }, [desktopSlides.length]);

  useEffect(() => {
    if (mobileSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
    }, 15000);

    return () => window.clearInterval(id);
  }, [mobileSlides.length]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
      className="
        rounded-2xl
        border border-[#D1BFA3] dark:border-white/10
        bg-white/95 dark:bg-[#050607]
        shadow-[0_18px_48px_rgba(15,10,5,0.12)]
        dark:shadow-[0_28px_80px_rgba(0,0,0,0.80)]
        p-5 md:p-6
        transition-all
        dark:hover:border-white/15
      "
    >
      <div
        className={`
          grid gap-8 items-center
          lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.1fr)]
          ${
            isEven
              ? ""
              : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
          }
        `}
      >
        {/* PREVIEW: desktop + iPhone */}
        <div className="relative">
          <div
            className="
              absolute inset-3 rounded-3xl
              bg-gradient-to-tr
              from-[#D1BFA3]/80 via-[#F8F5F2] to-[#C07A50]/45
              dark:from-black/70 dark:via-black/30 dark:to-[#C07A50]/14
              blur-2xl opacity-70 -z-10
            "
          />

          {/* desktop mock */}
          <div className="rounded-2xl bg-[#1E1A17] border border-black/40 dark:border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 dark:border-white/10 bg-[#15110F]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C07A50]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D1BFA3]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#A6806A]" />
              </div>
              <span className="text-[10px] text-[#E9DFD2] font-montserrat">
                preview.desktop
              </span>
            </div>

            {/* sem cortar laterais e sem sobrar borda em cima/baixo */}
            <div className="relative bg-black overflow-hidden">
              {desktopSlides.length > 0 && (
                <motion.img
                  key={desktopSlides[desktopIndex]}
                  src={desktopSlides[desktopIndex]}
                  alt={`${project.title} – preview em desktop`}
                  className="w-full h-auto block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </div>
          </div>

          {/* iPhone mock – borda fina no mobile, igual estilo do desktop */}
          <motion.div
            whileHover={{ y: -2 }}
            className="
              absolute
              bottom-[-64px] sm:bottom-[-72px] md:bottom-[-80px]
              right-[-4px] sm:right-[-20px] md:right-[-32px]
              w-24 sm:w-28 md:w-32 lg:w-36
              aspect-[9/19] rounded-[1.6rem]
              bg-[#050505]
              border border-[#222222] dark:border-[#2A2F35]
              sm:border-[2px] md:border-[3px]
              shadow-[0_18px_45px_rgba(0,0,0,0.78)]
              flex flex-col px-1.5 pt-1.5 pb-2
            "
          >
            <div className="w-10 h-2 rounded-full bg-[#151515] mx-auto mb-1.5" />
            <div className="flex-1 rounded-[1rem] overflow-hidden bg-black">
              {mobileSlides.length > 0 && (
                <motion.img
                  key={mobileSlides[mobileIndex]}
                  src={mobileSlides[mobileIndex]}
                  alt={`${project.title} – preview em mobile`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </div>
            <div className="mt-1.5 w-8 h-1.5 rounded-full bg-[#333333] mx-auto" />
          </motion.div>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-4 mt-10 md:mt-0">
          <header className="space-y-2">
            <h3 className="font-montserrat text-xl md:text-[22px] font-semibold text-[#5B4636] dark:text-[#F8F5F2]">
              {project.title}
            </h3>

            {(project.type || project.segment) && (
              <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#A6806A] dark:text-[#D1BFA3] font-montserrat">
                {project.type && <span>{project.type}</span>}
                {project.type && project.segment && (
                  <span className="mx-2">•</span>
                )}
                {project.segment && <span>{project.segment}</span>}
              </p>
            )}

            <div className="h-px w-10 md:w-12 bg-[#D1BFA3] dark:bg-white/15" />
          </header>

          <p className="text-xs md:text-[13px] leading-relaxed text-[#7A6A5B] dark:text-[#CFC7BE]">
            {project.description}
          </p>

          {project.focus && (
            <div
              className="
                mt-2
                border-l-4 border-[#C07A50]
                bg-[#F8F5F2]/90 dark:bg-[#0C0F13]
                px-4 py-3 rounded-r-xl
                border border-transparent dark:border-white/10
              "
            >
              <p className="text-[11px] md:text-xs leading-relaxed">
                <span className="font-semibold uppercase tracking-[0.16em] text-[10px] block mb-1 text-[#5B4636] dark:text-[#D1BFA3]">
                  {t.projects.projectFocus}
                </span>
                <span className="text-[#7A6A5B] dark:text-[#E9DFD2]">
                  {project.focus}
                </span>
              </p>
            </div>
          )}

          {(project.stack?.length ?? 0) > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack!.map((tech) => (
                <span
                  key={tech}
                  className="
                    inline-flex items-center rounded-full
                    border border-[#E0D3C2] dark:border-white/10
                    bg-[#FDF9F4] dark:bg-[#0C0F13]
                    px-3.5 py-1.5
                    text-[11px]
                    text-[#5B4636] dark:text-[#F8F5F2]
                    font-montserrat
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {hasTestimonial && (
            <div
              className="
                mt-3 rounded-xl
                border border-[#E0D3C2] dark:border-white/10
                bg-[#F8F5F2] dark:bg-[#0C0F13]
                px-4 py-3
                flex gap-3
              "
            >
              <div className="mt-0.5">
                <Quote className="w-4 h-4 text-[#C07A50]" />
              </div>
              <div>
                <p className="text-[11px] md:text-xs italic text-[#7A6A5B] dark:text-[#CFC7BE] leading-relaxed">
                  “{project.testimonial}”
                </p>
                {project.client && (
                  <p className="mt-2 text-[11px] font-montserrat font-semibold text-[#5B4636] dark:text-[#F8F5F2]">
                    — {project.client}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasLink && (
            <div className="pt-2">
              <Button
                onClick={() => window.open(project.url as string, "_blank")}
                className="
                  w-full
                  bg-[#5B4636] hover:bg-[#C07A50]
                  dark:bg-[#0C0F13] dark:hover:bg-[#131922]
                  text-[#F8F5F2]
                  font-montserrat font-semibold
                  rounded-full
                  px-7 py-3
                  text-sm
                  shadow-md
                  dark:shadow-[0_22px_60px_rgba(0,0,0,0.75)]
                  dark:border dark:border-white/10
                "
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.projects.viewOnline}
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};
