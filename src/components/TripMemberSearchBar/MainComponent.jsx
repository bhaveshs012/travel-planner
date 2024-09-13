import React, { useState } from "react";
import TripMembersDisplay from "./TripMembersDisplay";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import useDebounce from "../../hooks/useDebounce";

const MainComponent = ({ tripId = "66c0fb22564716f8e4c55f9f" }) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  return (
    <div className="p-6">
      <div className="flex flex-col h-full w-full justify-center items-center space-y-6">
        <p className="text-md underline font-bold text-center">
          Expense Split Between
        </p>
        <TripMembersDisplay />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <SearchList searchTerm={debouncedValue} tripId={tripId} />
      </div>
    </div>
  );
};

export default MainComponent;
