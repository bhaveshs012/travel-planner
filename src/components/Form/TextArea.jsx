import React, { useId } from "react";

const TextArea = React.forwardRef(function Input(
  {
    label,
    rows = 5,
    maxLength = 500,
    type = "text",
    className = "",
    error,
    ...props
  },
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
        <textarea
          ref={ref}
          id={id}
          {...props}
          rows={rows}
          maxLength={maxLength}
          className="w-full min-h-32 max-h-52 px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
        />
        <p className="text-right">{`${maxLength} characters only`}</p>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </>
  );
});

export default TextArea;
