import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Link } from "react-router-dom";
import Layout from "./components/Layout";


import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

