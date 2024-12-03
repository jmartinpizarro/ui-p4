// components/MusicPlayer.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Song {
  title: string;
  src: string;
}

const songs: Song[] = [
  // { title: 'Jingle Bells', src: '/music/jingle_bells.mp3' },
  // { title: 'Silent Night', src: '/music/silent_night.mp3' },
  // { title: 'We Wish You a Merry Christmas', src: '/music/we_wish_you.mp3' },
  { title: 'All I Want For Christmas Is You', src: './music/all_i_want_metal.mp3' },
  { title: 'Jingle Bells Cock', src: './music/jingle_bells_cock.mp3' },
  { title: 'It\'s Beginning To Look A Lot Like Christmas', src: './music/beginning_christmas.mp3' },
  { title: 'The Most Wonderful Time Of The Year', src: './music/most_wonderful.mp3' },
  { title: 'Police Stop My Car', src: './music/police_stop_my_car.mp3' },
  // Add more songs as needed
];

// Singleton audio instance
let audioInstance: HTMLAudioElement | null = null;

const MusicPlayer: React.FC = () => {
  // State variables
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Start paused
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5); // Initial volume at 50%

  // Initialize audioInstance if it's null
  if (!audioInstance) {
    audioInstance = new Audio(songs[currentSongIndex].src);
    audioInstance.volume = volume;
    audioInstance.onended = () => {
      handleNext();
    };
  }

  // Handle play errors
  const handlePlayError = (error: any) => {
    if (error.name === 'NotAllowedError') {
      // Autoplay was prevented
      setIsPlaying(false);
    } else {
      console.error('Error playing audio:', error);
    }
  };

  // Update audio source when currentSongIndex changes
  useEffect(() => {
    if (audioInstance) {
      audioInstance.src = songs[currentSongIndex].src;
      if (isPlaying) {
        audioInstance.play().catch(handlePlayError);
      }
    }
  }, [currentSongIndex]);

  // Update play/pause state
  useEffect(() => {
    if (audioInstance) {
      if (isPlaying) {
        audioInstance.play().catch(handlePlayError);
      } else {
        audioInstance.pause();
      }
    }
  }, [isPlaying]);

  // Update volume
  useEffect(() => {
    if (audioInstance) {
      audioInstance.volume = volume;
    }
  }, [volume]);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Next song
  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  // Previous song
  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  // Select song from list
  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioInstance) {
      audioInstance.volume = newVolume;
    }
  };

  // Close popup when clicking outside
  const handleOverlayClick = () => {
    setShowPopup(false);
  };

  // Prevent clicks inside the popup from closing it
  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Circular Button */}
        <button
          onClick={() => setShowPopup(!showPopup)}
          className={`w-16 h-16 rounded-full bg-red flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-50'
          }`}
        >
          {/* Icon or text */}
          <span className="text-white text-2xl">♪</span>
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed bottom-20 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50"
          onClick={handleOverlayClick}
        >
          <div onClick={handlePopupClick}>
            <h3 className="text-lg font-semibold mb-2">Music Player</h3>

            {/* Now Playing */}
            <p className="mb-2">
              Now Playing: <strong>{songs[currentSongIndex].title}</strong>
            </p>

            {/* Controls */}
            <div className="flex items-center justify-between mb-2">
              <button onClick={handlePrev} className="text-gray-700">
                &#9664; Prev
              </button>
              <button onClick={togglePlayPause} className="text-gray-700">
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button onClick={handleNext} className="text-gray-700">
                Next &#9654;
              </button>
            </div>

            {/* Volume Slider */}
            <div className="mb-2">
              <label htmlFor="volume" className="font-semibold mb-1">
                Volume:
              </label>
              <input
                type="range"
                id="volume"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full"
              />
            </div>

            {/* Song Selection */}
            <div>
              <h4 className="font-semibold mb-1">Select a Song:</h4>
              <ul className="max-h-32 overflow-y-auto">
                {songs.map((song, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSongSelect(index)}
                      className={`text-left w-full ${
                        index === currentSongIndex ? 'font-bold' : ''
                      }`}
                    >
                      {song.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
