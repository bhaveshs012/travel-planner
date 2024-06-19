import React from "react";

function PageHeader({ title, subtitle, className }) {
  return (
    <div className={className}>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-md text-gray-600 text-pretty">{subtitle}</p>
    </div>
  );
}

export default PageHeader;
