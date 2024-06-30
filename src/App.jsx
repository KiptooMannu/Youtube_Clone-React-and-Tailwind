import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoCard from './components/Videocard';

const videos = [
  {
    title: 'Sample Video 1',
    channel: 'Channel 1',
    thumbnail: 'https://via.placeholder.com/300x150',
  },
  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },
  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },

  {
    title: 'Sample Video 2',
    channel: 'Channel 2',
    thumbnail: 'https://via.placeholder.com/300x150',
  },
  // Add more video objects as needed
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              channel={video.channel}
              thumbnail={video.thumbnail}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
