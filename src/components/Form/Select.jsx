import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { label, options, className = "", error, ...props },
  ref
) {
  const id = useId(); // Unique ID for the select element

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-md font-bold mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        className={`w-full px-3 py-2 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:border-black focus:outline-none`}
        ref={ref}
        id={id}
        {...props}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

export default Select;
