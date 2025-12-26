import { Code, Palette, Users, Award } from "lucide-react";
import { AboutTrait } from "../types/about";

export const aboutService = {
  getTraits(): AboutTrait[] {
    return [
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
  },
};
