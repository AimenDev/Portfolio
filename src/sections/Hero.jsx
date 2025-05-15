import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FileText,
  Mail,
  Instagram,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: Instagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/AimenDev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aimen-dev/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
];

const SocialIcon = ({ href, icon: Icon, name }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-12 h-12 flex items-center justify-center"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={name}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="w-6 h-6 text-neutral-300 dark:text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300 z-10" />
  </motion.a>
);

const Hero = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:aimendev4@gmail.com?subject=Hello&body=I%20would%20like%20to%20know%20more%20about%20your%20services.";
  };

  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden py-16 sm:py-20"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 -z-10" />
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] -z-10" />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo section */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <img
              src="./images-modified.png"
              alt="Logo"
              width={80}
              height={50}
              className="transition-transform duration-300 rounded-md shadow-lg"
            />
          </motion.a>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-fira tracking-tight text-white dark:text-neutral-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Hi, I'm Aimen.
              </motion.h1>

              <motion.h3
                className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent dark:from-emerald-500 dark:to-teal-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Web developer, designer, and technology enthusiast.
              </motion.h3>

              <motion.p
                className="text-lg sm:text-xl text-neutral-300 dark:text-neutral-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                A passionate web developer specializing in creating dynamic and
                responsive websites. I have a strong background in both
                front-end and back-end development, building seamless user
                experiences and efficient web applications.
              </motion.p>
            </div>

            {/* Actions and Social */}
            <div className="space-y-8 sm:space-y-10">
              {/* Social icons */}
              <motion.div
                className="flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {socialLinks.map((social) => (
                  <SocialIcon key={social.name} {...social} />
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {/* Contact Me Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-400 text-emerald-400 rounded-full font-medium hover:bg-emerald-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </motion.button>

                {/* See CV Section */}
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-400 text-white rounded-full font-medium hover:bg-emerald-500 border-2 border-emerald-400 transition-all duration-300"
                  >
                    <FileText className="w-5 h-5" />
                    <span>See CV</span>
                  </motion.button>

                  <p className="text-neutral-400 dark:text-neutral-600 text-sm">
                    (No CV for now).
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Animation container */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

              {/* Lottie animation */}
              <div className="relative">
                <Player
                  autoplay
                  loop
                  src="./Animation.json"
                  style={{ height: "400px", width: "400px" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
