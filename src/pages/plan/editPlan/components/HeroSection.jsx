import React from "react";
import {
  FaRegCalendarDays,
  FaPersonCirclePlus,
  FaPencil,
} from "react-icons/fa6";
import { ButtonWithIcon } from "../../../../components/Buttons";

function HeroSection() {
  return (
    <div className="relative h-auto w-full">
      <div className="h-auto w-full">
        <img
          src="https://i.natgeofe.com/n/8eba070d-14e5-4d07-8bab-9db774029063/93080.jpg?w=718&h=538"
          alt="Taj Mahal"
          className="w-full h-64 object-fill"
        />
        <div className="absolute top-2 right-2 flex w-fit h-fit rounded-full p-4 bg-white bg-opacity-80 text-black">
          <FaPencil />
        </div>
      </div>
      <div className="relative top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mx-4 -mt-10">
        <h1 className="text-3xl font-bold mb-4">Exploring The North</h1>
        <p className="text-sm font-medium mb-4 text-gray-400">
          North India is home to the mighty Himalayas, thus offering numerous
          exciting trekking trails in the valleys.
        </p>
        <div className="flex justify-between space-x-2">
          <div>
            <ButtonWithIcon
              title={"Add Trip Dates"}
              icon={<FaRegCalendarDays />}
              textColor="text-gray-800"
              bgColor="bg-gray-200"
            />
          </div>
          <div className="my-1 flex justify-center items-center space-x-2">
            <button className="bg-gray-200 text-gray-800 p-2 rounded-full">
              <span>
                <FaPersonCirclePlus />
              </span>
            </button>
            <button className="bg-gray-200 text-gray-800 p-2 rounded-lg">
              <span className="text-xs font-semibold">View Trip Mates</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
