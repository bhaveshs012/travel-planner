import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Button, Select, Input } from "../Form";
import { useForm } from "react-hook-form";
import MainComponent from "../UserSearchBar/MainComponent";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiClient from "../../api/apiClient";

const AddTransactionModal = forwardRef(({ tripId }, ref) => {
  //* States
  const [isLoading, setIsLoading] = useState(false);

  //* Redux States
  const splitBetween = useSelector((state) => state.splitBetween);

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
  } = useForm();

  const onSubmit = async (data) => {
    if (splitBetween.length === 0) {
      toast.error("Select Atleast one member for split !!");
      return;
    }
    const finalData = {
      ...data,
      splitBetween: splitBetween.map((user) => user.userId),
    };
    try {
      const response = await apiClient.post(
        `/expenses/${tripId}/addExpense`,
        finalData
      );
      dialogRef.current.close();
    } catch (error) {
      toast.error(error.message);
    }
  };

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
              "Accommodation",
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
              required: "Description is required",
            })}
            error={errors.description?.message}
          />
          <div className="flex flex-row gap-x-8 w-full justify-center">
            <Input
              label="Amount"
              placeholder="Enter the Payment Amount"
              className="my-4 w-full"
              {...register("amount", {
                required: "Payment Amount is required",
                validate: (value) =>
                  value > 0 || "Payment Amount should be greater than zero !!",
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
                validate: (value) =>
                  value <= new Date() ||
                  "Payment Date cannot be greater than today !!",
              })}
              error={errors.paymentDate?.message}
            />
          </div>
          <MainComponent onClick={(e) => e.preventDefault()} />
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
