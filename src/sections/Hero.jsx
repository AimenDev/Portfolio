import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FileText, Mail, Instagram, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: Instagram
  },
  {
    name: "GitHub",
    href: "https://github.com/AimenDev",
    icon: Github
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aimen-dev/",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter
  }
];

const SocialIcon = ({ href, icon: Icon, name }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative w-10 h-10 flex items-center justify-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={name}
  >
    <div className="absolute inset-0 bg-emerald-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="w-6 h-6 text-neutral-400 dark:text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300" />
  </motion.a>
);

const Hero = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:aimendev4@gmail.com?subject=Hello&body=I%20would%20like%20to%20know%20more%20about%20your%20services.";
  };

  return (
    <section className="mt-16 sm:p-10 flex items-start flex-col" id="about">
      <div className="relative sm:px-16 py-8 mt-10 z-10">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="./images-modified.png"
            alt="Logo"
            width={80}
            height={50}
            className="transition-transform duration-200"
          />
        </motion.a>
      </div>

      <div className="relative z-10 flex flex-col flex-wrap gap-4 md:gap-6 px-4 md:px-16 w-full lg:w-2/3">
        <h1 className="text-3xl md:text-4xl font-fira font-semibold text-white dark:text-neutral-900">
          Hi, I'm Aimen.
        </h1>
        <h3 className="text-2xl md:text-3xl mr-8 font-sans font-bold text-white dark:text-neutral-900 leading-snug">
          Web developer, designer, and technology enthusiast.
        </h3>
        <p className="text-lg mb-8 font-sans text-neutral-400 dark:text-neutral-600 leading-snug">
          A passionate web developer specializing in creating dynamic and
          responsive websites. I have a strong background in both front-end and
          back-end development, building seamless user experiences and efficient
          web applications.
        </p>
      </div>

      <div className="hidden absolute mt-10 right-0 lg:w-1/2 lg:flex lg:flex-end items-center z-0">
        <Player
          autoplay
          loop
          src="./Animation.json"
          style={{ height: "300px", width: "300px" }}
        />
      </div>

      <div className="flex justify-between flex-wrap px-4 md:px-16 w-full">
        <div className="px-4 md:px-16 flex space-x-6 md:space-x-8 mt-8">
          {socialLinks.map((social) => (
            <SocialIcon key={social.name} {...social} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-8">
  {/* Contact Me Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleContactClick}
    className="flex items-center justify-center space-x-2 p-2 sm:px-4 sm:py-2 border border-emerald-400 text-emerald-400 rounded-full shadow-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 w-full sm:w-auto"
  >
    <Mail className="w-5 h-5" />
    <span>Contact Me</span>
  </motion.button>

  {/* See CV Section */}
  <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center space-x-2 p-2 sm:px-4 sm:py-2 bg-emerald-400 text-white rounded-full shadow-lg hover:bg-transparent hover:text-emerald-400 border border-emerald-400 transition-all duration-300 w-full sm:w-auto"
    >
      <FileText className="w-5 h-5" />
      <span>See CV</span>
    </motion.button>

    {/* Explanation Text */}
    <p className="text-neutral-400 dark:text-neutral-600 text-sm text-center sm:text-left">
      (No CV for now).
    </p>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;