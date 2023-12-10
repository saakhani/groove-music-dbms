import React from 'react';
import '../styles/pages/HomePage.css'; // Import the CSS file
import MusicPlayer from '../components/MusicPlayer';
import Header from '../components/Header';

const Homepage = () => {
    // const toggleSidebar = () => {
    //     const sidebar = document.querySelector('.sidebar');
    //     sidebar.style.left = (sidebar.style.left === '0px') ? '-200px' : '0';
    // };

    const song_details = {
        title: 'willow',
        artist: 'Taylor Swift',
        src: require('../assets/music/taylor-swift/lp/evermore/01.mp3'),
        albumArt: require('../assets/music/taylor-swift/lp/evermore/cover.jpg')
    }


    return (
        <div className='homepage'>
            <Header />
						<div className='homepage-content'>
							<div className='music-player-div'>
								<MusicPlayer title={song_details.title} artist={song_details.artist} src={song_details.src} albumArt={song_details.albumArt}/>
							</div>
						</div>

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
