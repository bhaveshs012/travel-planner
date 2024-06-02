import React from "react";

function SmallFilledButton({ title }) {
  return (
    <button className="bg-black py-3 px-6 flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 rounded-lg hover:bg-gray-900">
      <span className="text-white font-semibold text-sm">{title}</span>
    </button>
  );
}

export default SmallFilledButton;
