import React from "react";
import "../styles/FeaturedProjects.css";

//Phosphor icon import
import { GithubLogo } from "phosphor-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit } from "@fortawesome/free-brands-svg-icons";

export default function ProjectComponent(props) {
  return (
    <div className="ProjectComponent">
      <a href={props.liveSiteLink} target="_blank" rel="noreferrer">
        <img
          src={props.image}
          className="img-fluid text-center placeholder-img rounded projectImage enlarge-image"
          alt=""
        />
      </a>
      <div className="wrap">
        <div className="right"> {/* <h4>{props.projectName}</h4> */}</div>
        {/* <a href={props.liveSiteLink} target="_blank">
                <FontAwesomeIcon
                  icon={faLink}
                  className="fa-sm left linksLogo"
                />
        </a> */}
        {/* <a
          href={props.liveSiteLink}
          target="_blank"
          rel="noreferrer"
          className="left linksLogo"
        >
          <Link size={30} />
        </a> */}
        <div className="curved-border">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className="left linksLogo"
          >
             <FontAwesomeIcon
                  icon={faGit}
                  size="2xs"
                />
          </a>
        </div>
      </div>
      {/* <div className="projectDescription">{props.description}</div> */}
      {/* <span className="projectSoftwares">{props.software1}</span>
      <span className="projectSoftwares">{props.software2}</span> */}
    </div>
  );
}
