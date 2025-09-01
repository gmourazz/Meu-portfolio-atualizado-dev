import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulário em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada, mas você pode entrar em contato pelos links diretos! 🚀",
    });
  };

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/5534984139764',
      label: 'WhatsApp',
      color: 'hover:text-green-400'
    },
    {
      icon: Mail,
      href: 'mailto:geovannamouragr@outlook.com',
      label: 'E-mail',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/geovanna-moura-23472b216',
      label: 'LinkedIn',
      color: 'hover:text-sky-500'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/gmourazz',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#94613c] to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vamos criar algo incrível juntos? Me envie uma mensagem!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Nome</label>
                  <Input id="name" name="name" type="text" placeholder="Seu nome" required />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">E-mail</label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensagem</label>
                  <Textarea id="message" name="message" placeholder="Sua mensagem..." rows={5} required />
                </div>
                <Button type="submit" className="w-full glow-button text-white font-semibold py-3 text-lg rounded-full border-0">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">Ou entre em contato direto:</h3>
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg glass-card transition-colors duration-300 ${link.color}`}
                >
                  <link.icon className="w-8 h-8" />
                  <span className="text-lg font-medium text-white">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;