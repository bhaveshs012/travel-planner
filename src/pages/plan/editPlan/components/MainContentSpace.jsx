import React from "react";
import {
  HeroSection,
  ItinerarySection,
  NotesSection,
  BudgetSection,
} from "./index";

export const overviewSectionRef = React.createRef();
export const notesSectionRef = React.createRef();
export const itinerarySectionRef = React.createRef();
export const budgetSectionRef = React.createRef();
function MainContentSpace() {
  return (
    <div className="h-screen">
      <HeroSection ref={overviewSectionRef} />
      <div className="grid gap-y-8 h-auto p-6">
        <NotesSection ref={notesSectionRef} />
        <ItinerarySection ref={itinerarySectionRef} />
        <BudgetSection ref={budgetSectionRef} />
      </div>
    </div>
  );
}

export default MainContentSpace;
