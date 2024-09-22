import React from "react";
import { Input } from "../Form";
import { useSelector } from "react-redux";

const HotelBookingDetails = ({ register, watch, errors }) => {
  const startDate = useSelector((state) => state.tripPlan.startDate);
  const endDate = useSelector((state) => state.tripPlan.endDate);

  return (
    <div className="w-full">
      <Input
        label={"Hotel Name"}
        {...register("hotelName", { required: "Hotel Name is required" })}
        placeholder="Enter your Hotel name"
        className="my-4 w-full"
        error={errors.hotelName?.message}
      />
      <Input
        label={"Hotel Location"}
        {...register("location", { required: "Hotel Location is required" })}
        placeholder="Enter your hotel location"
        className="my-4 w-full"
        error={errors.location?.message}
      />
      <Input
        label={"Check In Date"}
        type={"date"}
        {...register("checkInDate", {
          required: "Check In Date is required",
          validate: (value) => {
            const inputDate = new Date(value);
            const tripStartDate = new Date(startDate);

            // Set time to midnight for both dates (so only date is compared)
            inputDate.setHours(0, 0, 0, 0);
            tripStartDate.setHours(0, 0, 0, 0);

            return (
              inputDate > tripStartDate ||
              "Check In Date cannot be before the trip start date !!"
            );
          },
        })}
        placeholder="Enter your Check In date"
        className="my-4 w-full"
        error={errors.checkInDate?.message}
      />
      <Input
        label={"Check Out Date"}
        type={"date"}
        {...register("checkoutDate", {
          required: "Check Out Date is required",
          validate: (value) => {
            const inputDate = new Date(value);
            const tripEndDate = new Date(endDate);
            const checkInDate = new Date(watch("checkInDate"));

            // Set time to midnight for both dates (so only date is compared)
            inputDate.setHours(0, 0, 0, 0);
            tripEndDate.setHours(0, 0, 0, 0);
            checkInDate.setHours(0, 0, 0, 0);

            if (inputDate < checkInDate) {
              return "Check Out cannot be done before Check In !!";
            }

            return (
              inputDate < tripEndDate ||
              "Check Out Date cannot be after the trip end date !!"
            );
          },
        })}
        placeholder="Enter your Check Out date"
        className="my-4 w-full"
        error={errors.checkoutDate?.message}
      />
    </div>
  );
};

export default HotelBookingDetails;
