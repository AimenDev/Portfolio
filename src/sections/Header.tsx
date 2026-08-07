import { useState, useEffect, useCallback } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  {
    href: "mailto:aimendev4@gmail.com?subject=Let's%20Work%20Together",
    label: "Contact",
  },
];

const NavLinks = ({ mobile = false, onClick }: NavLinksProps) => (
  <ul
    className={
      mobile
        ? "flex w-full flex-col items-center gap-1 font-fira text-xl"
        : "flex items-center gap-8 font-fira text-sm"
    }
  >
    {navItems.map(({ href, label }) => (
      <li key={label} className={mobile ? "w-full" : ""}>
        <a
          href={href}
          onClick={onClick}
          className={
            mobile
              ? "group flex items-center justify-center gap-2 border-b border-white/5 py-4 text-neutral-300 transition-colors duration-200 hover:text-emerald-400 dark:border-neutral-900/5 dark:text-neutral-700"
              : "group relative text-neutral-300 transition-colors duration-200 hover:text-emerald-400 dark:text-neutral-700"
          }
        >
          {label}
          {!mobile && (
            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
          )}
        </a>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [theme, setTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  // Body scroll lock lives in its own effect keyed on menuOpen, instead of
  // reading a stale value inside the click handler.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        setHidden(current > lastScrollPos && current > 80);
        setLastScrollPos(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <header>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#0B0F0E]/80 backdrop-blur-md dark:border-neutral-900/5 dark:bg-white/80"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Brand */}
          <a
            href="/"
            className="font-fira text-sm font-medium text-neutral-200 dark:text-neutral-800"
          >
            aimen<span className="text-emerald-400">.</span>dev
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-300 transition-colors duration-200 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-600"
            >
              {theme ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-neutral-300 transition-colors duration-200 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-600 md:hidden"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 md:hidden"
            />
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 200 }}
              className="fixed inset-x-0 top-0 z-40 flex flex-col items-center gap-6 border-b border-white/5 bg-[#0B0F0E] px-6 pb-8 pt-24 dark:border-neutral-900/5 dark:bg-white md:hidden"
            >
              <NavLinks mobile onClick={() => setMenuOpen(false)} />
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;