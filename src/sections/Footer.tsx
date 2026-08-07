import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SocialLinkData {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface QuickLink {
  label: string;
  href: string;
}

const socialLinks: SocialLinkData[] = [
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com/AimenDev", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aimen-dev/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const quickLinks: QuickLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  {
    label: "Contact",
    href: "mailto:aimendev4@gmail.com?subject=Let's%20Work%20Together",
  },
];

const SocialIcon = ({ icon: Icon, href, label }: SocialIconProps) => (
  <motion.a
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-500"
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
  </motion.a>
);

const Footer = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#0B0F0E] dark:border-neutral-900/5 dark:bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8"
          >
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-fira text-lg font-semibold text-neutral-100 dark:text-neutral-900">
                aimen<span className="text-emerald-400">.</span>dev
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-400 dark:text-neutral-600">
                Web developer with a background in networks and security
                research. Open to freelance work and full-time roles.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="font-fira text-sm font-semibold tracking-wide text-neutral-100 dark:text-neutral-900">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <a
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-200 hover:text-emerald-400 dark:text-neutral-600 dark:hover:text-emerald-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/50 transition-colors duration-300 group-hover:bg-emerald-400" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-fira text-sm font-semibold tracking-wide text-neutral-100 dark:text-neutral-900">
                Get in Touch
              </h3>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:aimendev4@gmail.com?subject=Let's%20Work%20Together"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors duration-300 hover:bg-emerald-400/10"
              >
                <Mail className="h-4 w-4" />
                
              </motion.a>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 dark:border-neutral-900/5 md:flex-row"
          >
            <p className="font-fira text-xs text-neutral-500">
              © {new Date().getFullYear()} Aimen.
            </p>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition-colors duration-300 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-600"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;