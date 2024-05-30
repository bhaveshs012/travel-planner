import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="m-4">
      <DatePicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
          console.log(start, end);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        useWeekdaysShort={true}
        inline
        minDate={new Date()}
        calendarClassName="rounded-lg shadow-md bg-white"
      />
    </div>
  );
};

export default Calendar;
