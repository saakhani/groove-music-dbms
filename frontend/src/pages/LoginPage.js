import React from 'react';
import '../styles/pages/LoginPage.css'; // Import the CSS file
import logo from '../assets/logo/logo.png'; // Import the logo image 


const Login = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
      <div className="login-box">
        <h2>Login</h2>
        <form action="homepage.html" method="post">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <a href="SignupPage.js" className="signup-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
