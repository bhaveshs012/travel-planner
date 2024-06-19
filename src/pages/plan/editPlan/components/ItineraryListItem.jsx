import React from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { Input } from "../../../../components/Form/index";
import { FaListCheck } from "react-icons/fa6";

function ItineraryListItem() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center">
        <div className="flex-auto">
          <h1 className="text-xl font-bold">Monday, 1st June</h1>
          <p className="text-sm text-gray-400 mt-2">Add a Subheading</p>
        </div>
        <div>
          <div className="container flex gap-x-4">
            <button title="Add a Note" className="rounded-full p-4 bg-gray-300">
              <FaNoteSticky className="text-gray-600" />
            </button>
            <button
              title="Add a Checklist"
              className="rounded-full p-4 bg-gray-300"
            >
              <FaListCheck className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-items-end ">
        <div className="flex-auto">
          <Input placeholder="Add a Place" />
        </div>
      </div>
    </div>
  );
}

export default ItineraryListItem;
