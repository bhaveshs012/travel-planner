import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Button, Select } from "../Form";
import { useForm } from "react-hook-form";
import { Input } from "../Form";
import TravelBookingDetails from "./TravelBookingDetails";
import HotelBookingDetails from "./HotelBookingDetails";
import { convertToTimeFormat } from "../../utils/convertTimeFormat";
import apiClient from "../../api/apiClient";

const AddBookingModal = forwardRef(({ tripId }, ref) => {
  const dialogRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
    } = useForm({
      defaultValues: {
        bookingType: "Travel",
      },
    });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("tripId", tripId);
    formData.append("bookingType", data.bookingType.toLowerCase());
    formData.append("bookingReceipt", data.bookingReceipt[0]);

    const bookingDetails = {};
    if (data.bookingType == "Hotel") {
      bookingDetails.hotelName = data.hotelName;
      bookingDetails.location = data.location;
      bookingDetails.checkInDate = data.checkInDate;
      bookingDetails.checkoutDate = data.checkoutDate;
    } else {
      bookingDetails.travelType = data.travelType;
      bookingDetails.source = data.source;
      bookingDetails.destination = data.destination;
      bookingDetails.departureDate = data.departureDate;
      bookingDetails.departureTime = convertToTimeFormat(data.departureTime);
      bookingDetails.arrivalDate = data.arrivalDate;
      bookingDetails.arrivalTime = convertToTimeFormat(data.arrivalTime);
    }
    formData.append("bookingDetails", JSON.stringify(bookingDetails));

    try {
      const response = await apiClient.post("/bookings/addBooking", formData);
      console.log(response.data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      reset();
      dialogRef.current.close();
      setIsLoading(false);
    }
  };

  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  if (error !== "") return <div>Error :: {error}</div>;

  return (
    <dialog ref={dialogRef} className="w-1/2 h-auto p-6 rounded-lg shadow-lg">
      <div>
        <div className="text-lg font-bold flex justify-between w-full items-center align-middle">
          <div></div>
          <div className="text-center">Add a New Booking</div>
          <div>
            <Button
              className="items-end w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
              type="button"
              onClick={() => dialogRef.current.close()}
              disabled={isLoading} // Disable close button while loading
            >
              Close
            </Button>
          </div>
        </div>
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
          <Input
            label="Booking Receipt"
            placeholder="Add your Booking Details"
            type={"file"}
            className="my-4 w-full"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register("bookingReceipt", {
              required: "Booking Receipt is required",
            })}
            error={errors.bookingReceipt?.message}
          />
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
            disabled={isLoading} // Disable submit button while loading
          >
            {isLoading ? "Adding Booking..." : "Add Booking Details"}
          </Button>
        </form>
      </div>
    </dialog>
  );
});

export default AddBookingModal;
