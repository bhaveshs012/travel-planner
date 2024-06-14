import React from "react";
import HeroSection from "./components/HeroSection";
import { PageHeader } from "../../components/index";

function Discover() {
  const topVisitedPlace = "Kashmir";
  return (
    <div className="flex flex-col justify-center p-8 gap-y-8 w-full h-full">
      <HeroSection />

      <PageHeader
        className={"mt-12"}
        title={`Top Itineraries for ${topVisitedPlace}`}
        subtitle={"Handpicked Itineraries for you !!"}
      />
      {/* Display the Cards Here */}
    </div>
  );
}

export default Discover;
