import React, { useState, useEffect, useRef } from "react";
import { PhotoGridView, VideoGridView, TripGridView } from "./index";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeIndex = ["photos", "videos", "trips"].indexOf(activeTab);
    if (tabsRef.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = tabsRef.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "photos":
        return <PhotoGridView />;
      case "videos":
        return <VideoGridView />;
      case "trips":
        return <TripGridView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full mt-8 flex flex-col items-center justify-start">
      <div className="w-full max-w-lg">
        <nav className="relative mb-4">
          <ul className="flex justify-between border-gray-300 relative overflow-x-auto">
            {["photos", "videos", "trips"].map((tab, index) => (
              <li
                key={tab}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`cursor-pointer ${
                  activeTab === tab
                    ? "text-black font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            ))}
            <div
              className="absolute bottom-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out"
              style={indicatorStyle}
            />
          </ul>
        </nav>
      </div>
      <div className="bg-white rounded shadow w-full">
        <div className="border-t border-gray-300">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Tabs;
