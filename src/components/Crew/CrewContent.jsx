import React from "react";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";
import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";

export function CrewContent({
  crewMember,
  activeIndex,
  setCrewMember,
  setActiveIndex,
}) {
  return (
    <div className="crew-info">
      <div className="crew-details">
        <h3 className="crew-role">{crewMember.role}</h3>
        <h1 className="crew-name">{crewMember.name}</h1>
        <p className="crew-bio">{crewMember.bio}</p>
        <ul className="crew-list">
          {[
            "Douglas Hurley",
            "Mark Shuttleworth",
            "Victor Glover",
            "Anousheh Ansari",
          ].map((member, index) => (
            <li
              key={index}
              className={`crew-list-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => {
                setCrewMember({
                  name: member,
                  role: crewMember.role,
                  bio: crewMember.bio,
                });
                setActiveIndex(index);
              }}
            >
              <span className="crew-dot">&#9679;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="crew-image">
        <img
          src={
            crewMember.name === "Douglas Hurley"
              ? douglas
              : crewMember.name === "Mark Shuttleworth"
              ? mark
              : crewMember.name === "Victor Glover"
              ? victor
              : anousheh
          }
          alt={crewMember.name}
        />
      </div>
    </div>
  );
}
