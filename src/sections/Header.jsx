import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className='flex items-center justify-center mb-10 '>
      <nav className='mt-20 z-20 fixed hidden md:flex px-10 py-3 bg-zinc-800/backdrop-blur-md  rounded-full shadow-lg'>
        <ul className='flex space-x-10 font-sans text-sm text-gray-100'>
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
            <a href="/contact" className='hover:text-emerald-400 transition-colors duration-200'>Contact</a>
          </li>
        </ul>
      </nav>
      <button
  onClick={toggleMenu}
  className="bg-zinc-700 text-gray-100 p-3 absolute rounded-full md:hidden top-6 right-10 z-30 shadow-lg"
>
  {menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>


<nav
  className={`fixed inset-0 z-20 bg-zinc-800/90 backdrop-blur-md p-10 flex flex-col space-y-4 items-center justify-center transform ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out md:hidden`}
>
  <ul className='font-sans text-2xl text-gray-100 w-full '>
    <li className='w-full'>
      <a
        href="/about"
        className='block text-center py-4 hover:bg-zinc-700  border-b border-zinc-700 transition-colors duration-200'
        onClick={toggleMenu}
      >
        About
      </a>
    </li>
    <li className='w-full'>
      <a
        href="/projects"
        className='block text-center py-4 hover:bg-zinc-700 border-b border-zinc-700 transition-colors duration-200'
        onClick={toggleMenu}
      >
        Projects
      </a>
    </li>
    <li className='w-full'>
      <a
        href="/speaking"
        className='block text-center py-4 hover:bg-zinc-700 border-b border-zinc-700 transition-colors duration-200'
        onClick={toggleMenu}
      >
        Speaking
      </a>
    </li>
    <li className='w-full'>
      <a
        href="/contact"
        className='block text-center py-4 hover:bg-zinc-700 transition-colors duration-200'
        onClick={toggleMenu}
      >
        Contact
      </a>
    </li>
  </ul>
</nav>


      {/* Background overlay when menu is open on mobile */}
      {menuOpen && (
        <div onClick={toggleMenu} className="fixed inset-0 z-10 bg-black/10 sm:hidden"></div>
      )}
    </header>
  );
}

export default Header;
