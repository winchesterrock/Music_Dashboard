import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './MusicFooter.css';
import song from '../images/song.jpeg'
 
const MusicFooter = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-footer">
      <img src={song} alt="Song" className="song-image" />
      <div className="song-info">
        <div className="song-title">Paris</div>
        <div className="song-artist">Chainsmokers</div>
      </div>
      <div className="progress-bar">
        <svg viewBox="0 0 100 20" className="heartbeat-svg">
          <path
            d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
            fill="none"
            stroke="#007BFF"
            strokeWidth="2"
          />
        </svg>
        <div className="heartbeat-dot"></div>
      </div>
      <div className="song-length">3:45</div>
      <div className="play-pause" onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
};

export default MusicFooter;
