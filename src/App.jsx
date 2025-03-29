import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Compass from "./components/Compass";
import Signals from "./components/Signals";
import Circle from "./components/Circle";
import Story from "./components/Story";
import Footer from "./components/Footer";

const tabs = ["Home", "Compass", "Signals", "Circle", "Story"];

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Compass":
        return <Compass />;
      case "Signals":
        return <Signals />;
      case "Circle":
        return <Circle />;
      case "Story":
        return <Story />;
      default:
        return <HeroSection />; // ✅ Updated HeroSection includes the quiz
    }
  };

  return (
    <div>
      <nav className="sticky top-0 bg-white shadow-md z-10 flex justify-center space-x-6 py-4 text-clay font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`hover:underline ${activeTab === tab ? "font-bold" : ""}`}
          >
            {tab}
          </button>
        ))}
      </nav>
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
