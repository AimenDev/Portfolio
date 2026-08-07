import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Mail,
  Instagram,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SocialLinkData {
  name: string;
  href: string;
  icon: LucideIcon;
}

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  name: string;
}

const socialLinks: SocialLinkData[] = [
  { name: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { name: "GitHub", href: "https://github.com/AimenDev", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aimen-dev/",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const SocialIcon = ({ href, icon: Icon, name }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-colors duration-300 hover:border-emerald-400/40 dark:border-neutral-900/10 dark:hover:border-emerald-500/40"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    aria-label={name}
  >
    <Icon className="h-4 w-4 text-neutral-400 transition-colors duration-300 group-hover:text-emerald-400 dark:text-neutral-500 dark:group-hover:text-emerald-600" />
  </motion.a>
);

// Signature element: a one-time typed terminal session that stands in for
// the old blob + Lottie animation, and actually says something true about
// the person instead of decorating the page.
const script = [
  { prompt: "whoami", output: "aimen — web developer & security researcher" },
  {
    prompt: "focus",
    output: "building web apps, then testing them for weaknesses",
  },
  { prompt: "status", output: "open to freelance & full-time work" },
];

const TerminalCard = () => {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const fullText = script
    .map((l) => `$ ${l.prompt}\n  ${l.output}`)
    .join("\n\n");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTyped(fullText);
      setDone(true);
      return;
    }

    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i < fullText.length) {
        const char = fullText[i - 1];
        const delay = char === "\n" ? 220 : 18 + Math.random() * 20;
        setTimeout(tick, delay);
      } else {
        setDone(true);
      }
    };
    setTimeout(tick, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#0F1513]/80 shadow-2xl shadow-black/40 backdrop-blur-sm dark:border-neutral-900/10 dark:bg-white/70">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 dark:border-neutral-900/10">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-fira text-xs text-neutral-500 dark:text-neutral-500">
          aimen@portfolio: ~
        </span>
      </div>
      <pre className="min-h-[220px] whitespace-pre-wrap px-5 py-5 font-fira text-[13px] leading-relaxed text-emerald-300/90 dark:text-emerald-700">
        {typed}
        <span
          className={`ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] bg-emerald-400 ${
            done ? "animate-pulse" : ""
          }`}
        />
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-12"
    >
      {/* Background: flat near-black with a green undertone + a quiet dot
          grid, instead of blurred blobs — a texture, not a decoration */}
      <div className="absolute inset-0 -z-10 bg-[#0B0F0E] dark:bg-neutral-50" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(52,211,153,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#0B0F0E] dark:to-neutral-50" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left content */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar + eyebrow row */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <a href="/Portfolio/" className="inline-block shrink-0">
                <img
                  src="./Mr You.jpg"
                  alt="Aimen"
                  width={52}
                  height={52}
                  className="rounded-full object-cover ring-2 ring-emerald-400/30"
                />
              </a>
              <span className="font-fira text-xs tracking-wide text-emerald-400/80 dark:text-emerald-600">
                ~/portfolio $ whoami
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="font-fira text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl dark:text-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm Aimen.
              </motion.h1>

              <motion.h2
                className="text-xl font-medium text-neutral-300 sm:text-2xl dark:text-neutral-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I build web apps, then try to{" "}
                <span className="text-emerald-400 dark:text-emerald-600">
                  break
                </span>{" "}
                them before anyone else does.
              </motion.h2>

              <motion.p
                className="max-w-lg text-base leading-relaxed text-neutral-400 dark:text-neutral-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Web developer with a background in bug bounty and security
                research — I bring an attacker's eye to every build, so what
                I ship holds up after launch, not just at the demo.
              </motion.p>

              {/* Status pill: real, not decorative */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 dark:border-neutral-900/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <span className="font-fira text-xs text-neutral-300 dark:text-neutral-600">
                  open to freelance & full-time work
                </span>
              </motion.div>
            </div>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} {...social} />
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.a
                href="mailto:aimendev4@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Aimen,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you."
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-medium text-[#0B0F0E] transition-colors duration-300 hover:bg-emerald-300"
              >
                <Mail
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Contact me
              </motion.a>

              <motion.a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-fira font-medium text-neutral-300 transition-colors duration-300 hover:border-emerald-400/50 hover:text-emerald-300 dark:border-neutral-900/15 dark:text-neutral-700 dark:hover:text-emerald-600"
              >
                <span className="text-neutral-500 group-hover:text-emerald-400">
                  [
                </span>
                <FileText size={16} />
                Resume
                <span className="text-neutral-500 group-hover:text-emerald-400">
                  ]
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: terminal card, the one signature element */}
          <motion.div
            className="hidden items-center justify-center lg:flex"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <TerminalCard />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;