import React from 'react';
import '../styles/SignupPage.css';

const Sidebar = () => {
  return (
    <div className='main-container'>
      <div className='rectangle'>
        <div className='draft' />
        <div className='frame-1'>
          <div className='sign-up-info'>
            <div className='rectangle-2' />
            <div className='auto-layer-row'>
              <div className='group'>
                <div className='auto-layer-row-de'>
                  <span className='username'>Username</span>
                  <div className='user-outline' />
                </div>
                <div className='auto-layer-row-3'>
                  <div className='rectangle-4' />
                  <span className='first-name'>First Name</span>
                  <div className='user-outline-5' />
                </div>
                <div className='auto-layer-row-b'>
                  <div className='rectangle-6' />
                  <span className='last-name'>Last Name</span>
                  <div className='user-outline-7' />
                </div>
                <div className='user-outline-8' />
                <div className='user-outline-9' />
                <div className='auto-layer-row-d'>
                  <div className='lock' />
                  <span className='password'>Password</span>
                </div>
                <div className='auto-layer-row-e'>
                  <div className='rectangle-a' />
                  <span className='re-enter-password'>Re-enter Password</span>
                  <div className='lock-b' />
                </div>
                <div className='auto-layer-row-c'>
                  <span className='signup'>Signup</span>
                  <div className='rectangle-d' />
                </div>
              </div>
              <div className='rectangle-e' />
              <span className='email'>Email</span>
            </div>
            <div className='auto-layer-row-db'>
              <span className='date-of-birth'>Date of Birth</span>
              <div className='rectangle-f' />
            </div>
            <div className='rectangle-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
