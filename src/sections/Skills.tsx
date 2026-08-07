import { motion } from "framer-motion";
import { Code2, Server, Shield, Wrench, type LucideIcon } from "lucide-react";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  items: string[];
}

interface SkillCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

const Skills = () => {
  const skills: Record<string, SkillCategory> = {
    frontend: {
      icon: Code2,
      title: "Frontend",
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    backend: {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    networksSecurity: {
      icon: Shield,
      title: "Networks & Security",
      items: ["Linux (Kali)", "Burp Suite", "Bash Scripting", "TCP/IP & DNS", "Distributed Systems"]
    },
    tools: {
      icon: Wrench,
      title: "Tools",
      items: ["Git", "Docker", "Postman", "Obsidian", "VS Code"]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const SkillCard = ({ title, items, icon: Icon }: SkillCardProps) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-emerald-400/30 dark:border-neutral-900/10 dark:bg-neutral-900/[0.02]"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-2.5">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
        <h3 className="font-fira text-base font-semibold text-neutral-100 dark:text-neutral-900">
          {title}
        </h3>
      </div>
      <ul className="space-y-3">
        {items.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group flex items-center gap-2.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/50 transition-colors duration-300 group-hover:bg-emerald-400" />
            <span className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-emerald-400 dark:text-neutral-600">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="relative mt-16 overflow-hidden sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-fira text-xs tracking-wide text-emerald-400/80 dark:text-emerald-600">
          $ cat skills.json
        </span>
        <h2 className="mt-3 font-fira text-3xl font-bold text-white sm:text-4xl dark:text-neutral-900">
          Skills & Expertise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-400 dark:text-neutral-600">
          Web development, backed by a foundation in networks, systems, and
          security research.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 mb-20 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-16"
      >
        {Object.entries(skills).map(([key, value]) => (
          <SkillCard key={key} {...value} />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;