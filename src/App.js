import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs";
import DesignConcept from "./components/DesignConcept";
import RoadMap from "./components/roadMap/RoadMap";
function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <AboutUs />
      <DesignConcept />
      <RoadMap />
    </div>
  );
}

export default App;
