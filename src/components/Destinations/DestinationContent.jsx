import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";
import data from "../../data.json";
import React from "react";
import "./destinations.css";

export function DestinationContent({
  destination,
  activeIndex,
  setDestination,
  setActiveIndex,
}) {
  return (
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
  );
}
