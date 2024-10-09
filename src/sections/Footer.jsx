import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-neutral-700 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
        {/* Copyright Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-gray-400 text-sm font-semibold">
            2024 &copy; Portfolio. Built by AimenDev
          </span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center">
          <ul className="flex space-x-8 text-gray-400 text-sm">
            <li>
              <a href="#about" className="hover:text-emerald-400 transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-emerald-400 transition-colors duration-200">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400 transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
