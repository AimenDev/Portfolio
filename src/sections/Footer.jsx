import React from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';

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

  return (
    <footer className="relative bg-zinc-900 dark:bg-gray-100/50 backdrop-blur-lg border-t border-white/10 dark:border-gray-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white dark:text-gray-900">
                Aimen
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-600 max-w-xs">
                Building digital experiences that make a difference. Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white dark:text-gray-900">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-gray-400 dark:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white dark:text-gray-900">
                Get in Touch
              </h3>
              <button
                onClick={() => window.location.href = "mailto:aimendev4@gmail.com"}
                className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
               
              </button>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors duration-200"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 dark:border-gray-200/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 dark:text-gray-600">
              © {new Date().getFullYear()} Aimen Portfolio. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 dark:text-gray-600 hover:text-emerald-400 dark:hover:text-emerald-600 transition-colors duration-200"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;