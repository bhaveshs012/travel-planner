import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "../Form";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import {
  setEndDate,
  setStartDate,
  shiftItinerary,
} from "../../features/tripPlanSlice";
import formatDate from "../../utils/formatDateForInput";

const ChangeTripDatesModal = forwardRef(({}, ref) => {
  const dialogRef = useRef(null);

  const { startDate, endDate } = useSelector((state) => state.tripPlan);

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  //* React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("startDate", formatDate(startDate));
    setValue("endDate", formatDate(endDate));

    return () => {};
  }, [startDate, endDate]);

  const onSubmit = async (data) => {
    dispatch(setStartDate(new Date(data.startDate)));
    dispatch(setEndDate(new Date(data.endDate)));
    dispatch(shiftItinerary());
    dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-1/2 h-1/2 gap-y-6 p-6 rounded-lg shadow-lg"
    >
      <div>
        <div className="flex justify-end">
          <FaXmark onClick={() => dialogRef.current.close()} />
        </div>
        <div className="flex text-lg font-bold w-full items-center">
          <div className="text-center">Change Trip Dates</div>
        </div>
        <form
          className="w-full gap-y-4 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-4 mt-2 w-1/2">
            <Input
              label="Start Date"
              placeholder="Enter the Start Date !!"
              type={"date"}
              className="my-4 w-full"
              {...register("startDate", {
                required: "Start Date is required",
                validate: (value) => {
                  if (value < new Date()) {
                    return "Start Date should be greater than today !!";
                  }
                },
              })}
              error={errors?.startDate?.message}
            />
            <Input
              label="End Date"
              type={"date"}
              placeholder="Enter the End Date !!"
              className="my-4 w-full"
              {...register("endDate", {
                required: "End Date is required",
                validate: (value) => {
                  if (value < new Date())
                    return "End Date should be greater than today !!";
                  if (value <= watch("startDate")) {
                    return "End Date should be greater than start date !!";
                  }
                },
              })}
              error={errors?.endDate?.message}
            />
          </div>

          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
          >
            Change Trip Dates
          </Button>
        </form>
      </div>
    </dialog>
  );
});

export default ChangeTripDatesModal;
