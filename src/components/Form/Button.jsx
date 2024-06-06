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
      className={`w-full py-2 px-4 bg-black text-white font-bold rounded focus:outline-none hover:bg-gray-900 ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
