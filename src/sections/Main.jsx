import React from 'react';
import Card from '../components/Card';
import { Github, SquareArrowOutUpRight } from 'lucide-react';

const projects = [
  {
    image: "./E-commerce.png",
    title: "E-Commerce Store",
    description: "A full-featured e-commerce platform built using the MERN stack",
    languages: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/AimenDev/E-commerce",
    liveDemoLink: "https://e-commerce-qgeg.onrender.com"
  },
  {
    image: './Inspire-Ai.png',
    title: 'Inspire-Ai | Prompt Generator',
    description: 'Inspire-Ai is an AI-powered prompt generation web application built with Next.js',
    languages: ['Next.js', 'Tailwind CSS', 'Node.js'],
    githubLink: "https://github.com/AimenDev/InspireAI",
    liveDemoLink: "https://inspireai-one.vercel.app"
  },
  {
    image: './Chat-App.png',
    title: 'Chat App',
    description: 'A real-time chat application built using the MERN stack',
    languages: ["MongoDB", "Express.js", "React", "Tailwind CSS", "WebSockets"],
    githubLink: "https://github.com/AimenDev/Chat-App",
    liveDemoLink: "https://chat-app-5t7r.onrender.com"
  },
  {
    image: './Xyber.png',
    title: 'Saas Landing Page',
    description: 'A sleek and modern SaaS landing page designed to showcase services and drive conversions',
    languages: ['React', 'Tailwind CSS'],
    githubLink: "https://github.com/AimenDev/Xyber-Ai-landing-page",
    liveDemoLink: ""
  },
  {
    image: './Recipes.png',
    title: 'Recipes Finder',
    description: 'Recipes Finder is a web app designed to help users discover and explore recipes based on their preferences',
    languages: ['React', 'Tailwind CSS'],
    githubLink: "https://github.com/AimenDev/Recipe-Finder-App",
    liveDemoLink: ""
  },
  {
    image: './VR.png',
    title: 'VR Landing Page',
    description: 'A visually immersive landing page built for a VR product or service',
    languages: ['React', 'Tailwind CSS'],
    githubLink: "https://github.com/AimenDev/virtual-landing-page",
    liveDemoLink: "https://virtualcode.vercel.app/"
  },
];

const Main = () => {
  return (
    <section className="py-16 xl:px-16 bg-transparent border-t border-white dark:border-neutral-700" id='projects'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-roboto text-center mb-20 text-white dark:text-neutral-900">Things I’ve made</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              languages={project.languages}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
