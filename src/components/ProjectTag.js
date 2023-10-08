import React from "react";
import "../styles/ProjectTag.css";

export default function ProjectTag(props) {
  return (
    <span className="ProjectTag">
      <span>{props.tagOne}</span>
    </span>
  );
}
