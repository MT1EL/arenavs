import React from "react";
import "./App.css";
import { tokeonmicsData } from "./components/tokenomics/tokenomicsData";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs";
import DesignConcept from "./components/DesignConcept";
import RoadMap from "./components/roadMap/RoadMap";
import Tokenomics from "./components/tokenomics/Tokenomics";
import Table from "./components/tokenomics/table";

const header = ["pool", "amt Price", "raised", "procent", "tokens"];
const footer = ["TOTAL", "", "$1.032,480", "100,00%", "100 000 000"];
function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <AboutUs />
      <DesignConcept />
      <RoadMap />
      <Tokenomics />
    </div>
  );
}

export default App;
