import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { toast } = useToast();

  const handlePolicyClick = () => {
    toast({
      title: "Política de Privacidade",
      description: "Todos os dados coletados neste site são usados exclusivamente para fins de contato e não são compartilhados com terceiros.",
    });
  };

  return (
    <footer className="py-12 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg italic mb-6">
            “Este portfólio representa meu universo criativo. Cada projeto é uma estrela que brilha no meu caminho como desenvolvedora.”
          </p>
          <div className="mb-6">
            <Button
              onClick={handlePolicyClick}
              variant="link"
              className="text-gray-400 hover:text-[#94613c]"
            >
              Política de Privacidade
            </Button>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Geovanna Moura. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Desenvolvido com 💜 no universo da programação.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;