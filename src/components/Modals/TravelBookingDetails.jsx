import React from "react";
import { Input, Select } from "../Form";

const TravelBookingDetails = ({ register, errors }) => {
  //TODO: Convert the time to A.M. P.M. format before saving it to DB
  return (
    <div className="w-full">
      <Select
        options={["flight", "train", "cab", "others"]}
        label={"Travel Type"}
        {...register("travelType")}
        error={errors.travelType?.message}
      />
      <Input
        label={"Enter Source"}
        {...register("source", { required: "Source is required" })}
        placeholder="Enter Source"
        className="my-4 w-full"
        error={errors.source?.message}
      />
      <Input
        label={"Enter Destination"}
        {...register("destination", { required: "Destination is required" })}
        placeholder="Enter your destination"
        className="my-4 w-full"
        error={errors.destination?.message}
      />
      <Input
        label={"Departure Date"}
        type={"date"}
        {...register("departureDate", {
          required: "Departure Date is required",
        })}
        placeholder="Enter your Departure date"
        className="my-4 w-full"
        error={errors.departureDate?.message}
      />
      <Input
        label={"Departure Time"}
        type={"time"}
        {...register("departureTime", {
          required: "Departure Time is required",
        })}
        placeholder="Enter your Departure Time"
        className="my-4 w-full"
        error={errors.departureTime?.message}
      />
      <Input
        label={"Arrival Date"}
        type={"date"}
        {...register("arrivalDate", {
          required: "Arrival Date is required",
        })}
        placeholder="Enter your Arrival date"
        className="my-4 w-full"
        error={errors.arrivalDate?.message}
      />
      <Input
        label={"Arrival Time"}
        type={"time"}
        {...register("arrivalTime", {
          required: "Arrival Time is required",
        })}
        placeholder="Enter your Arrival Time"
        className="my-4 w-full"
        error={errors.arrivalTime?.message}
      />
    </div>
  );
};

export default TravelBookingDetails;
