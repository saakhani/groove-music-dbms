import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div className='main-container'>
      <div className='rectangle'>
        <div className='auto-layer-row-b'>
          <div className='draft' />
          <span className='login'>Login</span>
        </div>
        <span className='signup'>Signup</span>
        <span className='reset-password'>Reset Password</span>
        <div className='rectangle-1' />
        <div className='rectangle-2' />
      </div>
    </div>
  );
}

export default LoginPage;
