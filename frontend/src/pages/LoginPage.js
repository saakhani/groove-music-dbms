import React from 'react';
import logo from '../logo.svg'; // Make sure to replace this with the path to your logo image

const LoginPage = () => {
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
      <img src={logo} alt="Logo" style={{ marginBottom: '2rem' }} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        width: '100%'
      }}>
        <input
          type="text"
          placeholder="Email/Username"
          style={{
            padding: '10px',
            marginBottom: '1rem',
            borderRadius: '5px',
            border: '1px solid #000000'
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '10px',
            marginBottom: '1rem',
            borderRadius: '5px',
            border: '1px solid #000000'
          }}
        />
        <button style={{
          padding: '10px',
          marginBottom: '0.5rem',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#4C7AD3',
          color: 'white',
          cursor: 'pointer'
        }}>
          Login
        </button>
        <button style={{
          padding: '10px',
          marginBottom: '1rem',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#4C7AD3',
          color: 'white',
          cursor: 'pointer'
        }}>
          Signup
        </button>
        <a href="/reset-password" style={{ color: '#FFFFFF', textDecoration: 'none', alignSelf: 'center' }}>
          Reset Password
        </a>
      </div>
    </div>
  );
}

export default LoginPage;