import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref //* Reference bhi pass krenge
) {
  const id = useId();
  return (
    <>
      <div className={className}>
        {label && (
          <label className="block text-sm font-bold mb-2" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </>
  );
});

export default Input;
