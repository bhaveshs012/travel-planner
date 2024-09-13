import React from "react";
import { Input } from "../Form";

const HotelBookingDetails = ({ register, errors }) => {
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
        {...register("checkInDate", { required: "Check In Date is required" })}
        placeholder="Enter your Check In date"
        className="my-4 w-full"
        error={errors.checkInDate?.message}
      />
      <Input
        label={"Check Out Date"}
        type={"date"}
        {...register("checkoutDate", {
          required: "Check Out Date is required",
        })}
        placeholder="Enter your Check Out date"
        className="my-4 w-full"
        error={errors.checkoutDate?.message}
      />
    </div>
  );
};

export default HotelBookingDetails;
