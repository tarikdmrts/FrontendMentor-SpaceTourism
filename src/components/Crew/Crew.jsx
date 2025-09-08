import React from "react";
import "./crew.css";
import NavBar from "../Navigation/Navigation";
import data from "../../data.json";
import { CrewContent } from "./CrewContent";

export default function Crew() {
  const [crewMember, setCrewMember] = React.useState(data.crew[0]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="crew-page">
      <div className="crew-bg"></div>
      <NavBar />
      <div className="crew-content">
        <h2 className="header">
          <span className="header-number">02</span> MEET YOUR CREW
        </h2>
        <CrewContent
          key={crewMember.name}
          crewMember={crewMember}
          activeIndex={activeIndex}
          setCrewMember={setCrewMember}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
