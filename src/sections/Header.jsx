import React from 'react';

const Header = () => {
  return (
    <header className='flex items-center justify-center '>
      <nav className='mt-20 z-20 fixed flex px-10 py-3 bg-zinc-800/backdrop-blur-md  rounded-full shadow-lg'>
        <ul className='flex space-x-10 font-sans text-sm text-gray-100'>
          <li>
            <a href="/about" className='hover:text-emerald-400 transition-colors duration-200'>About</a>
          </li>
          <li>
            <a href="/projects" className='hover:text-emerald-400 transition-colors duration-200'>Projects</a>
          </li>
          <li>
            <a href="/speaking" className='hover:text-emerald-400 transition-colors duration-200'>Speaking</a>
          </li>
          <li>
            <a href="/contact" className='hover:text-emerald-400 transition-colors duration-200'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
