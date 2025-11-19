import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
    </div>
  );
};

export default App;
