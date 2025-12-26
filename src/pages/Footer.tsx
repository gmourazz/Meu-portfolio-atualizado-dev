import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { getPrivacyPolicyToast } from "../services/footerService";

const Footer: React.FC = () => {
  const { toast } = useToast();

  const handlePolicyClick = (): void => {
    toast(getPrivacyPolicyToast());
  };

  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#050505] dark:bg-[#171B22]
        border-t border-white/10 dark:border-white/10
      "
    >
      {/* detalhe sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-40 dark:opacity-60 bg-[radial-gradient(1200px_220px_at_50%_0%,rgba(192,122,80,0.10),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C07A50]/35 to-transparent dark:via-[#C07A50]/25" />
      </div>

      <div className="relative w-full mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-none px-4 sm:px-8 lg:px-12 2xl:px-16 py-4 sm:py-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="
            flex flex-col gap-3
            sm:flex-row sm:items-center sm:justify-between
            text-center sm:text-left
          "
        >
          <div className="space-y-0.5">
            <p className="font-montserrat text-[12px] sm:text-[13px] md:text-sm text-[#E9DFD2] dark:text-[#F3EEE8] leading-snug">
              © 2025 Geovanna Moura. Todos os direitos reservados.
            </p>

            <p className="font-montserrat text-[10px] sm:text-[11px] md:text-[12px] text-[#D1BFA3] dark:text-white/60 leading-snug">
              Desenvolvido com carinho, café e código.
            </p>
          </div>

          <Button
            onClick={handlePolicyClick}
            variant="outline"
            className="
              w-full sm:w-auto
              border-[#D1BFA3] dark:border-white/15
              bg-transparent
              text-[#E9DFD2] dark:text-[#F8F5F2]
              hover:bg-[#C07A50] hover:text-[#F8F5F2]
              dark:hover:bg-[#1F2530] dark:hover:text-[#F8F5F2]
              font-montserrat
              text-[11px] sm:text-[12px] md:text-[13px]
              px-4 py-2
              rounded-full
              h-9
              sm:min-w-[210px]
            "
          >
            Política de Privacidade
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
