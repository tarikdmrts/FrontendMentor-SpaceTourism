import React from "react";
import "./technology.css";

export default function TechnologyContent({ technology }) {
  return (
    <div className="technology-info">
      <h3 className="tech-terminology">THE TERMINOLOGY...</h3>
      <div className="tech-dynamic fade-in" key={technology.name}>
        <h1 className="tech-name">{technology.name}</h1>
        <p className="tech-description">{technology.description}</p>
      </div>
    </div>
  );
}
