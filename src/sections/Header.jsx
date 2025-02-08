import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Sun, Moon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [theme, setTheme] = useState(() => {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastKnownScrollPosition > lastScrollPos) {
            setScrollingUp(false);
          } else {
            setScrollingUp(true);
          }
          setLastScrollPos(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  const NavLinks = ({ mobile = false, onClick }) => (
    <ul className={`${mobile ? 'text-2xl w-full' : 'flex space-x-10 text-sm'} font-sans text-gray-100 dark:text-black`}>
      {navItems.map(({ href, label }, index) => (
        <li key={href} className={mobile ? 'w-full' : ''}>
          <a
            href={href}
            onClick={onClick}
            className={`${
              mobile
                ? 'block text-center py-4 hover:bg-zinc-700 dark:hover:bg-white/10 border-b border-zinc-700/50 last:border-none'
                : 'hover:text-emerald-400'
            } transition-all duration-200 relative group`}
          >
            {label}
            {!mobile && (
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="flex items-center justify-center mb-10">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: scrollingUp ? 0 : -100,
          transition: { type: "spring", stiffness: 100, damping: 20 }
        }}
        className="mt-20 z-20 fixed hidden md:flex px-10 py-3 bg-zinc-800/95 dark:bg-white/95 backdrop-blur-md rounded-full shadow-lg"
      >
        <NavLinks />
      </motion.nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        aria-label={theme ? "Switch to light mode" : "Switch to dark mode"}
        className="absolute top-7 z-30 sm:ml-[60%] ml-28 p-2 text-gray-100 bg-zinc-700 dark:bg-white dark:shadow-lg rounded-full hover:ring-2 hover:ring-emerald-400 transition-all duration-200"
      >
        {theme ? (
          <Sun className="dark:text-emerald-400" size={24} />
        ) : (
          <Moon className="text-emerald-400" size={24} />
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="bg-zinc-700 dark:bg-white dark:shadow-lg text-gray-100 p-3 absolute rounded-full md:hidden top-6 right-10 z-30 shadow-lg hover:ring-2 hover:ring-emerald-400 transition-all duration-200"
      >
        {menuOpen ? (
          <X className="dark:text-emerald-400" size={24} />
        ) : (
          <Menu className="dark:text-emerald-400" size={24} />
        )}
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed inset-0 z-20 bg-zinc-800/95 dark:bg-white/95 backdrop-blur-md p-10 flex flex-col space-y-4 items-center justify-center md:hidden"
            >
              <NavLinks mobile onClick={toggleMenu} />
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-10 bg-black/20 sm:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;