import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Quote, Code, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ project, index }) => {
  const hasLink = !!project.url;
  const hasTestimonial = !!project.testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
        {project.image && (
          <div className="relative h-64 overflow-hidden">
            <img 
              alt={`${project.title} - Projeto desenvolvido por Geovanna Moura`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
             src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {hasLink && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  onClick={() => window.open(project.url, '_blank')}
                  className="glow-button text-white font-semibold px-6 py-3 rounded-full"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visitar Site
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#94613c] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {hasTestimonial && (
            <div className="glass-card p-6 rounded-xl mb-6">
              <div className="flex items-start space-x-3">
                <Quote className="w-6 h-6 text-[#94613c] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 italic leading-relaxed mb-3">
                    "{project.testimonial}"
                  </p>
                  <p className="text-[#94613c] font-semibold">
                    — {project.client}
                  </p>
                </div>
              </div>
            </div>
          )}

          {hasLink && (
            <Button
              onClick={() => window.open(project.url, '_blank')}
              variant="outline"
              className="w-full mt-auto border-2 border-[#94613c] text-[#94613c] hover:bg-[#94613c] hover:text-white font-semibold rounded-full bg-transparent"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto Completo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Landing Page – Curso de Autoajuda',
      url: 'https://www.adauangoes.com.br/homemnovo',
      description: 'Página com foco em alta conversão e impacto visual. Layout envolvente, seções estratégicas e chamada para ação bem destacada.',
      testimonial: 'Entregou com qualidade e excelencia o que eu pedi, recomendo!',
      client: 'Adauan',
      image: 'Modern landing page for self-help course with high conversion design',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Landing Page – Curso Agropecuário',
      url: 'https://www.primeprofissoes.com.br/',
      description: 'Página objetiva para o público rural. Comunicação clara, layout direto ao ponto e botão de ação bem posicionado.',
      testimonial: 'Muito rápida e muito proativa, sempre disposta a fazer os ajustes que eu peço. Trabalharei com ela novamente.',
      client: 'Debora',
      image: 'Agricultural course landing page with clear rural-focused design',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Site – Gráfica Rápida',
      url: 'https://graficaloprint.com.br',
      description: 'Site completo em WordPress com design moderno, páginas internas e formulário de orçamento funcional.',
      testimonial: 'Muito rápida na entrega e muito proativa. Foi muito profissional e surpreendeu as minhas expectativas. Queria algo mais barato e que fosse rápido, e ela me atendeu bem.',
      client: 'Douglas',
      image: 'Modern printing company website with WordPress CMS',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Site – Método IPD',
      url: 'https://www.adauangoes.com.br/metodoipd',
      description: 'Site para curso de desenvolvimento pessoal, criado com GreatPages e integrado ao CRM da Óptico. Estrutura pensada para captação de leads com foco em conversão.',
      testimonial: 'Muito comprometida com cada etapa do projeto. Entregou exatamente como eu pedi e ainda deu sugestões para melhorar.',
      client: 'Adauan',
      image: 'Personal development course website with CRM integration',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Site – Ignis (Terapia Cognitiva)',
      url: 'https://ignisoficial.com.br/',
      description: 'Site leve e intuitivo para atendimento psicológico remoto. Visual limpo, navegação clara e identidade acolhedora.',
      testimonial: 'Representou bem a minha marca, e tudo que eu pedi, ela esteve à disposição para escutar e pôr em prática no projeto. Adorei trabalhar com a Geovanna e ainda paguei a mais, pois achei justo devido ao trabalho incrível que ela entregou.',
      client: 'Rafael',
      image: 'Clean and intuitive website for remote psychological therapy',
      gradient: 'from-rose-400 to-red-500'
    },
    {
      title: 'Use Dude – Loja de Moda Feminina',
      url: null,
      description: 'Projeto com estética semelhante ao Instagram, carrossel de produtos com transição lenta, seção “Sobre” com depoimento da fundadora e navegação adaptada a dispositivos móveis.',
      testimonial: 'A Geovanna me procurou para poder fazer uma parceria, e eu achei incrível. Ela foi muito solícita, escutou todos os meus áudios, todos os detalhes que eu pedi, e colocou em produção o site para a minha loja de roupas.',
      client: 'Maria Eduarda',
      image: 'Feminine fashion store website with an Instagram-like aesthetic',
      gradient: 'from-pink-400 to-fuchsia-500'
    },
    {
      title: 'Quiz Interativo (JavaScript)',
      url: null,
      description: 'Projeto com lógica de perguntas e respostas, pontuação automática e feedback visual ao final. Usabilidade leve e divertida.',
      testimonial: null,
      client: null,
      image: 'Interactive quiz application with fun visuals',
      gradient: 'from-yellow-400 to-amber-500'
    },
    {
      title: 'Sistema de Biblioteca (Python)',
      url: null,
      description: 'Sistema com cadastro de livros, listagem por gênero e geração de gráficos com Matplotlib. Desenvolvido para fins acadêmicos com foco em lógica e visualização de dados.',
      testimonial: null,
      client: null,
      image: 'Academic library system with data visualization charts',
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#94613c] to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explorações digitais que transformaram ideias em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;