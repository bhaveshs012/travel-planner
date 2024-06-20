import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error, ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className={className}>
        {label && (
          <label className="block text-md font-bold mb-2" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`w-full px-3 py-2 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:border-black focus:outline-none`}
          ref={ref}
          id={id}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </>
  );
});

export default Input;
