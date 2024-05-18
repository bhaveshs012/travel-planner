import React, { useState } from "react";

const VideoGridView = ({ videos }) => {
  const [playing, setPlaying] = useState({});

  const handleClick = (index) => {
    setPlaying((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="overflow-y-scroll h-full">
      <div className="flex justify-between px-4 text-sm font-semibold">
        <div>Videos</div>
        <div className="underline text-blue-400">View More</div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden cursor-pointer"
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
  );
};

const generateRandomVideos = (count) => {
  const videos = [];
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const thumbnail = `https://source.unsplash.com/random/800x600?sig=${id}`;
    const url = `https://samplelib.com/lib/preview/mp4/sample-5s.mp4`; // Placeholder video URL, replace with actual video URLs
    videos.push({ id, thumbnail, url });
  }
  return videos;
};

const App = () => {
  const videos = generateRandomVideos(12); // Change the count as needed
  return <VideoGridView videos={videos} />;
};

export default App;
