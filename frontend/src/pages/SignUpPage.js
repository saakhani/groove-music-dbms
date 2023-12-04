import React from 'react';
//import logo from '../logo.svg'; // Replace with your logo's import path

const SignupPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#1E2A47',
      color: '#FFFFFF'
    }}>
      {/* <img src={logo} alt="Logo" style={{ marginBottom: '2rem' }} /> */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        width: '100%',
        backgroundColor: '#2C3E50',
        borderRadius: '10px',
        padding: '2rem',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
      }}>
        <input type="text" placeholder="Username" style={inputStyle} />
        <input type="text" placeholder="First Name" style={inputStyle} />
        <input type="text" placeholder="Last Name" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="date" placeholder="Date of Birth" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="password" placeholder="Re-enter Password" style={inputStyle} />
        <button style={buttonStyle}>Signup</button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  marginBottom: '1rem',
  borderRadius: '5px',
  border: '1px solid #000000',
  background: 'white'
};

const buttonStyle = {
  padding: '10px',
  marginBottom: '1rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4C7AD3',
  color: 'white',
  cursor: 'pointer'
};

export default SignupPage;