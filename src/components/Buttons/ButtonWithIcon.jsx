import React from "react";

function ButtonWithIcon({
  title,
  icon,
  bgColor = "bg-black",
  textColor = "text-white",
  className,
  ...props
}) {
  return (
    <button
      className={`my-1 flex justify-center items-center space-x-2 ${bgColor} ${className} ${textColor} px-3 py-2.5 rounded-lg`}
      {...props}
    >
      <span>{icon}</span>
      <span className="text-sm font-semibold">{title}</span>
    </button>
  );
}

export default ButtonWithIcon;
