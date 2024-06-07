import React from "react";
import { MainContentSpace } from "./components";

function EditPlan() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/4 bg-blue-100">Sidebar</div>
      <div className="w-3/4">
        <MainContentSpace />
      </div>
    </div>
  );
}

export default EditPlan;
