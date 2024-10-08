import React from "react";

const Hero = () => {
  return (
    <section className="mt-10 flex flex-col ">
      <div className="px-16 py-8">
        <a href="/">
          <img src="/images-modified.png" alt="Logo" width={80} height={50} />
        </a>
      </div>
      <div className="flex flex-col flex-wrap gap-4 md:gap-6 px-4 md:px-16 w-full lg:w-2/3 ">
        <h1 className="text-3xl md:text-4xl font-sans font-bold text-white leading-snug">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="text-sm md:text-lg font-sans text-neutral-400 leading-snug">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
      </div>
      <div className='px-4 md:px-16 flex space-x-4 md:space-x-6 mt-8'>
        {/* Instagram */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-neutral-400 hover:text-white"
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
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-neutral-400 hover:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.825.577C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-neutral-400 hover:text-white"
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
            className="w-6 h-6 text-neutral-400 hover:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 4.557a9.929 9.929 0 01-2.828.775 4.975 4.975 0 002.164-2.724 9.949 9.949 0 01-3.127 1.2A4.93 4.93 0 0016.92 3c-2.723 0-4.938 2.208-4.938 4.927 0 .386.045.762.126 1.124-4.103-.205-7.736-2.164-10.18-5.144a4.903 4.903 0 00-.666 2.477c0 1.71.873 3.22 2.188 4.102a4.905 4.905 0 01-2.23-.616v.061c0 2.388 1.688 4.378 3.925 4.837a4.908 4.908 0 01-2.224.085c.629 1.953 2.448 3.38 4.6 3.419A9.867 9.867 0 010 19.54a13.93 13.93 0 007.548 2.211c9.055 0 14.004-7.485 14.004-13.952 0-.213-.005-.426-.014-.637A10.003 10.003 0 0024 4.557z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
