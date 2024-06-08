import React from "react";

function SectionHeading({ title, subtile }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-md text-gray-400 mt-2">{subtile}</p>
    </div>
  );
}

export default SectionHeading;
