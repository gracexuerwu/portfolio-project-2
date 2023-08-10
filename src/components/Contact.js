import React from "react";
import "../styles/Contact.css";
import { HandWaving } from "phosphor-react";

export default function Contact() {
  return (
    <div className="Contact">
          <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
      <div className="row flex-column-reverse flex-md-row bio-row ContactSection">
        <div className="col-md-7">
          <h1>Get in touch. <br /> or just a friendly hello <HandWaving size={32} /></h1>
        </div>
        <div className="col-md-5 d-flex align-items-end flex-column">
         <div className="col">
            Email
            {/* <ArrowUpRight size={2} /> */}
         </div>
         <div className="col">
            Linkedin
         </div>
        </div>
      </div>
      <hr
        style={{
          height: 1,
          borderColor: "#1A1A1A",
        }}
      />
    </div>
  );
}
