import React, { useState, useEffect } from 'react';
import { Menu, Sun, SunMoon, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [theme, setTheme] = useState(false); // Light mode by default

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark'); // Add 'dark' class to <html>
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html>
    }
  }, [theme]); // Effect depends on 'theme' state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > lastScrollPos) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <header className="flex items-center justify-center mb-10">
      <nav
        className={`mt-20 z-20 fixed hidden md:flex px-10 py-3 bg-zinc-800 dark:bg-white backdrop-blur-md rounded-full shadow-lg transition-transform duration-500 ${
          scrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className='flex space-x-10 font-sans  text-sm text-gray-100 dark:text-black'>
          <li>
            <a href="#about" className='hover:text-emerald-400 transition-colors duration-200 '>About</a>
          </li>
          <li>
            <a href="#projects" className='hover:text-emerald-400 transition-colors duration-200'>Projects</a>
          </li>
          <li>
            <a href="#skills" className='hover:text-emerald-400 transition-colors duration-200'>Skills</a>
          </li>
          <li>
            <a href="#about" className='hover:text-emerald-400 transition-colors duration-200'>Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="absolute top-7 z-30 sm:ml-[60%] ml-28 p-2 text-gray-100 bg-zinc-700 dark:bg-white dark:shadow-lg rounded-full">
        {theme ? <Sun className='dark:text-emerald-400 ' size={24} /> : <SunMoon  size={24} />}
      </button>
      <button
        onClick={toggleMenu}
        className="bg-zinc-700 dark:bg-white dark:shadow-lg text-gray-100 p-3 absolute rounded-full md:hidden top-6 right-10 z-30 shadow-lg"
      >
        {menuOpen ? <X className='dark:text-emerald-400' size={24} /> : <Menu className='dark:text-emerald-400' size={24} />}
      </button>

      <nav
        className={`fixed inset-0 z-20 bg-zinc-800/90 dark:bg-transparent dark:backdrop-blur-xl backdrop-blur-md p-10 flex flex-col space-y-4 items-center justify-center transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className='font-sans text-2xl text-gray-100 dark:text-black w-full '>
          <li className='w-full'>
            <a
              href="#about"
              className='block text-center py-4 hover:bg-zinc-700 border-b border-zinc-700 transition-colors duration-200'
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li className='w-full'>
            <a
              href="#projects"
              className='block text-center py-4 hover:bg-zinc-700 border-b border-zinc-700 transition-colors duration-200'
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li className='w-full'>
            <a
              href="#skills"
              className='block text-center py-4 hover:bg-zinc-700 border-b border-zinc-700 transition-colors duration-200'
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li className='w-full'>
            <a
              href="#about"
              className='block text-center py-4 hover:bg-zinc-700 transition-colors duration-200'
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div onClick={toggleMenu} className="fixed inset-0 z-10 bg-black/10 sm:hidden"></div>
      )}
    </header>
  );
};

export default Header;
