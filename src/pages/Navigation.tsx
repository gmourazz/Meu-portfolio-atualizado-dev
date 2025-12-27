import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import type { NavSectionId } from "@/types/navigation";
import {
  getDefaultNavItems,
  getVisibleNavItems,
  handleNavClick,
} from "@/services/navigationService";

type ThemeMode = "light" | "dark";
const THEME_KEY = "theme_mode";

/** logos */
const LOGO_LIGHT = "/img/logoum.png";
const LOGO_DARK = "/img/logobranca.png";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  const location = useLocation();
  const navigate = useNavigate();

  // init theme
  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
      return next;
    });
  };

  // scroll glass
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // lock body scroll on mobile menu open
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // close if resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = useMemo(() => getDefaultNavItems(), []);
  const visibleNavItems = useMemo(
    () => getVisibleNavItems(location.pathname, navItems),
    [location.pathname, navItems]
  );

  const closeMenu = () => setIsOpen(false);

  const onNavClick = (sectionId: NavSectionId) => {
    handleNavClick(sectionId, {
      pathname: location.pathname,
      navigate,
      closeMenu,
      delayMs: 200,
    });
  };

  const logoSrc = theme === "dark" ? LOGO_DARK : LOGO_LIGHT;

  const logoClass =
    `
    block w-auto object-contain transform
    h-10 sm:h-14 md:h-16
  ` + (theme === "light" ? " scale-[1.08] sm:scale-[1.12]" : "");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* barra principal */}
        <div className="flex items-center py-3 sm:py-3.5">
          {/* ESQUERDA: botão mobile + logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu */}
            <div className="md:hidden flex items-center">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen((p) => !p)}
                className="
                  p-2 rounded-full transition-colors
                  text-[#5B4636] dark:text-[#E9DFD2]
                  hover:bg-black/5 dark:hover:bg-white/5
                  active:bg-black/10 dark:active:bg-white/10
                "
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>

            {/* LOGO */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                flex items-center justify-start
                h-10 sm:h-12
                select-none
                -ml-1 sm:-ml-4 lg:-ml-6
              "
              aria-label="Ir para a página inicial"
              title="Início"
            >
              <img
                src={logoSrc}
                alt="Logo Geovanna Moura"
                className={logoClass}
                draggable={false}
              />
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8">
            {visibleNavItems.map((item) => (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onNavClick(item.id)}
                className="
                  font-montserrat text-sm md:text-[15px] whitespace-nowrap
                  text-[#5B4636] dark:text-[#E9DFD2]
                  hover:text-[#A9623A] dark:hover:text-[#C07A50]
                  transition-colors duration-300
                "
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme toggle 
              - mobile: logo + toggle ficam próximos (ml-3)
              - desktop: toggle vai pra direita (md:ml-auto)
          */}
          <div className="flex items-center ml-3 md:ml-auto">
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.96 }}
              className="
                inline-flex items-center justify-center shrink-0
                h-8 w-8 sm:h-10 sm:w-10 rounded-full
                border border-black/10 dark:border-white/10
                bg-white/70 dark:bg-[#14100E]/70
                shadow-[0_10px_25px_rgba(15,10,5,0.08)] dark:shadow-[0_14px_35px_rgba(0,0,0,0.35)]
                hover:bg-white dark:hover:bg-[#14100E]
                transition-all
              "
              aria-label={
                theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"
              }
              title={theme === "dark" ? "Modo claro" : "Modo escuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#E9DFD2]" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#5B4636]" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE: overlay + drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              className="fixed inset-0 z-40 md:hidden cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: "rgba(0,0,0,0.25)",
                backdropFilter: "blur(2px)",
              }}
            />

            <motion.div
              id="mobile-nav"
              className="md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] z-50 px-3 pb-5"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              <div
                className="
                  max-w-sm w-full mx-auto
                  rounded-2xl overflow-hidden
                  border border-[#D1BFA3]/60 dark:border-white/10
                  bg-[#F8F5F2]/95 dark:bg-[#14100E]/95
                  shadow-[0_18px_50px_rgba(0,0,0,0.25)]
                  max-h-[70vh] overflow-y-auto
                "
              >
                <div className="px-4 py-3 border-b border-[#D1BFA3]/40 dark:border-white/10">
                  <p className="text-[11px] tracking-[0.22em] uppercase font-montserrat text-[#A6806A] dark:text-[#D1BFA3]">
                    Navegação
                  </p>
                </div>

                <div className="px-2 py-2">
                  {visibleNavItems.map((item) => (
                    <motion.button
                      key={item.id}
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onNavClick(item.id)}
                      className="
                        w-full text-left px-3 py-3 rounded-xl
                        font-montserrat text-[14px]
                        text-[#5B4636] dark:text-[#E9DFD2]
                        hover:bg-[#E9DFD2] dark:hover:bg-white/5
                        hover:text-[#A9623A] dark:hover:text-[#C07A50]
                        transition-colors
                      "
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
