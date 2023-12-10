import React from 'react';
import '../styles/HomePage.css'; // Import the CSS file

const Homepage = () => {
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.left = (sidebar.style.left === '0px') ? '-200px' : '0';
    };

    return (
        <div>
            <header>
                <h1>Groove Music</h1>
            </header>
            <div className="menu-btn" onClick={toggleSidebar}>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div>
            {/* Sidebar and other content */}
            <main>
                <h2>Featured Playlists</h2>
                <div className="featured-playlist">
                    {/* Playlist cards */}
                </div>
            </main>
        </div>
    );
};

export default Homepage;
