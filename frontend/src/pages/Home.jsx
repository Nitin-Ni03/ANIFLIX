
// Import asset
import Hero from "../components/home/Home";
import Animecard from "../components/home/AnimeCard";
import Features from "../components/home/Features";
import FaqSection from "../components/home/FaqSection"

const Home = () => {
 
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Hero Banner Section */}
      <Hero />
      {/* Anime Slider/Carousel Showcase */}
      <Animecard />

      {/* Feature Section */}
      <Features />
      

      {/* FAQ Accordion Section */}
      <FaqSection />
    </div>
  );
};

export default Home;
