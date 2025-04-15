import React from 'react'
import Beranda from './pages/Beranda'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kontak from './pages/Kontak';
import ProfileSekolah from './pages/ProfileSekolah';
import Galery from './pages/Galery';
import Berita from './pages/Berita';
import Guru from './pages/guru';
import Lomba from './pages/Lomba';
import Warta from './pages/Warta';


const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profilesekolah" element={<ProfileSekolah />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/guru" element={<Guru />} />
          <Route path="/lomba" element={<Lomba />} />
          <Route path="/warta" element={<Warta />} />
        </Routes>

    </Router>
  )
}

export default App