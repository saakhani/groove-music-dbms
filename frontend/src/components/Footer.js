import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center' }}>
      <Link to="/">Home</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/signup">Signup</Link> | 
      <Link to="/music-player">Music Player</Link> | 
      <Link to="/music-discovery">Music Discovery</Link> | 
      <Link to="/sidebar">Sidebar</Link> | 
      <Link to="/playlist">Playlist</Link>
    </footer>
  );
};

export default Footer;