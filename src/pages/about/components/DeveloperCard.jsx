import React from "react";

function DeveloperCard({ name, role }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
      <p className="text-gray-700 text-center">{role}</p>
    </div>
  );
}

export default DeveloperCard;
