import React from "react";
import "../styles/Home.css";

//Component import
import Hero from "./Hero";
// import FeaturedProjects from '../components/FeaturedProjects';
import Contact from "../components/Contact";
import Footer from '../components/Footer';
import NewProjectComponent from "./NewProjectComponent";


export default function Home() {
  return (
    <div>
      <Hero />
     {/* <FeaturedProjects />  */}
     <NewProjectComponent />
      <Contact />
      <Footer />
    </div>
  );
}
