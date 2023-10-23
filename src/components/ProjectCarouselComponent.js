import React from "react";
import "../styles/FeaturedProjects.css";
//Phosphor icon import
import { Link } from "phosphor-react";

export default function ProjectCarouselComponent(props) {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade ProjectComponent"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={props.imageOne}
            className="d-block w-100 rounded placeholder-img"
            alt={props.alt}
          />
        </div>
        <div className="carousel-item">
          <img
            src={props.imageTwo}
            className="d-block w-100 rounded placeholder-img"
            alt={props.alt}
          />
        </div>
      </div>
      <div className="wrap">
        <div className="right">
          {" "}
        </div>
        <a
          href={props.projectLink}
          target="_blank"
          rel="noreferrer"
          className="left linksLogo"
        >
        </a>
        {/* <div className="left linksLogo">
          <GithubLogo size={30} />
        </div> */}
      </div>
      {/* <div className="projectDescription">
      {props.description}
      </div> */}
      {/* <span className="projectSoftwares">{props.projectType}</span> */}
    </div>
  );
}
