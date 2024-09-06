import React from "react";
import TripMemberTag from "./TripMemberTag";
import { useSelector } from "react-redux";

function TripMembersDisplay() {
  const splitBetween = useSelector((state) => state.splitBetween);

  return (
    <div className="flex  w-full flex-wrap gap-4 justify-center bg-gray-50 p-4 rounded-lg">
      {splitBetween.map((user, index) => {
        return <TripMemberTag key={index} user={user} />;
      })}
    </div>
  );
}

export default TripMembersDisplay;
