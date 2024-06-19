import React from "react";

const PhotoGridView = ({ photos }) => {
  const images = generateRandomPhotos(60);
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg">
              <img
                src={image.url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const generateRandomPhotos = (count) => {
  const photos = [];
  const minWidth = 200;
  const maxWidth = 800;
  const minHeight = 200;
  const maxHeight = 800;

  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const url = `https://picsum.photos/${width}/${height}?random=${id}`;
    const likes = Math.floor(Math.random() * 100); // Generate random likes count
    photos.push({ id, url, likes });
  }
  return photos;
};

export default PhotoGridView;
