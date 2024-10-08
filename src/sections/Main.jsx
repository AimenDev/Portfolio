import React from 'react';
import Card from '../components/Card';

const projects = [
  {
    image: 'path-to-image1.jpg',
    title: 'Project One',
    description: 'This is a brief description of project one.',
    languages: ['React', 'Tailwind CSS', 'JavaScript'],
  },
  {
    image: 'path-to-image2.jpg',
    title: 'Project Two',
    description: 'This is a brief description of project two.',
    languages: ['Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Project Three',
    description: 'This is a brief description of project three.',
    languages: ['Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    image: 'path-to-image4.jpg',
    title: 'Project Four',
    description: 'This is a brief description of project four.',
    languages: ['Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    image: 'path-to-image5.jpg',
    title: 'Project Five',
    description: 'This is a brief description of project five.',
    languages: ['Next.js', 'Tailwind CSS', 'Node.js'],
  }
];

const Main = () => {
  return (
    <section className="py-16 xl:px-16 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4  ">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              languages={project.languages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
