import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./aboutUs";
function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <AboutUs />
    </div>
  );
}

export default App;
