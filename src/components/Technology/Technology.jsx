import React from "react";
import "./technology.css";
import NavBar from "../Navigation/Navigation";
import data from "../../data.json";
import TechnologyContent from "./TechnologyContent";
import TechnologyImage from "./TechnologyImage";

export default function Technology() {
  const [technology, setTechnology] = React.useState(data.technology[0]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="technology-page">
      <div className="technology-bg"></div>
      <NavBar />
      <div className="content">
        <h2 className="header">
          <span className="header-number">03</span> SPACE LAUNCH 101
        </h2>
        <div className="technology-details">
          <TechnologyImage technology={technology} />

          <div className="technology-buttons">
            <ul>
              {data.technology.map((tech, index) => (
                <li
                  key={tech.name}
                  className={`tech-button ${
                    activeIndex === index ? "active-tech" : ""
                  }`}
                  onClick={() => {
                    setTechnology(tech);
                    setActiveIndex(index);
                  }}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
          <TechnologyContent
            key={technology.name}
            technology={technology}
            activeIndex={activeIndex}
            setTechnology={setTechnology}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}
