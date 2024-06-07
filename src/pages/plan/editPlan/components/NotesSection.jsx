import React from "react";
import TextArea from "../../../../components/Form/TextArea";

function NotesSection() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Notes</h1>
      <p className="text-md text-gray-400 mt-2">
        You can make a note of important instructions or precautions to be
        followed..
      </p>
      <TextArea maxLength={2000} />
    </section>
  );
}

export default NotesSection;
