import React from "react";

const PhotoGridView = ({ photos }) => {
  return (
    <div className="overflow-y-scroll h-full">
      <div className="flex justify-between px-4 text-sm font-semibold">
        <div>Photos</div>
        <div className="underline text-blue-400">View More</div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden">
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const generateRandomPhotos = (count) => {
  const photos = [];
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const randomWidth = Math.floor(Math.random() * (800 - 400 + 1)) + 400;
    const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
    const url = `https://picsum.photos/${randomWidth}/${randomHeight}?random=${id}`;
    photos.push({ id, url });
  }
  return photos;
};

const App = () => {
  const photos = generateRandomPhotos(12); // Change the count as needed
  return <PhotoGridView photos={photos} />;
};

export default App;
