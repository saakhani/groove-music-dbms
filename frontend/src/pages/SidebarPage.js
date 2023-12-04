import React from 'react';
import profilePicture from '../logo.svg'; // Replace with your logo's import path

// Sidebar component
const Sidebar = () => {
  const sidebarStyle = {
    backgroundColor: '#2C3E50',
    color: 'white',
    padding: '20px',
    minHeight: '100vh',
  };

  const menuItemStyle = {
    marginTop: '20px',
    color: '#FFFFFF',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={sidebarStyle}>
      <img src={profilePicture} alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      <h2>Abdullah Shahood</h2>
      <div style={menuItemStyle}>My Account</div>
      <div style={menuItemStyle}>Settings and Privacy</div>
      <div style={menuItemStyle}>Terms And Conditions</div>
      <div style={menuItemStyle}>Sign Out</div>
    </div>
  );
};

// Main Page component
const SidebarPage = () => (
  <div style={{ display: 'flex', backgroundColor: '#1E2A47' }}>
    <Sidebar />
    {/* The rest of the page content would go here, similar to the MusicPlayerPage component */}
  </div>
);

export default SidebarPage;