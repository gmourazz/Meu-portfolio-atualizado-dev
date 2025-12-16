// src/pages/MenuNav.jsx (ou Navigation.jsx)
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId) => {
    // se não estiver na home, vai pra home e depois faz o scroll
    if (location.pathname !== "/") {
      navigate("/");
      setIsOpen(false);

      setTimeout(() => {
        scrollToSection(sectionId);
      }, 200);
    } else {
      scrollToSection(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "technologies", label: "Tecnologias" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  // 👉 se estiver na rota /projetos, esconde o item "Projetos"
  const visibleNavItems =
    location.pathname === "/projetos"
      ? navItems.filter((item) => item.id !== "projects")
      : navItems;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* linha principal */}
        <div className="flex items-center justify-between py-4">
          {/* Menu mobile à esquerda */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5B4636] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Links centrais no desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {visibleNavItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick(item.id)}
                className="text-[#5B4636] hover:text-[#A9623A] transition-colors duration-300 font-montserrat text-sm md:text-[15px]"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Espaçador pra alinhar no desktop */}
          <div className="md:hidden w-8" />
        </div>

        {/* Menu mobile dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            {visibleNavItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-2 text-[#5B4636] hover:text-[#A9623A] transition-colors duration-300 font-montserrat text-sm"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
