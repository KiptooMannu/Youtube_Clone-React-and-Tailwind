import React from 'react';

function VideoCard() {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img
        src="https://via.placeholder.com/150"
        alt="Video Thumbnail"
        className="w-full h-40 object-cover"
      />
      <h2 className="mt-2 text-lg font-semibold">Video Title</h2>
      <p className="text-sm text-gray-600">Channel Name</p>
    </div>
  );
}

export default VideoCard;
