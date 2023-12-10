import React from 'react';
import '../styles/HomePage.css'; // Import the CSS file
import MusicPlayer from '../components/MusicPlayer';

const Homepage = () => {
    // const toggleSidebar = () => {
    //     const sidebar = document.querySelector('.sidebar');
    //     sidebar.style.left = (sidebar.style.left === '0px') ? '-200px' : '0';
    // };

    return (
        <div>
            {/* <header>
                <h1>Groove Music</h1>
            </header> */}
            <MusicPlayer src = {require('../assets/music/taylor-swift/lp/evermore/01.mp3')} albumArt = {require('../assets/music/taylor-swift/lp/evermore/cover.jpg')}/>
            {/* <div className="menu-btn" onClick={alert('dont click this again')}>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div> */}
            {/* Sidebar and other content */}
            {/* <main>
                <h2>Featured Playlists</h2>
                <div className="featured-playlist">
                </div>
            </main> */}
        </div>
    );
};

export default Homepage;
