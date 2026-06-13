import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import ChurchIntro from './pages/ChurchIntro.tsx'
import SeniorPastor from './pages/SeniorPastor.tsx'
import FormerPastors from './pages/FormerPastors.tsx'
import Ministers from './pages/Ministers.tsx'
import Notices from './pages/Notices.tsx'
import Columns from './pages/Columns.tsx'
import Contact from './pages/Contact.tsx'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/교회-소개" element={<ChurchIntro />} />
        <Route path="/함께하는-이들/담임목사" element={<SeniorPastor />} />
        <Route path="/함께하는-이들/역대-목사" element={<FormerPastors />} />
        <Route path="/함께하는-이들/사역자" element={<Ministers />} />
        <Route path="/교회-소식/공지사항" element={<Notices />} />
        <Route path="/교회-소식/칼럼" element={<Columns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
