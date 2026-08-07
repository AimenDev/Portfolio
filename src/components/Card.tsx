import { Github, SquareArrowOutUpRight } from 'lucide-react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  languages: string[];
  githubLink?: string;
  liveDemoLink?: string;
}

const Card = ({ image, title, description, languages, githubLink, liveDemoLink }: CardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 dark:border-neutral-900/10 dark:bg-neutral-900/[0.02]">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent opacity-60 dark:from-neutral-50" />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-neutral-100 dark:text-neutral-900">
            {title}
          </h3>
          <div className="flex shrink-0 gap-1.5">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-500"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-emerald-400/40 hover:text-emerald-400 dark:border-neutral-900/10 dark:text-neutral-500"
              >
                <SquareArrowOutUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-neutral-400 dark:text-neutral-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 font-fira">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="rounded-md border border-white/10 px-2 py-1 text-xs text-neutral-300 dark:border-neutral-900/10 dark:text-neutral-600"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;