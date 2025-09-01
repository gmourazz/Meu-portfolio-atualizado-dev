import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full glass-card p-2 floating">
                <img  
                  alt="Geovanna Moura - Desenvolvedora Front-end exploradora digital"
                  className="w-full h-full rounded-full object-cover"
                 src="https://horizons-cdn.hostinger.com/1a7c06a0-a2c5-4168-9834-dd25d60614c9/8402e57da64415ad3f002e008961a2aa.png" />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#94613c] via-purple-500 to-blue-500 opacity-20 blur-lg"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Explorando o universo</span>
            <br />
            <span className="text-white">da programação com</span>
            <br />
            <span className="gradient-text">criatividade e propósito</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Desenvolvedora Front-end especializada em criar experiências digitais únicas, 
            transformando ideias em realidade através de código limpo e design impactante.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="glow-button text-white font-semibold px-8 py-4 text-lg rounded-full border-0"
              size="lg"
            >
              Meus Projetos
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-[#94613c] text-[#94613c] hover:bg-[#94613c] hover:text-white font-semibold px-8 py-4 text-lg rounded-full bg-transparent"
              size="lg"
            >
              Entre em Contato
            </Button>
          </motion.div>

          <div className="absolute top-20 left-10 w-4 h-4 bg-[#94613c] rounded-full opacity-60 floating"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-40 floating" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-50 floating" style={{ animationDelay: '4s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;