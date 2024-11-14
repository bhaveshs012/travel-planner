import React, { useRef } from "react";
import { FaNoteSticky } from "react-icons/fa6";
import { Input } from "../../../../components/Form/index";
import { FaListCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setItineraryItemPlaceToVisit } from "../../../../features/tripPlanSlice";
import ItineraryNotesModal from "../../../../components/Modals/ItineraryNotesModal";

function ItineraryListItem({ itineraryItem, index }) {
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    e.preventDefault();
    dispatch(
      setItineraryItemPlaceToVisit({ placeToVisit: e.target.value, index })
    );
  };

  const itineraryNotesModalRef = useRef(null);
  const handleOpenModal = () => {
    itineraryNotesModalRef.current.openModal();
  };

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <ItineraryNotesModal ref={itineraryNotesModalRef} index={index} />
      <div className="flex items-center">
        <div className="flex-auto">
          <h1 className="text-xl font-bold">
            {new Date(itineraryItem.date).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric", // e.g., "2024"
              month: "short", // e.g., "August"
              day: "numeric", // e.g., "31"
            })}
          </h1>
        </div>
        <div>
          <div className="container flex gap-x-4">
            <button
              title="Add a Note"
              className="rounded-full p-4 bg-gray-300"
              onClick={handleOpenModal}
            >
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
      <div className="w-full items-center">
        <div className="flex-auto">
          <Input
            placeholder="Add a Place"
            value={itineraryItem.placeToVisit}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default ItineraryListItem;
