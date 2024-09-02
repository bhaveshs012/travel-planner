import React from "react";
import { Button, Select } from "../Form";
import { useForm } from "react-hook-form";
import TravelBookingDetails from "./TravelBookingDetails";
import HotelBookingDetails from "./HotelBookingDetails";

const AddBookingModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="w-1/3 h-full my-auto mx-auto flex justify-center items-center p-6">
      <form
        className="w-full gap-y-4 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Select
          options={["Travel", "Hotel"]}
          label={"Booking Type"}
          {...register("bookingType")}
        />
        {watch("bookingType") === "Travel" ? (
          <TravelBookingDetails register={register} errors={errors} />
        ) : (
          <HotelBookingDetails register={register} errors={errors} />
        )}
        <Button
          className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
          type="submit"
        >
          Add Booking Details
        </Button>
      </form>
    </div>
  );
};

export default AddBookingModal;
