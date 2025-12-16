import React from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { toast } = useToast();

  const handlePolicyClick = () => {
    toast({
      title: "Política de Privacidade",
      description:
        "Os dados informados são usados apenas para contato profissional e não são compartilhados com terceiros.",
    });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      <div className="w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16 py-8 md:py-9">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-3"
        >
          <div className="space-y-1">
            <p className="font-montserrat text-sm md:text-base text-[#E9DFD2]">
              © 2025 Geovanna Moura. Todos os direitos reservados.
            </p>
            <p className="font-montserrat text-xs md:text-[13px] text-[#D1BFA3]">
              Desenvolvido com carinho, café e código, focado em interfaces
               dinâmicas, responsivas e com muito amor.
            </p>
          </div>

          <Button
            onClick={handlePolicyClick}
            variant="outline"
            className="mt-2 border-[#D1BFA3] bg-transparent text-[#E9DFD2] hover:bg-[#C07A50] hover:text-[#F8F5F2] font-montserrat text-xs md:text-sm px-4 py-2 rounded-full"
          >
            Política de Privacidade
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
