import React, { useState } from "react";

const VideoGridView = ({ videos, title }) => {
  const [playing, setPlaying] = useState({});

  const handleClick = (index) => {
    setPlaying((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="h-full">
      <div className="flex justify-between px-4 text-sm font-semibold w-full sticky top-0 z-10">
        <div>{title}</div>
        <div className="underline text-blue-400 cursor-pointer">View More</div>
      </div>
      <div className="overflow-x-scroll flex space-x-4 p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden flex-shrink-0"
            style={{ width: "300px", height: "200px" }}
            onClick={() => handleClick(index)}
          >
            {playing[index] ? (
              <video
                src={video.url}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <>
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <i className="fas fa-play text-white text-4xl"></i>
                </div>
                <div className="absolute top-2 right-2 flex items-center bg-gray-800 bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                  <i className="fas fa-heart mr-1 text-red-500"></i>
                  <span>{video.likes}</span>
                </div>
              </>
            )}
          </div>
        ))}
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
