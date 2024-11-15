import Features from "./components/Features";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Mail from "./components/Mail";
import Places from "./components/Places";

export default function Home() {
  return (
    <div id="App" className="px-6">
      <Hero />
      <Features />
      <Places />
      <Mail />
    </div>
  );
}
