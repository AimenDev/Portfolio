import React from "react";

const Skills = () => {
  const skills = {
    frontend: ["JavaScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express", "MongoDB", "GraphQL", "REST APIs"],
    tools: ["Git", "Vercel", "Docker", "Postman", "Visual Studio Code"],
  };

  return (
    <section id="skills" className="mt-16 sm:p-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold font-fira text-white dark:text-neutral-900">Skills</h2>
        <p className="mt-8 text-neutral-400 dark:text-neutral-600 mb-8">
          Here are some of the technologies and tools I use:
        </p>
      </div>

      <div className="mt-10 mb-20 font-fira grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {/* Frontend Skills */}
        <div className="bg-neutral-800 dark:bg-neutral-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold  text-white dark:text-neutral-900">Frontend</h3>
          <ul className="mt-4 space-y-2">
            {skills.frontend.map((skill, index) => (
              <li
                key={index}
                className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="bg-neutral-800 dark:bg-neutral-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white dark:text-neutral-900">Backend</h3>
          <ul className="mt-4 space-y-2">
            {skills.backend.map((skill, index) => (
              <li
                key={index}
                className="text-neutral-400 dark:text-neutral-600 hover:text-white hover:dark:text-black transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Skills */}
        <div className="bg-neutral-800 dark:bg-neutral-100 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white dark:text-neutral-900">Tools</h3>
          <ul className="mt-4 space-y-2">
            {skills.tools.map((tool, index) => (
              <li
                key={index}
                className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-black transition-colors"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
