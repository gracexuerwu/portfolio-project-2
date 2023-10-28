import React from "react";
import "../styles/FeaturedProjects.css";
import GithubLink from "./GithubLink";

// Phosphor icon import
import { ArrowLineUpRight } from "phosphor-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit } from "@fortawesome/free-brands-svg-icons";

export default function ProjectComponent(props) {
  return (
    <div className="ProjectComponent">
      <a href={props.liveSiteLink} target="_blank" rel="noreferrer">
        <img
          src={props.image}
          className="img-fluid text-center placeholder-img rounded projectImage enlarge-image box-shadow"
          alt=""
        />
      </a>
      <div className="">
        <div className="Github center-text">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className="Link"
          >
          </a>
        </div>
        {/* <span className="GithubLink">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            Git link
          </a>
        </span> */}
      </div>
    </div>
  );
}
