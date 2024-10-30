import React from 'react';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

const Card = ({ image, title, description, languages, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-transparent border border-gray-700 shadow-md dark:shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-400">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-white dark:text-neutral-900 font-sans">{title}</h3>
          <div className="flex gap-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-neutral-900  hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            )}
            {liveDemoLink && (
              <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-neutral-900 hover:text-white">
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-neutral-400 dark:text-neutral-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 font-fira">
          {languages.map((lang, index) => (
            <span key={index} className="bg-gray-200 dark:bg-gray-300 text-gray-800 text-sm font-medium px-2 py-1 rounded">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
