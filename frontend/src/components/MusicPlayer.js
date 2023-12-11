import React, { useState, useRef, useEffect } from 'react';
import '../styles/components/MusicPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';



const MusicPlayer = ({ title, artist ,src, albumArt }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [isLooping, setIsLooping] = useState(false);
    const audioRef = useRef(new Audio(src));
    const { current: audio } = audioRef;
    const [duration, setDuration] = useState(audio.duration);

    const toggleLoop = () => {
      setIsLooping(!isLooping);
    };

    useEffect(() => {
      const wasPlaying = !audio.paused;
      audio.src = src;
      audio.oncanplaythrough = () => { // when audio data is enough to start playing
          if (wasPlaying) audio.play();
      }
  }, [src]);

    useEffect(() => {
      audio.loop = isLooping;

      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
    });

      audio.addEventListener('timeupdate', () => {
          setCurrentTime(audio.currentTime);
          if (!duration) {
              setDuration(audio.duration);
          }
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });

      return () => {
        audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));  
        audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }, [audio, duration, isLooping]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    const onTimeSliderChange = (e) => {
      const time = e.target.value;
      if (audio.paused) {
        audio.currentTime = time;
        setCurrentTime(time);
        audio.pause();
      }
      else{
        audio.currentTime = time;
        setCurrentTime(time);
      }
    };

    function formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      let remainingSeconds = Math.floor(seconds % 60);
    
      // if (minutes < 10) { minutes = "0" + minutes; }
      if (remainingSeconds < 10) { remainingSeconds = "0" + remainingSeconds; }
    
      return minutes + ":" + remainingSeconds;
    }

    return (
      <div className='media-player'>
        <img className = 'album-art' src={albumArt} alt="Album Art"/>
        <div className='media-info'>
          <div className='media-title'>{title}</div>
          <div className='media-artist'>{artist}</div>
        </div>
        <div className='media-controls'>
          <button className = "button-loop" onClick={toggleLoop}>
            {isLooping ? 
            <FontAwesomeIcon className = "loop-toggle-active" icon={icon({name: 'repeat', style: 'solid'})}/> :
            <FontAwesomeIcon className = "loop-toggle-disable" icon={icon({name: 'repeat', style: 'solid'})}/>}
          </button>
          <button className = "button-play-pause" onClick={togglePlayPause}>
            {isPlaying ? 
            <FontAwesomeIcon icon={icon({name: 'pause', style: 'solid'})}/> : 
            <FontAwesomeIcon icon={icon({name: 'play', style: 'solid'})}/>}
          </button>
          <div className='item-invisible'>
            <FontAwesomeIcon icon={icon({name: 'play', style: 'solid'})}/>
          </div>
        </div>
        <div className='timeline'>
          <input className='timeline-slider'
          type="range"
          value={currentTime}
          max={duration}
          onChange={onTimeSliderChange}
          />
          <div className='time-display'>
            <span className='time-current'>{formatTime(currentTime)}</span>
            <span className='time-total'>{formatTime(duration)}</span>
          </div>
        </div>

      </div>
    );
};

export default MusicPlayer;
