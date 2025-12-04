import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import App from './App.jsx'
import Gallary from './Gallery.jsx'
import About from './About.jsx'
import Travel from './Travel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />  

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  </StrictMode>
)
