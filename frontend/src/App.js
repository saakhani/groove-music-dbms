import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Link } from "react-router-dom";
import Layout from "./components/Layout";

import AlbumPage from './pages/AlbumPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Sidebar from './pages/Sidebar';
import SongPage from './pages/SongPage';
import Home from './pages/PlaylistPage';




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/songPage" element={<SongPage />} />
          <Route path="/albumPage" element={<AlbumPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

