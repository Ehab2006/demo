import Features from "./components/Features";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Mail from "./components/Mail";
import Places from "./components/Places";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="main">
        <Places title={"Some places"} />
        <Mail />
      </div>
    </div>
  );
}
