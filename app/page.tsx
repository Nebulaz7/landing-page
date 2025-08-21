import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Feature1 from "./components/Feature1";

export default function Home() {
  return (
    <div className="grid-background">
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature />
    </div>
  );
}
