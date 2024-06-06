import React from "react";

const PhotoGridView = ({ photos, title }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between px-4 text-sm font-semibold">
        <div>{title}</div>
        <div className="underline text-blue-400">View More</div>
      </div>
      <div className="overflow-x-scroll h-64 w-full flex space-x-4 p-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden flex-shrink-0"
            style={{ width: "300px", height: "200px" }}
          >
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-2 right-2 flex items-center bg-gray-800 bg-opacity-75 text-white text-sm px-2 py-1 rounded">
              <i className="fas fa-heart mr-1 text-red-500"></i>
              <span>{photo.likes}</span>
            </div>
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
    const url = `https://picsum.photos/300/200?random=${id}`;
    const likes = Math.floor(Math.random() * 100); // Generate random likes count
    photos.push({ id, url, likes });
  }
  return photos;
};

const App = ({ title }) => {
  const photos = generateRandomPhotos(20); // Change the count as needed
  return <PhotoGridView photos={photos} title={title} />;
};

export default App;
