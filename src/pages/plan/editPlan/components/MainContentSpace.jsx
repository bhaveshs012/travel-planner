import React from "react";
import {
  HeroSection,
  ItinerarySection,
  NotesSection,
  BudgetSection,
} from "./index";

function MainContentSpace() {
  return (
    <div className="h-screen">
      <HeroSection />
      <div className="grid gap-y-8 h-auto p-6">
        <NotesSection />
        <ItinerarySection />
        <BudgetSection />
      </div>
    </div>
  );
}

export default MainContentSpace;
