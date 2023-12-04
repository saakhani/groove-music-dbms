import React from 'react';
import profilePicture from '../logo.svg'; // Replace with your profile picture
import albumCover from '../logo.svg'; // Replace with your album cover image

// Header component for the playlist
const PlaylistHeader = () => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '20px', color: 'white' }}>
    <img src={albumCover} alt="Album Cover" style={{ width: '100px', height: '100px', borderRadius: '10px' }} />
    <div style={{ marginLeft: '20px' }}>
      <h1>Good Vibes</h1>
      <p>Abdullah - 28 Songs, 1 hr 32 mins</p>
    </div>
  </div>
);

// Search bar component
const SearchBar = () => (
  <div style={{ padding: '0 20px' }}>
    <input
      type="text"
      placeholder="Search Bar"
      style={{
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none'
      }}
    />
  </div>
);

// Song item component
const SongItem = ({ number, title, artist, album, duration }) => (
  <div style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px' }}>
    <img src={profilePicture} alt="Artist" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
    <div style={{ marginLeft: '20px', flexGrow: 1 }}>
      <div style={{ fontWeight: 'bold' }}>{title}</div>
      <div>{artist}</div>
    </div>
    <div style={{ marginLeft: '20px' }}>{album}</div>
    <div style={{ marginLeft: '20px' }}>{duration}</div>
  </div>
);

// Main Playlist Page component
const PlaylistPage = () => (
  <div style={{ backgroundColor: '#1E2A47', height: '100vh' }}>
    <PlaylistHeader />
    <SearchBar />
    <div>
      <SongItem number={1} title="Paper Rings" artist="Taylor Swift" album="Lover" duration="3:42" />
      {/* Repeat SongItem for each song */}
    </div>
  </div>
);

export default PlaylistPage;