import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
    </div>
  );
};

export default App;
