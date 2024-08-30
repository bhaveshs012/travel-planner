import React from "react";
import UpcomingTripSummaryCard from "./UpcomingTripSummaryCard";

const UpcomingTripSection = () => {
  return (
    <div className="space-y-2">
      <div>
        <h1 className="text-xl font-bold">{"Your Upcoming Trips"}</h1>
      </div>
      <div>
        <UpcomingTripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          amount="2,00,000"
          days={5}
          nights={4}
          tripStartDate={new Date("2024-09-21")}
          description="HongKong is the greatest place to go during vacations"
          title="HongKong"
          people={4}
        />
      </div>
    </div>
  );
};

export default UpcomingTripSection;
