import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Main from "./sections/Main";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 800,
      delay: 100,
      opacity: 0,
      easing: "ease-out",
      reset: false,
      cleanup: true,
    });

    sr.reveal("#education");
    sr.reveal("#projects", { delay: 150 });
    sr.reveal("#skills", { delay: 150 });
    sr.reveal("footer", { delay: 100 });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F0E] text-neutral-100 dark:bg-neutral-50 dark:text-neutral-900">
      <Header />

      <main>
        <Hero />
        <Education />
        <Main />
        <Skills />
      </main>

      <Footer />
    </div>
  );
};

export default App;