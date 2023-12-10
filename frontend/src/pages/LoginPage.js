import React from 'react';
import '../styles/LoginPage.css'; // Import the CSS file

const Login = () => {
  return (
    <div>
      <img className="logo" src="DRAFT.png" alt="Logo" />
      <div className="login-box">
        <h2>Login</h2>
        <form action="homepage.html" method="post">
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <a href="signup.html" className="signup-link">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
