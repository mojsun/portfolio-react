import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Home":
        return <Home />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const changeScreen = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="container">
      <Nav changeScreen={changeScreen} />

      <main>
        {/* <Home />
        <Portfolio /> */}
        {renderScreen()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
