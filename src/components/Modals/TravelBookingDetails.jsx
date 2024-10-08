import React from "react";
import { Input, Select } from "../Form";
import { useSelector } from "react-redux";

const TravelBookingDetails = ({ register, errors }) => {
  const startDate = useSelector((state) => state.tripPlan.startDate);
  const endDate = useSelector((state) => state.tripPlan.endDate);

  return (
    <div className="w-full">
      <Select
        options={["flight", "train", "cab", "others"]}
        label={"Travel Type"}
        {...register("travelType")}
        error={errors.travelType?.message}
      />
      <div className="flex flex-row gap-x-8 w-full justify-center">
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
      </div>
      <div className="flex flex-row gap-x-8 w-full justify-center">
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
      </div>
      <div className="flex flex-row gap-x-8 w-full justify-center">
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
    </div>
  );
};

export default TravelBookingDetails;
