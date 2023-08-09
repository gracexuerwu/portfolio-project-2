import React from "react";
import "../styles/Home.css";

//Component import
import Hero from "./Hero";
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      {/* <Experience />
      <Education /> */}
      <Footer />
    </div>
  );
}
