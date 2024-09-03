import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Button, Select } from "../Form";
import { useForm } from "react-hook-form";
import { Input } from "../Form";

const AddTransactionModal = forwardRef(({ tripId }, ref) => {
  //* States
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useImperativeHandle(ref, () => ({
    openModal: () => dialogRef.current.showModal(),
    closeModal: () => dialogRef.current.close(),
  }));

  //* Form Setup
  const dialogRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  if (error !== "") return <div>Error :: {error}</div>;

  return (
    <dialog ref={dialogRef} className="w-1/2 h-auto p-6 rounded-lg shadow-lg">
      <div>
        <div className="text-lg font-bold flex justify-between w-full items-center align-middle">
          <div></div>
          <div className="text-center">Add a New Transaction</div>
          <div>
            <Button
              className="items-end w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900"
              type="button"
              onClick={() => dialogRef.current.close()}
              disabled={isLoading}
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
            options={[
              "Travel",
              "Food",
              "Accomodation",
              "Entertainment",
              "Miscellaneous",
              "Others",
            ]}
            label={"Expense Category"}
            {...register("category")}
            error={errors.category?.message}
          />
          <Input
            label="Paid To"
            placeholder="Payment done to ..."
            className="my-4 w-full"
            {...register("paidTo", {
              required: "Payment Details are required",
            })}
            error={errors.paidTo?.message}
          />
          <Input
            label="Description"
            placeholder="Enter a short description"
            className="my-4 w-full"
            {...register("description", {
              required: "Payment Details are required",
            })}
            error={errors.description?.message}
          />
          <div className="flex flex-row gap-x-8 w-full justify-center">
            <Input
              label="Amount"
              placeholder="Enter the Payment Amount"
              className="my-4 w-full"
              {...register("amount", {
                required: "Payment Details are required",
              })}
              error={errors.amount?.message}
            />
            <Input
              label="Payment Date"
              placeholder="Enter the Payment Date"
              className="my-4 w-full"
              type={"date"}
              {...register("paymentDate", {
                required: "Payment Date is required",
              })}
              error={errors.paymentDate?.message}
            />
          </div>
          <Button
            className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-900 disabled:bg-slate-300"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Adding Transaction..." : "Add Transaction Details"}
          </Button>
        </form>
      </div>
    </dialog>
  );
});

export default AddTransactionModal;
