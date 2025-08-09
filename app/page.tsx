import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <div className="grid-background">
      <Navbar />
      <Hero />
      <Feature />
    </div>
  );
}
