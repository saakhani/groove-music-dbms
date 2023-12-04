import React from 'react';
import playlistCover1 from '../logo.svg'; // Add actual import paths for your images
import playlistCover2 from '../logo.svg';
// ... more playlist cover imports

// SearchBar component
const SearchBar = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <input
      type="text"
      placeholder="Search Bar"
      style={{
        flexGrow: 1,
        marginRight: '10px',
        padding: '10px',
        borderRadius: '5px',
        border: 'none'
      }}
    />
    <button style={{
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#4C7AD3',
      color: 'white',
      cursor: 'pointer'
    }}>
      Q
    </button>
  </div>
);

// PlaylistCard component
const PlaylistCard = ({ cover, title, description }) => (
  <div style={{ width: '180px', margin: '10px', textAlign: 'center' }}>
    <img src={cover} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
    <h3 style={{ color: 'white' }}>{title}</h3>
    <p style={{ color: 'grey' }}>{description}</p>
  </div>
);

// NowPlaying component
const NowPlaying = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#2C3E50',
    borderRadius: '10px',
    position: 'absolute',
    bottom: '20px',
    width: 'calc(100% - 40px)' // Adjust based on parent padding
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Album cover and name would be dynamic based on the current track */}
      <img src={playlistCover1} alt="Now Playing" style={{ width: '80px', height: '80px', borderRadius: '5px' }} />
      <div style={{ marginLeft: '20px', color: 'white' }}>
        <h3>Lost Game</h3>
        {/* Artist name */}
      </div>
    </div>
    <div>
      {/* Playback controls would be interactive components */}
      <button style={buttonStyle}>{'<<'}</button>
      <button style={buttonStyle}>Play</button>
      <button style={buttonStyle}>{'>>'}</button>
    </div>
  </div>
);

const buttonStyle = {
  border: 'none',
  background: 'transparent',
  color: 'white',
  fontSize: '20px',
  margin: '0 10px',
  cursor: 'pointer'
};

// Main Page component
const MusicDiscoveryPage = () => (
  <div style={{ backgroundColor: '#1E2A47', height: '100vh', position: 'relative', padding: '20px' }}>
    <SearchBar />
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      <PlaylistCard cover={playlistCover1} title="Car Drives" description="AUR, Tate McRae, Alexander 23, and more" />
      <PlaylistCard cover={playlistCover2} title="Midnight Vibes" description="Nulbarich, R3HAB, Kygo, Maroon 5 and more" />
      {/* More <PlaylistCard /> components */}
    </div>
    <NowPlaying />
  </div>
);

export default MusicDiscoveryPage;