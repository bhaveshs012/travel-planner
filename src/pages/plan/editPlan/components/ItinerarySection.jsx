import React, { useEffect, useRef } from "react";
import { ItineraryListItem, SectionHeading } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { ButtonWithIcon } from "../../../../components/Buttons";
import { FaRegCalendarDays } from "react-icons/fa6";
import ChangeTripDatesModal from "../../../../components/Modals/ChangeTripDatesModal";
import { setInitialItinerary } from "../../../../features/tripPlanSlice";

function ItinerarySection() {
  const itineraryList = useSelector((state) => state.tripPlan.itinerary);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itineraryList.length === 0) {
      dispatch(setInitialItinerary());
    }

    return () => {};
  }, [itineraryList]);

  const changeTripDatesModalRef = useRef(null);

  const handleOpenModal = () => {
    changeTripDatesModalRef.current.openModal();
  };

  return (
    <section className="grid gap-y-8">
      <ChangeTripDatesModal ref={changeTripDatesModalRef} />
      <div className="flex justify-between items-center">
        <SectionHeading
          title={"Itinerary"}
          subtile={"Create your itinerary for each date of your trip..."}
        />
        <div className="flex">
          <ButtonWithIcon
            title={"Add Trip Dates"}
            icon={<FaRegCalendarDays />}
            onClick={handleOpenModal}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {itineraryList.map((itineraryItem, index) => {
          return (
            <ItineraryListItem
              itineraryItem={itineraryItem}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItinerarySection;
