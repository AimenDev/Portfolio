import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skills = {
    frontend: {
      icon: Code2,
      title: "Frontend",
      items: ["JavaScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS"]
    },
    backend: {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "GraphQL", "REST APIs"]
    },
    tools: {
      icon: Wrench,
      title: "Tools",
      items: ["Git", "Vercel", "Docker", "Postman", "Visual Studio Code"]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const SkillCard = ({ title, items, icon: Icon }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-neutral-800/50 backdrop-blur-lg dark:bg-white/50 rounded-xl shadow-lg p-8 border border-neutral-700/50 dark:border-neutral-200/50"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-400/10 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white dark:text-neutral-900">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300" />
            <span className="text-neutral-400 dark:text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="mt-16 sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold font-fira text-white dark:text-neutral-900">
          Skills & Expertise
        </h2>
        <p className="mt-4 text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          Here are some of the technologies and tools I've mastered over the years:
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16"
      >
        {Object.entries(skills).map(([key, value]) => (
          <SkillCard key={key} {...value} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;