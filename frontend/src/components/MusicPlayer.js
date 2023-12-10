import React from 'react';
import '../styles/components/MusicPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const MusicPlayer = () => {


   {/* Simulate changing the currently playing song (you will replace this with your actual logic) */}
   setInterval(() => {
    const songTitle = "Your Song Title";
    const artistName = "Artist Name";
    const timeDuration = "0:00 / 3:30"; // Replace with actual time duration
    const progressPercentage = 30; // Replace with actual progress percentage
    updateCurrentlyPlaying(songTitle, artistName, timeDuration, progressPercentage);
}, 1000); // Update every 5 seconds (adjust as needed)

function updateCurrentlyPlaying(songTitle, artistName, timeDuration, progressPercentage) {
    const currentlyPlayingSong = document.getElementById('currentlyPlayingSong');
    const currentlyPlayingArtist = document.getElementById('currentlyPlayingArtist');
    const timeDurationElement = document.getElementById('timeDuration');
    const progressBar = document.getElementById('progressBar');

    currentlyPlayingSong.textContent = songTitle;
    currentlyPlayingArtist.textContent = artistName;
    timeDurationElement.textContent = timeDuration;

    // Update progress bar width based on the progressPercentage
    progressBar.style.width = `${progressPercentage}%`;
}

function playPause() {
    // Add logic for play/pause action
    console.log('Play/Pause icon clicked');
}

function skipBackward() {
    // Add logic for skip backward action
    console.log('Skip Backward icon clicked');
}

function skipForward() {
    // Add logic for skip forward action
    console.log('Skip Forward icon clicked');
}

  return(
      <div class="currently-playing" id="currentlyPlayingBox">
        <img class="song-image" src="Playlist1.png" alt="Song Image"/>
        <h2 id="currentlyPlayingSong">Song Title</h2>
        <p id="currentlyPlayingArtist">Artist Name</p>
        <p id="timeDuration">0:00 / 3:30</p>
        <div class="control-buttons">
          <i class="fas fa-backward" onclick="skipBackward()">
            <FontAwesomeIcon icon={icon({name: 'backward', style: 'solid'})}/>
          </i>
          <i class="fas fa-play" onclick="playPause()">
            <FontAwesomeIcon icon={icon({name: 'play', style: 'solid'})}/>
          </i>
          <i class="fas fa-pause" onclick="playPause()"> 
            <FontAwesomeIcon icon={icon({name: 'pause', style: 'solid'})}/>
          </i>
          <i class="fas fa-forward" onclick="skipForward()">
            <FontAwesomeIcon icon={icon({name: 'forward', style: 'solid'})}/>
          </i>
        </div>
        <div class="time-progress">
          <div class="progress-bar" id="progressBar"></div>
        </div>
      </div>
  );
};


export default MusicPlayer;


