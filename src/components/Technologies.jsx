import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaWordpress, FaFigma } from 'react-icons/fa';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      description: 'Componentes, hooks e páginas interativas.',
      Icon: FaReact,
      color: '#61DAFB'
    },
    {
      name: 'HTML5',
      description: 'Estrutura semântica e moderna.',
      Icon: FaHtml5,
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      description: 'Estilos modernos e responsivos.',
      Icon: FaCss3Alt,
      color: '#1572B6'
    },
    {
      name: 'JavaScript',
      description: 'Funcionalidades dinâmicas e inteligentes.',
      Icon: FaJsSquare,
      color: '#F7DF1E'
    },
    {
      name: 'Tailwind CSS',
      description: 'Interface rápida com utilitários.',
      Icon: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-13.1 5.9-13.1 13.1 0 5.3 3.2 9.8 7.6 11.8 1.1.5 2.3.8 3.5.8 1.2 0 2.4-.3 3.5-.8 4.4-2 7.6-6.5 7.6-11.8C40.1 5.9 34.2 0 27 0zM13.5 16.5c-7.2 0-13.1 5.9-13.1 13.1 0 5.3 3.2 9.8 7.6 11.8 1.1.5 2.3.8 3.5.8 1.2 0 2.4-.3 3.5-.8 4.4-2 7.6-6.5 7.6-11.8C27 22.4 20.7 16.5 13.5 16.5z" clip-rule="evenodd"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v33H0z"></path></clipPath></defs></svg>,
      color: '#38BDF8'
    },
    {
      name: 'Node.js',
      description: 'Integrações com APIs e backend.',
      Icon: FaNodeJs,
      color: '#339933'
    },
    {
      name: 'WordPress',
      description: 'Sites otimizados com painel editável.',
      Icon: FaWordpress,
      color: '#21759B'
    },
    {
      name: 'Figma',
      description: 'Design de interfaces com foco em UX.',
      Icon: FaFigma,
      color: '#F24E1E'
    }
  ];

  return (
    <section id="technologies" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Tecnologias
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#94613c] to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Constelações de conhecimento que uso para criar experiências digitais únicas.
          </p>
        </motion.div>

        <div className="relative flex justify-center items-center h-96">
          {technologies.map((tech, index) => {
            const angle = (index / technologies.length) * 2 * Math.PI;
            const radius = window.innerWidth > 768 ? 250 : 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={tech.name}
                className="absolute group"
                initial={{ x: 0, y: 0, scale: 0 }}
                whileInView={{ x, y, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="tech-float"
                  style={{ animationDelay: `${index * 0.3}s` }}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                >
                  <tech.Icon
                    className="text-6xl md:text-7xl transition-all duration-300 group-hover:drop-shadow-lg"
                    style={{ color: tech.color }}
                  />
                  <div className="absolute bottom-full mb-2 w-max left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="font-bold">{tech.name}</p>
                    <p>{tech.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
          <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center">
            <span className="text-4xl">🛰️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;