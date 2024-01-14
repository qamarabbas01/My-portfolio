import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <div id="navbar">
        <Navbar />
      </div>

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
