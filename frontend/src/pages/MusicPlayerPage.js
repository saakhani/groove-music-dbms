import React from 'react';
import profilePicture from '../logo.svg'; // Replace with the path to your profile image
import albumCover from '../logo.svg'; // Replace with the path to your album cover image

// Profile component
const Profile = () => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
    <img src={profilePicture} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
    <span style={{ marginLeft: '10px', color: 'white' }}>Abdullah Shahood</span>
  </div>
);

// Search Bar component
const SearchBar = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
    <input
      type="text"
      placeholder="Search Bar"
      style={{
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: 'none',
      }}
    />
  </div>
);

// Song List Item component
const SongListItem = ({ number, title, artist, duration }) => (
  <div style={{ display: 'flex', alignItems: 'center', color: 'white', margin: '10px 0' }}>
    <div style={{ width: '20px', marginRight: '10px' }}>{number}.</div>
    <div style={{ width: '50px', marginRight: '10px' }}>
      <img src={albumCover} alt="Album Cover" style={{ width: '100%', borderRadius: '5px' }} />
    </div>
    <div style={{ flex: 1, marginRight: '10px' }}>{title}</div>
    <div style={{ flex: 1, marginRight: '10px' }}>{artist}</div>
    <div style={{ width: '50px' }}>{duration}</div>
  </div>
);

// Player component
const Player = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
    <div style={{ marginRight: '20px' }}>
      <button style={buttonStyle}>{'<<'}</button>
    </div>
    <button style={buttonStyle}>Play</button>
    <div style={{ marginLeft: '20px' }}>
      <button style={buttonStyle}>{'>>'}</button>
    </div>
  </div>
);

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1.5em',
  cursor: 'pointer',
};

// Main Page component
const MusicPlayerPage = () => (
  <div style={{ backgroundColor: '#1E2A47', height: '100vh' }}>
    <Profile />
    <SearchBar />
    <div style={{ margin: '20px', overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
      <SongListItem number={1} title="Tu hai Kahan" artist="AUR" duration="3:42" />
      {/* Repeat <SongListItem /> for each song */}
    </div>
    <Player />
  </div>
);

export default MusicPlayerPage;