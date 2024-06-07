import React, { useState, useRef, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarDays } from "react-icons/fa6";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleButtonClick = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <Fragment>
      <button
        onClick={handleButtonClick}
        className="p-2 mx-auto flex gap-2 bg-black text-white rounded-lg"
      >
        <span>
          <FaRegCalendarDays />
        </span>
        <span className="text-sm font-semibold">Add Trip Dates</span>
      </button>
      <DatePicker
        ref={datePickerRef}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        className="hidden"
      />
    </Fragment>
  );
}

export default DatePickerComponent;
