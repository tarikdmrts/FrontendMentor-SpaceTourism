import React from "react";
import "./destinations.css";
import NavBar from "../Navigation/Navigation.jsx";
import data from "../../data.json";
import { DestinationContent } from "./DestinationContent.jsx";

export default function Destinations() {
  const [destination, setDestination] = React.useState(data.destinations[0]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="destinations-page">
      <div className="destinations-bg"></div>
      <NavBar />
      <div className="destination-content">
        <h2 className="header">
          <span className="header-number">01</span> PICK YOUR DESTINATION
        </h2>
        <DestinationContent
          key={destination.name}
          destination={destination}
          activeIndex={activeIndex}
          setDestination={setDestination}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
