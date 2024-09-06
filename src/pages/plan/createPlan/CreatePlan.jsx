import React, { useRef, useState } from "react";
import { Input, Button, TextArea } from "../../../components/Form";
import { FaUserPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setInitialData } from "../../../features/tripPlanSlice";
import { InviteUserModal } from "../../../components/index";

function CreatePlanStarterPage() {
  //* React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      startDate: new Date().toLocaleString("en-US", {
        year: "numeric", // e.g., "2024"
        month: "short", // e.g., "August"
        day: "numeric", // e.g., "31"
      }),
      endDate: new Date().toLocaleString("en-US", {
        year: "numeric", // e.g., "2024"
        month: "short", // e.g., "August"
        day: "numeric", // e.g., "31"
      }),
    },
  });

  //* For Modal
  const inviteUserModalRef = useRef(null);
  const handleOpenModal = (e) => {
    e.preventDefault();
    inviteUserModalRef.current.openModal();
  };
  //* Redux ::
  const dispatch = useDispatch();
  const tripMembers = useSelector((state) => state.tripPlan.tripMembers);

  //* For Loaders:
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = ({ tripName, tripDesc, startDate, endDate }) => {
    dispatch(
      setInitialData({
        tripName: tripName,
        tripDesc: tripDesc,
        startDate: startDate,
        endDate: endDate,
      })
    );
    console.log("Form Data: ", data);
  };

  return (
    <>
      <InviteUserModal ref={inviteUserModalRef} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-svh p-8 space-y-4 flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">Plan a New Trip</p>
          <div className="w-2/4">
            <Input
              label="Trip Name"
              placeholder="Give your trip a memorable name !!"
              className="my-4 w-full"
              {...register("tripName", { required: "Trip name is required" })}
              error={errors.tripName?.message}
            />
          </div>
          <div className="w-2/4">
            <TextArea
              label="Trip Description"
              placeholder="Add a short description for the trip !!"
              className="my-4 w-full"
              {...register("tripDesc", {
                required: "Trip Description is required",
              })}
              error={errors.tripDesc?.message}
            />
          </div>
          <div className="flex space-x-4 mt-2 w-1/2">
            <Input
              label="Start Date"
              placeholder="Enter the Start Date !!"
              type={"date"}
              className="my-4 w-full"
              {...register("startDate", {
                required: "Start Date is required",
                validate: (value) => {
                  return (
                    value >= new Date() ||
                    "Start Date cannot be before today !!"
                  );
                },
              })}
              error={errors.startDate?.message}
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
              error={errors.endDate?.message}
            />
          </div>

          <button
            onClick={(e) => handleOpenModal(e)}
            className="flex w-1/2 items-center justify-items-stretch space-x-4 text-black"
          >
            <div className="flex space-x-4">
              <FaUserPlus className="text-gray-500 h-6 w-6" />
              <p className="text-md text-gray-500 cursor-pointer font-medium">
                Invite Tripmates
              </p>
            </div>
            <div className="text-end bg-black text-white rounded-full p-2 h-5 w-5 flex justify-center items-center">
              <p>{tripMembers.length}</p>
            </div>
          </button>
          <div className="w-1/2">
            <Button type="submit">Let's Start Planning !!</Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreatePlanStarterPage;
