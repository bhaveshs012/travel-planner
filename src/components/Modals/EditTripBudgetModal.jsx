import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input } from "../Form";
import { FaXmark } from "react-icons/fa6";
import { setPlannedBudget } from "../../features/tripPlanSlice";

const EditTripBudgetModal = forwardRef(({ index }, ref) => {
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  //* Redux
  const plannedBudget = useSelector((state) => state.tripPlan.plannedBudget);
  const dispatch = useDispatch();

  //* React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      plannedBudget: plannedBudget,
    },
  });

  const onSubmit = async (data) => {
    dispatch(setPlannedBudget(data.plannedBudget));
    dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="w-1/2 h-1/3 gap-y-6 p-6 rounded-lg shadow-lg"
    >
      <div>
        <div className="flex justify-end">
          <FaXmark onClick={() => dialogRef.current.close()} />
        </div>
        <div className="flex text-lg font-bold w-full items-center">
          <div className="text-center">Set Budget For the Trip</div>
        </div>
        <form
          className="w-full gap-y-4 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Set the Budget !!"
            className="my-4 "
            type="number"
            {...register("plannedBudget")}
            error={errors?.plannedBudget?.message}
          />

          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
          >
            Save
          </Button>
        </form>
      </div>
    </dialog>
  );
});

export default EditTripBudgetModal;
