import React, { useState, useRef, Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarDays } from "react-icons/fa6";
import { ButtonWithIcon } from "../../../../components/Buttons";

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleButtonClick = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <Fragment>
      <ButtonWithIcon
        title={"Add Trip Dates"}
        icon={<FaRegCalendarDays />}
        onClick={handleButtonClick}
      />
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
