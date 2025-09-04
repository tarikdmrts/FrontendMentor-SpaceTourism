import React from "react";
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

export default function TechnologyImage({ technology }) {
  return (
    <div className="technology-image fade-in" key={technology.name}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={
            technology.name === "Launch vehicle"
              ? launchVehiclePortrait
              : technology.name === "Spaceport"
              ? spaceportPortrait
              : capsulePortrait
          }
        />
        <img
          src={
            technology.name === "Launch vehicle"
              ? launchVehicleLandscape
              : technology.name === "Spaceport"
              ? spaceportLandscape
              : capsuleLandscape
          }
          alt={technology.name}
        />
      </picture>
    </div>
  );
}
