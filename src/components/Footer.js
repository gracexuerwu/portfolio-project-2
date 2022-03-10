import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="flex-container space-between">
        <div className="flex-item-left">
          <h2>
            Designed and developed by <strong>Grace Wu</strong>.
          </h2>{" "}
          <h2>
            Built with <strong>React</strong>. Hosted on Netlify.
          </h2>
        </div>
        <div className="flex-item-right footer-social">
          <a
            href="mailto:grace.xuer.wu@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="fa-xl socialIcons" />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl socialIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/grace-ade-wu/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="fa-xl socialIcons" />
          </a>
        </div>
      </div>
    </div>
  );
}
