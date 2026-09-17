import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", theme === "dark");

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div
      className="
        min-h-screen
        bg-zinc-50
        text-zinc-800
        transition-colors
        duration-500
        dark:bg-matte-charcoal
        dark:text-ash-white
      "
    >
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;