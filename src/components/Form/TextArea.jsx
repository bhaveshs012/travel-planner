import React, { useId } from "react";

const TextArea = ({ name, label, placeholder, maxLength = 500, rows = 5 }) => {
  const id = useId();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-md font-bold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full min-h-32 max-h-52 px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
      />
      <div className="text-sm text-right text-gray-500">
        {maxLength} characters maximum
      </div>
    </div>
  );
};

export default TextArea;
