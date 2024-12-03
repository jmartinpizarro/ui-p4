// components/MusicPlayer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import AudioManager from '@/app/utils/audioManager';

const MusicPlayer: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const audioManager = AudioManager.getInstance();

  // Local state mirrors AudioManager's state
  const [isPlaying, setIsPlaying] = useState<boolean>(audioManager.isPlaying);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(
    audioManager.currentSongIndex
  );
  const [volume, setVolume] = useState<number>(audioManager.volume);
  const songs = audioManager.getSongs();

  // Sync local state with AudioManager state
  useEffect(() => {
    setIsPlaying(audioManager.isPlaying);
    setCurrentSongIndex(audioManager.currentSongIndex);
    setVolume(audioManager.volume);
  }, []);

  const togglePlayPause = () => {
    audioManager.togglePlayPause();
    setIsPlaying(audioManager.isPlaying);
  };

  const handleNext = () => {
    audioManager.handleNext();
    setCurrentSongIndex(audioManager.currentSongIndex);
  };

  const handlePrev = () => {
    audioManager.handlePrev();
    setCurrentSongIndex(audioManager.currentSongIndex);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    audioManager.setVolume(newVolume);
    setVolume(newVolume);
  };

  const handleSongSelect = (index: number) => {
    audioManager.selectSong(index);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  // Close popup when clicking outside
  const handleOverlayClick = () => {
    setShowPopup(false);
  };

  // Prevent clicks inside the popup from closing it
  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Attempt to autoplay on initial load
  useEffect(() => {
    audioManager.play();
    setIsPlaying(audioManager.isPlaying);
  }, []);

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
              Now Playing:{' '}
              <strong>{songs[currentSongIndex].title}</strong>
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
