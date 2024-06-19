import React from "react";
import TextArea from "../../../../components/Form/TextArea";
import { SectionHeading } from "./index";

function NotesSection() {
  return (
    <section>
      <SectionHeading
        title={"Notes"}
        subtile={
          " You can make a note of important instructions or precautions to be followed..."
        }
      />
      <TextArea maxLength={2000} />
    </section>
  );
}

export default NotesSection;
