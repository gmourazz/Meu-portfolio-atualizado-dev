import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Navigation from "./pages/MenuNav";
import AllProjects from "./pages/AllProjects";
import BackToTopButton from "./components/ui/BackToTopButton";

function App() {
  return (
    <>
      <Helmet>
        <title>Geovanna Moura | DEV</title>
        <meta
          name="description"
          content="Portfólio de Geovanna Moura, desenvolvedora front-end especializada em React, TypeScript, JavaScript, UI/UX e interfaces responsivas."
        />
        <meta
          name="keywords"
          content="desenvolvedora front-end, React, JavaScript, TypeScript, Tailwind, UX/UI, landing pages, sites institucionais"
        />
        <meta
          property="og:title"
          content="Geovanna Moura - Desenvolvedora Front-end"
        />
        <meta
          property="og:description"
          content="Explorando o universo da programação com interfaces claras, responsivas e focadas no usuário."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Se não quiser mais o fundo antigo, pode remover esse bloco */}
        <div className="galaxy-bg">
          <div className="stars" />
          <div className="nebula" />
        </div>

        <Navigation />

        <main>
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* /projetos – lista completa */}
            <Route path="/projetos" element={<AllProjects />} />
          </Routes>
        </main>

        {/* botão de voltar ao topo visível a partir da seção de conteúdo */}
        <BackToTopButton />

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
