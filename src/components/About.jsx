import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desenvolvimento Técnico',
      description: 'Especialista em React, JavaScript, HTML/CSS e WordPress com foco em código limpo e performance.'
    },
    {
      icon: Palette,
      title: 'Design & UX/UI',
      description: 'Criação de interfaces modernas e intuitivas usando Figma, com atenção aos detalhes visuais.'
    },
    {
      icon: Users,
      title: 'Atendimento Humanizado',
      description: 'Relacionamento próximo com clientes, entendendo necessidades e entregando soluções personalizadas.'
    },
    {
      icon: Award,
      title: 'Qualidade Comprovada',
      description: 'MEI ativa com projetos entregues para diversos setores, sempre respeitando prazos e expectativas.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#94613c] to-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Geovanna Moura
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Desenvolvedora front-end com foco em <span className="text-[#94613c] font-semibold">UX/UI</span> e 
              experiência prática no desenvolvimento de landing pages, sites institucionais e sistemas personalizados.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Estudante de <span className="text-purple-400 font-semibold">Engenharia de Software</span> pela Anhanguera, 
              com MEI ativa e experiência real atendendo clientes de diversos setores. Meus trabalhos prezam pela 
              qualidade visual, conversão e experiência do usuário.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Domino tecnologias como <span className="text-blue-400 font-semibold">React, JavaScript, Node.js, WordPress e Figma</span>, 
              sempre com grande atenção aos detalhes, prazos e atendimento humanizado.
            </p>

            <div className="pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block glass-card px-6 py-3 rounded-full"
              >
                <span className="text-[#94613c] font-semibold">🎓 Engenharia de Software - Anhanguera</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#94613c] to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;