import React from 'react';

const Card = ({ image, title, description, languages }) => {
  return (
    <div className="bg-transparent border border-gray-700 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-400">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-neutral-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2 py-1 rounded">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
