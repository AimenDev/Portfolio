import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Twitter, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com",
      label: "Instagram"
    },
    {
      icon: Github,
      href: "https://github.com/AimenDev",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aimen-dev/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SocialIcon = ({ icon: Icon, href, label }) => (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-10 h-10 flex items-center justify-center"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-emerald-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="w-5 h-5 text-gray-400 dark:text-gray-600 group-hover:text-emerald-400 transition-colors duration-300" />
    </motion.a>
  );

  return (
    <footer className="relative bg-zinc-900/80 dark:bg-white/80 backdrop-blur-lg border-t border-white/10 dark:border-gray-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          >
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-white dark:text-gray-900"
              >
                Aimen
              </motion.h3>
              <p className="text-sm text-gray-400 dark:text-gray-600 max-w-xs leading-relaxed">
                Building digital experiences that make a difference. Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white dark:text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group flex items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors duration-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white dark:text-gray-900">
                Get in Touch
              </h3>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = "mailto:aimendev4@gmail.com"}
                className="group flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <div className="flex gap-4 pt-4">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10 dark:border-gray-200/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-gray-400 dark:text-gray-600">
              © {new Date().getFullYear()} Aimen Portfolio. All rights reserved.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 transition-colors duration-300"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;