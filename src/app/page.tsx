import About from "./components/about"; 
import HomePage from "./components/home";

export default function Home() {
  return (
    <main>
      <div className="relative z-0">
        <HomePage />
      </div>
      <div className="relative z-0"> 
        <About />
      </div>
    </main>
  );
}
