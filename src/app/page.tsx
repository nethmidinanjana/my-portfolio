import About from "./components/about";
import Contact from "./components/contact";
import HomePage from "./components/home";
import TechStack from "./components/tech-stack";
import Works from "./components/works";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <Works/>
      <TechStack/>
      <Contact/>
    </main>
  );
}
