import { useState } from "react";
import AboutOverview from "./components/AboutOverview";
import Contact from "./components/Contact";
import PortfolioSlider from "./components/PortfolioSlider";
import ServicesOverview from "./components/ServicesOverview";
import Navbar from "./components/Navbar";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      {/* Contact Button - Fixed Position */}
      <Navbar/>
      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
      >
        Contact Us
      </button>

      {/* Main Content */}
      <AboutOverview />
      <PortfolioSlider />
      <ServicesOverview />

      {/* Contact Modal */}
      <Contact
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;