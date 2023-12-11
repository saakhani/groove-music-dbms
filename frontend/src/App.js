import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Link } from "react-router-dom";
import Layout from "./components/Layout";


import HomePage from './pages/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import AdminPage from "./pages/AdminPage";




function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

