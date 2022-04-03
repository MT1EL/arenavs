import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs";
import DesignConcept from "./components/DesignConcept";
import RoadMap from "./components/roadMap/RoadMap";
import Tokenomics from "./components/tokenomicsFolder/PieAndTable";
import Team from "./components/Team/team";
import Sponsors from "./components/Sponsors";
import Advisors from "./components/Advisors";
import Footer from "./components/footer";
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
      <Team />
      <Sponsors />
      <Advisors />
      <Footer />
    </div>
  );
}

export default App;
