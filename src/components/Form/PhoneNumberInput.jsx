import React from "react";

const PhoneNumberInput = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && <label className="block text-md font-bold mb-2">{label}</label>}
      <div className="flex">
        <span className="px-3 py-2 rounded-l-lg border border-gray-300 bg-gray-200 text-gray-700">
          +91
        </span>
        <input
          type="tel"
          pattern="[0-9]{10}"
          inputMode="numeric"
          className="flex-grow px-3 p-4 py-2 rounded-r-lg border border-gray-300 focus:border-black focus:outline-none"
          placeholder="Enter phone number"
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
});

export default PhoneNumberInput;
