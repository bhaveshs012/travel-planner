import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function FilterModal({ isOpen, onClose }) {
  const [category, setCategory] = useState("");
  const [paidBy, setPaidBy] = useState("");

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePaidByChange = (e) => setPaidBy(e.target.value);

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <FaTimes />
        </button>
        <h2 className="text-lg font-semibold text-center mb-4">Filters</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-bold mb-2">Category</p>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center ${
                  category === "food" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="food"
                  checked={category === "food"}
                  onChange={handleCategoryChange}
                  className="mr-2 accent-black"
                />
                Food
              </label>
              <label
                className={`flex items-center ${
                  category === "travel" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="travel"
                  checked={category === "travel"}
                  onChange={handleCategoryChange}
                  className="mr-2 accent-black"
                />
                Travel
              </label>
              <label
                className={`flex items-center ${
                  category === "hotel" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="hotel"
                  checked={category === "hotel"}
                  onChange={handleCategoryChange}
                  className="mr-2 accent-black"
                />
                Hotel
              </label>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold mb-2">Paid By</p>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center ${
                  paidBy === "mate1" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="mate1"
                  checked={paidBy === "mate1"}
                  onChange={handlePaidByChange}
                  className="mr-2 accent-black"
                />
                Mate 1
              </label>
              <label
                className={`flex items-center ${
                  paidBy === "mate2" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="mate2"
                  checked={paidBy === "mate2"}
                  onChange={handlePaidByChange}
                  className="mr-2 accent-black"
                />
                Mate 2
              </label>
              <label
                className={`flex items-center ${
                  paidBy === "mate3" ? "text-black" : ""
                }`}
              >
                <input
                  type="radio"
                  value="mate3"
                  checked={paidBy === "mate3"}
                  onChange={handlePaidByChange}
                  className="mr-2 accent-black"
                />
                Mate 3
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-black font-medium text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default FilterModal;
