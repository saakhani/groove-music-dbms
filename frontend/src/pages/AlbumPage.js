import React from 'react';
import albumCover from '../logo.svg'; // Replace with your album cover image

// AlbumHeader component
const AlbumHeader = () => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '20px', color: 'white' }}>
    <img src={albumCover} alt="Album Cover" style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
    <div style={{ marginLeft: '20px' }}>
      <h1>1989 (Taylor's Version)</h1>
      <p>Taylor Swift - 21 Songs, 1 hr 17 mins</p>
    </div>
  </div>
);

// SearchBar component
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

// SongRow component
const SongRow = ({ number, title, album, duration }) => (
  <div style={{ display: 'flex', alignItems: 'center', color: 'white', padding: '10px 20px' }}>
    <div style={{ width: '50px', marginRight: '20px' }}>{number}.</div>
    <img src={albumCover} alt="Artist" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
    <div style={{ marginLeft: '20px', flexGrow: 1 }}>
      <div style={{ fontWeight: 'bold' }}>{title}</div>
      <div>{album}</div>
    </div>
    <div style={{ marginLeft: '20px' }}>{duration}</div>
  </div>
);

// Main Album Page component
const AlbumPage = () => (
  <div style={{ backgroundColor: '#1E2A47', height: '100vh', overflow: 'auto' }}>
    <AlbumHeader />
    <SearchBar />
    <div>
      <SongRow number={1} title="Welcome To New York (Taylor's Version)" album="1989 (Taylor's Version)" duration="3:32" />
      {/* Repeat SongRow for each song */}
    </div>
  </div>
);

export default AlbumPage;