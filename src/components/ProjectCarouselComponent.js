import React from "react";
import "../styles/FeaturedProjects.css";
//Phosphor icon import
import { Link, GithubLogo } from "phosphor-react";


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
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="wrap">
        <div className="right">
          {" "}
          <h4>Weather App</h4>
        </div>
        <a href={props.projectLink} target="_blank" rel="noreferrer" className="left linksLogo">
          <Link size={30} />
        </a>
        {/* <div className="left linksLogo">
          <GithubLogo size={30} />
        </div> */}
      </div>
      <div className="projectDescription">
      {props.description}
      </div>
      <span className="projectSoftwares">{props.projectType}</span>
    </div>
  );
}
