import React from "react";
import "../styles/Home.css";

//Component import
import Hero from "./Hero";
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from "../components/Contact";
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </div>
  );
}
