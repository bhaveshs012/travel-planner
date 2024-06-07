import React, { useState } from "react";

const VideoGridView = ({ videos, title }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between px-4 text-sm font-semibold w-full sticky top-0 z-10 text-white">
          <div>{title}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-transform duration-300 ${
                hoveredIndex === index ? "transform scale-110" : ""
              }`}
              style={{ width: "100%", height: "200px" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredIndex === index ? (
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const generateRandomVideos = (count) => {
  const videos = [];
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const likes = Math.floor(Math.random() * 100); // Generate random likes count
    const url = `https://samplelib.com/lib/preview/mp4/sample-5s.mp4`; // Placeholder video URL, replace with actual video URLs
    const thumbnail = `https://picsum.photos/300/200?random=${id}`; // Placeholder thumbnail URL, replace with actual thumbnail URLs
    videos.push({ id, url, thumbnail, likes });
  }
  return videos;
};

const App = ({ title }) => {
  const videos = generateRandomVideos(12); // Change the count as needed
  return <VideoGridView title={title} videos={videos} />;
};

export default App;
