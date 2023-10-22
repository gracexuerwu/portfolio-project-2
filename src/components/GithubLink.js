import React from "react";
import "../styles/GithubLink.css";

export default function GithubLink(props) {
  return (
    <span className="GithubLink">
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className=""
          >Git</a>
    </span>
  );
}
