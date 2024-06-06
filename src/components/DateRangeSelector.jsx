import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex space-x-4 mt-2">
      <div className="flex w-full flex-col">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
          dateFormat="dd/MM/yyyy"
          className="p-2 w-full rounded-lg border border-gray-300 focus:border-black focus:outline-none text-black bg-white"
        />
      </div>
      <div className="flex flex-col w-full">
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
          className="p-2 w-full rounded-lg border border-gray-300 focus:border-black focus:outline-none text-black bg-white"
        />
      </div>
    </div>
  );
};

export default DateRangeSelector;
