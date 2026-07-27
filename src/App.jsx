import { Routes, Route } from "react-router-dom";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import FeaturedSection from "./components/destination/FeaturedSection";
import Hero from "./components/home/Hero";
import Footer from "./components/layers/Footer";
import Header from "./components/layers/Header";
import TravelSection from "./components/travel/TravelSection";
import useScrollToSection from "./hooks/useScrollToSection";

const OnePage = () => {
  useScrollToSection();

  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <FeaturedSection />
      <TravelSection />
      <ContactSection />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/*" element={<OnePage />} />
    </Routes>
  );
}

export default App;