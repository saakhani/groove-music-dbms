import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = ({ src, albumArt }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(new Audio(src));
    const { current: audio } = audioRef;

    useEffect(() => {
        audio.addEventListener('timeupdate', () => {
            setCurrentTime(audio.currentTime);
            if (!duration) {
                setDuration(audio.duration);
            }
        });

        return () => {
            audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
        };
    }, [audio, duration]);

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
        audio.currentTime = time;
        setCurrentTime(time);
    };

    return (
        <div>
            <img src={albumArt} alt="Album Art" style={{ width: '100px', height: '100px' }} />
            <button onClick={togglePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={onTimeSliderChange}
            />
        </div>
    );
};

export default MusicPlayer;
