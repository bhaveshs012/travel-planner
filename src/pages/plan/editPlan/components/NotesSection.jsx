import React from "react";
import TextArea from "../../../../components/Form/TextArea";
import { SectionHeading } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { setNotes } from "../../../../features/tripPlanSlice";

const NotesSection = React.forwardRef(({ props }, ref) => {
  //* Redux ::
  const tripPlan = useSelector((state) => state.tripPlan);
  const dispatch = useDispatch();

  //* Updating the state
  const handleChange = (e) => {
    dispatch(setNotes(e.target.value));
  };

  return (
    <section ref={ref} {...props}>
      <SectionHeading
        title={"Notes"}
        subtile={
          " You can make a note of important instructions or precautions to be followed..."
        }
      />
      <TextArea
        maxLength={2000}
        onChange={handleChange}
        value={tripPlan.notes}
      />
    </section>
  );
});

export default NotesSection;
