import React from "react";
import "../styles/Contact.css";
import { HandWaving } from "phosphor-react";

export default function Contact() {
  return (
    <div className="Contact">
      {/* <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      /> */}
      <div className="row flex-column-reverse flex-md-row bio-row ContactSection">
        <div className="col-md-11">
          <h1>
            Get in touch. <br /> or just a friendly hello{" "}
            <HandWaving size={32} />
          </h1>
        </div>
        <div className="col-md-1">
          <div className="col padding">
            Email
          </div>
          <div className="col">Linkedin</div>
        </div>
      </div>
      <hr
        className="divider"
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
    </div>
  );
}
