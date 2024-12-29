"use client"



import React, { useEffect } from "react";
import Hero from "../components/Hero";  // Use the correct relative path to your components
import Skills from "../components/Skills";  // Use the correct relative path to your components
import About from "@/components/Contact";
import Contact from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() =>{
    AOS.init({
      easing:"ease-out-back",
      duration :1200,
      delay : 100,
      mirror : true,
      anchorPlacement : "bottom-bottom",
      offset : 160,
    });
    AOS.refresh()
  } ,[]);
  return (
    <main> 
      <Hero />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
