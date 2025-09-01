import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <>
      <Helmet>
        <title>Geovanna Moura - Desenvolvedora Front-end | Portfólio Galáctico</title>
        <meta name="description" content="Portfólio de Geovanna Moura, desenvolvedora front-end especializada em React, JavaScript, WordPress e UX/UI. Explorando o universo da programação com criatividade e propósito." />
        <meta name="keywords" content="desenvolvedor front-end, React, JavaScript, WordPress, UX/UI, landing pages, sites institucionais" />
        <meta property="og:title" content="Geovanna Moura - Desenvolvedora Front-end" />
        <meta property="og:description" content="Explorando o universo da programação com criatividade e propósito" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen relative">
        <div className="galaxy-bg">
          <div className="stars"></div>
          <div className="nebula"></div>
        </div>

        <Navigation />

        <main>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;