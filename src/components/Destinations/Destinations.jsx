import React from "react";
import "./destinations.css";

import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import NavBar from "../Navigation/Navigation.jsx";
import data from "../../data.json";

export default function Destinations() {
  const [destination, setDestination] = React.useState(data.destinations[0]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="destinations-page">
        <div className="destinations-bg"></div>
      <NavBar />
      <div className="content">
        <h2 className="destinations-header">
          <span className="header-number">01</span> PICK YOUR DESTINATION
        </h2>
        <div className="destination-info">
          <div className="destination-image">
            <img
              src={
                destination.name === "Moon"
                  ? moon
                  : destination.name === "Mars"
                  ? mars
                  : destination.name === "Europa"
                  ? europa
                  : titan
              }
              alt={destination.name}
            />
          </div>
          <div className="destination-details">
            <ul className="destination-list">
              {data.destinations.map((dest, index) => (
                <li
                  key={index}
                  className={`destination-list-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setDestination(dest);
                    setActiveIndex(index);
                  }}
                >
                  {dest.name}
                </li>
              ))}
            </ul>
            <h1 className="destination-name">{destination.name}</h1>
            <p className="destination-description">{destination.description}</p>
            <div className="destination-stats">
              <div className="stat">
                <h3 className="stat-label">AVG. DISTANCE</h3>
                <p className="stat-value">{destination.distance}</p>
              </div>
              <div className="stat">
                <h3 className="stat-label">EST. TRAVEL TIME</h3>
                <p className="stat-value">{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
