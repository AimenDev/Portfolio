import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills.jsx";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "90px",
      duration: 1000,
      reset: true,
    });
    sr.reveal(
      `
        #projects,
        #skills,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <main className="bg-zinc-800 dark:bg-zinc-100 space-y-8 shadow-lg w-full sm:w-[90%] 2xl:w-[65%] mx-auto py-0 px-7">
      <Header />
      <Hero />
      <Main />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;
