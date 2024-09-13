import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { TextArea, Button } from "../Form";
import { FaXmark } from "react-icons/fa6";
import { setItineraryItemNote } from "../../features/tripPlanSlice";

const ItineraryNotesModal = forwardRef(({ index }, ref) => {
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  //* Redux
  const notes = useSelector((state) => state.tripPlan.itinerary[index].notes);
  const dispatch = useDispatch();

  //* React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      notes: notes,
    },
  });

  const onSubmit = async (data) => {
    dispatch(setItineraryItemNote(index, notes));
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
          <div className="text-center">Add Notes</div>
        </div>
        <form
          className="w-full gap-y-4 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextArea
            placeholder="Add some notes !!"
            className="my-4 "
            {...register("notes", {})}
            error={errors?.notes?.message}
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

export default ItineraryNotesModal;
