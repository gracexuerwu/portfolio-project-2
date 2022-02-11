import React from "react";
import "../styles/Footer.css";

//Phosphor icon import
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from "phosphor-react";

export default function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h2>Designed and developed by Grace Wu.</h2>
                <h2>Built with React. Hosted in Netlify</h2>
                </div>
                <div className="col">
                <EnvelopeSimple size={32} />
                </div>
            </div>
        </div>
    )
}