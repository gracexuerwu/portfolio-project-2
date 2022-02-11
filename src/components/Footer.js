import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="d-flex Footer">
      <div className="left-col col-10">
        <h2>Designed and developed by Grace Wu.</h2>{" "}
        <h2>
          Built with <strong>React</strong>. Hosted on Netlify.
        </h2>
      </div>
      <div className="center-col"></div>
      <div className="right-col col-2">
        <FontAwesomeIcon icon={faEnvelope} className="fa-xl socialIcons" />
        <FontAwesomeIcon icon={faLinkedin} className="fa-xl socialIcons" />
        <FontAwesomeIcon icon={faGithub} className="fa-xl socialIcons" />
      </div>
    </div>
  );
}
