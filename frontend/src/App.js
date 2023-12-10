import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Link } from "react-router-dom";
import Layout from "./components/Layout";


import HomePage from './pages/HomePage';
import { AuthProvider } from './contexts/AuthContext';




function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

