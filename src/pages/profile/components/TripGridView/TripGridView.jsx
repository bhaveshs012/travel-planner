import React from "react";
import { TripSummaryCard } from "../../../../components/index";
const TripGridView = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8  gap-4 mt-4">
        <TripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          amount="2,00,000"
          days={5}
          nights={4}
          description="HongKong is the greatest place to go during vacations"
          title="HongKong"
          people={4}
        />
        <TripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          amount="2,00,000"
          days={5}
          nights={4}
          description="HongKong is the greatest place to go during vacations"
          title="HongKong"
          people={4}
        />
        <TripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          amount="2,00,000"
          days={5}
          nights={4}
          description="HongKong is the greatest place to go during vacations"
          title="HongKong"
          people={4}
        />
        <TripSummaryCard
          image={
            "https://images.unsplash.com/photo-1545580492-8859ba8323f0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          amount="2,00,000"
          days={5}
          nights={4}
          description="HongKong is the greatest place to go during vacations"
          title="HongKong"
          people={4}
        />
      </div>
    </div>
  );
};

export default TripGridView;
