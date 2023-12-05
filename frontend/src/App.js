import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import AlbumPage from './pages/AlbumPage';
import LoginPage from './pages/LoginPage';  
import SignupPage from './pages/SignUpPage';  
import MusicPlayerPage from './pages/MusicPlayerPage';
import MusicDiscoveryPage from './pages/MusicDiscoveryPage';
import SidebarPage from './pages/SidebarPage';
import PlaylistPage from './pages/PlaylistPage';
import { Link } from "react-router-dom";
import Layout from "./components/Layout";





function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AlbumPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/music-player" element={<MusicPlayerPage />} />
          <Route path="/music-discovery" element={<MusicDiscoveryPage />} />
          <Route path="/sidebar" element={<SidebarPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

