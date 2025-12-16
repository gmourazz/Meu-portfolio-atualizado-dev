import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Users, Award } from "lucide-react";

const About = () => {
  const traits = [
    {
      icon: Palette,
      title: "UI e UX centrados no usuário",
      description:
        "Não crio tela só para ficar bonita. Penso em fluxo, contexto e expectativa de quem usa, deixando a navegação leve, intuitiva e sem ruídos desnecessários.",
    },
    {
      icon: Code,
      title: "Responsividade na prática",
      description:
        "Cuido do comportamento da interface em diferentes tamanhos de tela. Ajusto componentes, tipografia e layout para manter a experiência consistente no desktop e no mobile.",
    },
    {
      icon: Users,
      title: "Experiência real de quem usa",
      description:
        "Trago muito do dia a dia de quem trabalha com sistemas para as decisões de interface. Gosto de ouvir o usuário, entender sua rotina e reduzir atritos sempre que possível.",
    },
    {
      icon: Award,
      title: "SEO e qualidade de entrega",
      description:
        "Em sites e landing pages penso em estrutura semântica, performance e boas práticas de SEO, sempre junto de testes e revisões para garantir uma entrega confiável.",
    },
    {
      icon: Code,
      title: "Olhar analítico para produto",
      description:
        "Conecto interface com negócio: analiso regras, indicadores e impactos de cada ajuste para que a tela não seja só bonita, mas ajude o produto a entregar resultado.",
    },
    {
      icon: Users,
      title: "Comunicação e parceria com o time",
      description:
        "Gosto de trabalhar perto de produto, back-end e áreas de negócio. Acredito que uma boa solução nasce de conversas claras, alinhamento de expectativas e feedback constante.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#E9DFD2]">
      <div className="w-full px-4 sm:px-8 lg:px-12 2xl:px-16 py-20 lg:py-24 mx-auto">
        {/* Foto + heading no topo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14 md:mb-18"
        >
          <div className="relative mb-7">
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border border-[#D1BFA3] bg-[#F8F5F2] shadow-2xl">
              <img
                src="/perfilcorp.jpeg"
                alt="Foto profissional de Geovanna Moura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="font-montserrat text-3xl md:text-5xl font-bold text-[#5B4636] tracking-[0.12em]">
            SOBRE MIM
          </h2>
          <div className="mt-5 h-1.5 w-52 rounded-full bg-[#C07A50]" />
        </motion.div>

        {/* Conteúdo principal – texto + cards bem próximos */}
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start gap-y-12 lg:gap-y-12 gap-x-6 md:gap-x-10 xl:gap-x-14">
          {/* Coluna esquerda – texto mais pessoal */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl lg:pl-4 xl:pl-8"
          >
            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              Olá, eu sou a{" "}
              <span className="font-semibold text-[#5B4636]">
                Geovanna Moura
              </span>
              , desenvolvedora front-end, e fico muito feliz que você esteja
              conhecendo meu portfólio. Sou natural de Santos - SP e atualmente
              moro em Uberlândia - MG, nascida em{" "}
              <span className="font-semibold text-[#5B4636]">12/03/2002</span>.
            </p>

            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              Atuo há mais de{" "}
              <span className="font-semibold text-[#5B4636]">
                2 anos com desenvolvimento front-end
              </span>{" "}
              em uma empresa certificada{" "}
              <span className="font-semibold text-[#5B4636]">GPTW</span> e curso{" "}
              <span className="font-semibold text-[#5B4636]">
                Engenharia de Software
              </span>
              , unindo prática diária em produto com uma base acadêmica sólida
              na área.
            </p>

            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              Me encontrei na tecnologia porque consigo unir lógica, design e
              pessoas no mesmo lugar. Gosto bastante de pegar{" "}
              <span className="font-semibold text-[#5B4636]">
                fluxos e regras de negócio complexas
              </span>{" "}
              e traduzir tudo isso em telas claras, objetivas e fáceis de
              entender. Sempre penso em como a pessoa que usa o sistema vai se
              sentir ao interagir com cada parte da interface, principalmente em
              contextos de sistemas de gestão e rotinas críticas do dia a dia.
            </p>

            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              Tenho uma paixão especial por{" "}
              <span className="font-semibold text-[#5B4636]">
                soluções digitais responsivas e bem estruturadas
              </span>
              . Gosto de ver a interface se comportando bem em diferentes
              dispositivos e resoluções e de cuidar de detalhes de{" "}
              <span className="font-semibold text-[#5B4636]">UI e UX</span>,
              como hierarquia visual, microinterações, mensagens de erro e
              estados vazios. Esses pequenos cuidados fazem o usuário sentir que
              o produto foi realmente pensado para a rotina dele.
            </p>

            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              No dia a dia, não fico só no código. Gosto de estar próxima de
              quem usa o sistema e de quem define as regras de negócio.
              Participo de testes manuais e colaboro como{" "}
              <span className="font-semibold text-[#5B4636]">
                QA em fluxos importantes
              </span>
              , sempre tentando antecipar problemas, validar cenários de uso
              real e garantir que o que vai para produção esteja estável e faça
              sentido na prática.
            </p>

            <p className="text-base md:text-lg font-montserrat text-[#7A6A5B] leading-relaxed">
              Fora do ambiente corporativo, também desenvolvo projetos para{" "}
              <span className="font-semibold text-[#5B4636]">
                pequenos negócios e empreendedores
              </span>
              . Crio sites e landing pages com foco em clareza, responsividade e{" "}
              <span className="font-semibold text-[#5B4636]">
                boas práticas de SEO
              </span>
              , sempre com visão de produto: entender o objetivo daquela página,
              o público que vai acessar e como a interface pode apoiar o negócio
              a crescer de forma profissional.
            </p>
          </motion.div>

          {/* Coluna direita – cards de posicionamento profissional */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {traits.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="rounded-2xl border border-[#D1BFA3] bg-white/95 p-5 md:p-6 shadow-sm cursor-default transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A6806A]/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#5B4636]" />
                  </div>
                  <h4 className="text-base md:text-lg font-montserrat font-semibold text-[#5B4636]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm md:text-base font-montserrat text-[#7A6A5B] leading-relaxed">
                  {item.description}
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
