import Card from '../components/Card';
import { ArrowUpRight, Github, GraduationCap } from 'lucide-react';

interface Project {
  image: string;
  title: string;
  description: string;
  languages: string[];
  githubLink: string;
  liveDemoLink: string;
}

const featuredProject: Project = {
  image: "./Latency-Estimation.png",
  title: "Latency Estimation",
  description:
    "A deep learning system that predicts network latency (ms) based on real cellular network measurements using TensorFlow.",
  languages: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Matplotlib", "Pandas", "NumPy", "streamlit"],
  githubLink: "https://github.com/AimenDev/Network-Latency-Estimation-in-Cellular-Networks",
  liveDemoLink: "https://latency-viz-studio.lovable.app/",
};

const projects: Project[] = [
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

const FeaturedProject = ({ project }: { project: Project }) => (
  <div className="group relative mb-10 overflow-hidden rounded-2xl border border-emerald-400/20 bg-white/[0.02] dark:border-emerald-500/20 dark:bg-neutral-900/[0.02]">
    <div className="grid grid-cols-1 lg:grid-cols-5">
      {/* Image */}
      <div className="relative lg:col-span-3">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B0F0E] via-transparent to-transparent lg:bg-gradient-to-r dark:from-neutral-50" />
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover lg:h-full"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center gap-4 p-8 lg:col-span-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/30 px-3 py-1 font-fira text-xs text-emerald-400 dark:text-emerald-600">
          <GraduationCap size={13} />
          Final Year Project
        </span>

        <h3 className="text-2xl font-semibold text-neutral-100 dark:text-neutral-900">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-neutral-400 dark:text-neutral-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.languages.map((lang) => (
            <span
              key={lang}
              className="rounded-md border border-white/10 px-2.5 py-1 font-fira text-xs text-neutral-300 dark:border-neutral-900/10 dark:text-neutral-600"
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-medium text-[#0B0F0E] transition-colors duration-300 hover:bg-emerald-300"
          >
            <Github size={15} />
            View Code
          </a>
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-300 dark:border-neutral-900/15 dark:text-neutral-700"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Main = () => {
  return (
    <section className="py-16 xl:px-16 bg-transparent border-t border-white dark:border-neutral-700" id='projects'>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-roboto text-center mb-16 text-white dark:text-neutral-900">Things I've made</h2>

        <FeaturedProject project={featuredProject} />

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