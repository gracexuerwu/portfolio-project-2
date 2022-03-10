import React from "react";
import "../styles/FeaturedProjects.css";

//Phosphor icon import
import { Link, GithubLogo } from "phosphor-react";

export default function ProjectComponent(props) {
  return (
    <div className="ProjectComponent">
      <img
        src={props.image}
        className="img-fluid text-center placeholder-img rounded projectImage"
        alt=""
      />
      <div className="wrap">
        <div className="right">
          {" "}
          <h4>{props.projectName}</h4>
        </div>
        {/* <a href={props.liveSiteLink} target="_blank">
                <FontAwesomeIcon
                  icon={faLink}
                  className="fa-sm left linksLogo"
                />
        </a> */}
        <a href={props.liveSiteLink} target="_blank" rel="noreferrer" className="left linksLogo">
          <Link size={30} />
        </a>
        <a href={props.githubLink} target="_blank" rel="noreferrer" className="left linksLogo">
          <GithubLogo size={30} />
        </a>
      </div>
      <div className="projectDescription">{props.description}</div>
      <span className="projectSoftwares">{props.software1}</span>
      <span className="projectSoftwares">{props.software2}</span>
    </div>
  );
}
