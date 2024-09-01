import React from "react";
import { Input, Button, TextArea } from "../../../components/Form";
import { DateRangeSelector } from "../../../components";
import { FaUserPlus } from "react-icons/fa6";

function CreatePlanStarterPage() {
  return (
    <div className="h-svh p-8 space-y-8 flex flex-col justify-center items-center">
      <p className="text-3xl font-bold">Plan a New Trip</p>
      <div className="w-2/4">
        <Input label="Trip Name" placeholder="Give this trip a name ..." />
      </div>
      <div className="w-2/4">
        <TextArea
          label="Trip Description"
          placeholder="Add a short description for the trip !!"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <h2 className="text-md font-bold text-black">Select Trip Dates</h2>
        <DateRangeSelector />
      </div>
      <div className="flex w-1/2 items-center space-x-4">
        <FaUserPlus className="text-gray-500 h-6 w-6" />
        <p className="text-md text-gray-500 cursor-pointer font-medium">
          Invite Tripmates
        </p>
      </div>
      <div className="w-1/2">
        <Button>Let's Start Planning !!</Button>
      </div>
    </div>
  );
}

export default CreatePlanStarterPage;
