import React from "react";

const Details = ({ content, icon, boldText = false }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-lg px-1 py-1 text-sm font-normal text-gray-700 mr-2">
      <div className="flex py-2 px-2 text-center">
        {icon && <div className="content-center mr-2">{icon}</div>}
        {content && (
          <p className={`text-center ${boldText ? "font-semibold" : ""}`}>
            {content}
          </p>
        )}
      </div>
    </span>
  );
};

export default Details;
