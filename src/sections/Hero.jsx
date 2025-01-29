import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FileText, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="mt-16 sm:p-10 flex items-start flex-col " id="about">
      <div className="relative sm:px-16 py-8 mt-10 z-10">
        <a href="/">
          <img src="./images-modified.png" alt="Logo" width={80} height={50} />
        </a>
      </div>

      <div className="relative z-10 flex flex-col flex-wrap gap-4 md:gap-6 px-4 md:px-16 w-full lg:w-2/3">
        <h1 className="text-3xl md:text-4xl font-fira font-semibold text-white dark:text-neutral-900">
          Hi, I'm Aimen.
        </h1>
        <h3 className="text-2xl md:text-3xl mr-8 font-sans font-bold text-white dark:text-neutral-900  leading-snug">
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
          style={{ height: "300px", width: "300px" }} // Adjust the size as needed
        />
      </div>

      <div className="flex justify-between flex-wrap px-4 md:px-16">
        <div className="px-4 md:px-16 flex space-x-4 md:space-x-6 mt-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-600 hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.98.248 2.438.415a4.928 4.928 0 011.743 1.01 4.928 4.928 0 011.01 1.743c.167.457.36 1.268.415 2.438.058 1.267.07 1.647.07 4.851s-.012 3.584-.07 4.85c-.056 1.17-.248 1.98-.415 2.438a4.928 4.928 0 01-1.01 1.743 4.928 4.928 0 01-1.743 1.01c-.457.167-1.268.36-2.438.415-1.267.058-1.647.07-4.851.07s-3.584-.012-4.85-.07c-1.17-.056-1.98-.248-2.438-.415a4.928 4.928 0 01-1.743-1.01 4.928 4.928 0 01-1.01-1.743c-.167-.457-.36-1.268-.415-2.438-.058-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.85c.056-1.17.248-1.98.415-2.438a4.928 4.928 0 011.01-1.743 4.928 4.928 0 011.743-1.01c.457-.167 1.268-.36 2.438-.415 1.267-.058 1.647-.07 4.851-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.27.059-2.144.258-2.905.548a6.935 6.935 0 00-2.517 1.671 6.935 6.935 0 00-1.671 2.517c-.29.761-.489 1.635-.548 2.905-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.059 1.27.258 2.144.548 2.905a6.935 6.935 0 001.671 2.517 6.935 6.935 0 002.517 1.671c.761.29 1.635.489 2.905.548 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.27-.059 2.144-.258 2.905-.548a6.935 6.935 0 002.517-1.671 6.935 6.935 0 001.671-2.517c.29-.761.489-1.635.548-2.905.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.059-1.27-.258-2.144-.548-2.905a6.935 6.935 0 00-1.671-2.517 6.935 6.935 0 00-2.517-1.671c-.761-.29-1.635-.489-2.905-.548-1.28-.059-1.69-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AimenDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-600 hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.825.577C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aimen-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-600 hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.53 3H4.47C3.66 3 3 3.66 3 4.47v15.06C3 20.34 3.66 21 4.47 21h15.06c.81 0 1.47-.66 1.47-1.47V4.47C21 3.66 20.34 3 19.53 3zM9 19H6V9h3v10zm-1.5-11.738c-1.038 0-1.5-.684-1.5-1.54 0-.855.462-1.54 1.54-1.54s1.5.684 1.5 1.54c0 .856-.462 1.54-1.54 1.54zm12.5 11.738h-3v-5.192c0-1.235-.025-2.825-1.724-2.825-1.725 0-1.989 1.348-1.989 2.73v5.287h-3v-10h3v1.356h.041c.419-.794 1.446-1.636 2.975-1.636 3.182 0 3.773 2.090 3.773 4.797v6.484z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-neutral-400 dark:text-neutral-600 hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-4 space-y-4 mt-8 sm:space-x-2 sm:space-y-2">
          {/* Contact Me Button */}
          <button
            onClick={() =>
              (window.location.href =
                "mailto:aimendev4@gmail.com?subject=Hello&body=I%20would%20like%20to%20know%20more%20about%20your%20services.")
            }
            className="flex items-center justify-center space-x-2 p-2 sm:px-4 sm:py-2 border border-emerald-400 text-emerald-400 rounded-full shadow-lg hover:bg-emerald-400 hover:text-white transition-colors duration-300 w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Me</span>
          </button>

          {/* See CV Section */}
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 w-full sm:w-auto">
            <button className="flex items-center justify-center space-x-2 p-2 sm:px-4 sm:py-2 bg-emerald-400 text-white rounded-full shadow-lg hover:bg-transparent hover:text-emerald-400 border border-emerald-400 transition-colors duration-300 w-full sm:w-auto">
              <FileText className="w-5 h-5" />
              <span>See CV</span>
            </button>

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
