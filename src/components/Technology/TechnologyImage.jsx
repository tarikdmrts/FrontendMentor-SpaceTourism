import React from "react";
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import launchVehicleTablet from "../../assets/technology/image-launch-vehicle-tablet.jpg";
import spacePortTablet from "../../assets/technology/image-spaceport-tablet.jpg";
import capsuleTablet from "../../assets/technology/image-space-capsule-tablet.jpg";

export default function TechnologyImage({ technology }) {
  const images = {
    "Launch vehicle": {
      desktop: launchVehiclePortrait,
      tablet: launchVehicleTablet,
      mobilePortrait: launchVehiclePortrait,
      mobileLandscape: launchVehicleLandscape,
    },
    "Spaceport": {
      desktop: spaceportPortrait,
      tablet: spacePortTablet,
      mobilePortrait: spaceportPortrait,
      mobileLandscape: spaceportLandscape,
    },
    "Space capsule": {
      desktop: capsulePortrait,
      tablet: capsuleTablet,
      mobilePortrait: capsulePortrait,
      mobileLandscape: capsuleLandscape,
    },
  };

  const { desktop, tablet, mobilePortrait, mobileLandscape } =
    images[technology.name];

  return (
    <div className="technology-image" key={technology.name}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source
          media="(max-width: 767px) and (orientation: landscape)"
          srcSet={mobileLandscape}
        />
        <img src={mobilePortrait} alt={technology.name} loading="lazy" />
      </picture>
    </div>
  );
}
