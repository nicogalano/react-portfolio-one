import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Up from "./components/Up";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
      <Up />
    </div>
  );
}

export default App;
