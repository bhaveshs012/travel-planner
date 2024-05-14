import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-gray-900 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
