import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface Degree {
  level: string;
  title: string;
  institution: string;
  year: string;
}

const degrees: Degree[] = [
  {
    level: "MSc",
    title: "Computer Science - Master’s Degree in Computer Networks & Distributed Systems",
    institution: "Dr. Moulay Tahar University",
    year: "2026",
  },
  {
    level: "BSc",
    title: "Computer Science - Bachelor’s Degree in Information Systems",
    institution: "Dr. Moulay Tahar University",
    year: "2024",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden py-14 sm:py-16"
    >
      <div className="absolute inset-0 -z-10 bg-[#0B0F0E] dark:bg-neutral-50" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(52,211,153,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-fira text-xs tracking-wide text-emerald-400/80 dark:text-emerald-600">
            $ cat education.log
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {degrees.map((degree, i) => (
            <motion.div
              key={degree.title}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-400/30 dark:border-neutral-900/10 dark:bg-neutral-900/[0.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/30 px-3 py-1 font-fira text-xs text-emerald-400 dark:text-emerald-600">
                  <GraduationCap size={13} />
                  {degree.level}
                </span>
                <span className="font-fira text-xs text-neutral-500">
                  {degree.year}
                </span>
              </div>

              <h3 className="text-lg font-medium text-neutral-100 dark:text-neutral-800">
                {degree.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
                {degree.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;