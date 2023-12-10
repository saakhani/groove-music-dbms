import React from 'react';
import '../styles/SignupPage.css'; // Import the CSS file
import logo from '../assets/logo/logo.png'; // Import the logo image


const Signup = () => {
    return (
        <div>
            <img className="logo" src={logo} alt="Logo" />
            <div className="registration-box">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="date" placeholder="Date of Birth" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Re-enter Password" required />
                    <button type="submit">Sign Up</button>
                </form>
                <a href="LoginPage.js" className="signup-link">Already have an account? Login</a>
            </div>
        </div>
    );
};

export default Signup;
