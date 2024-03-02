import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LANDING from './components/LANDING';
import Navbar from './components/Navbar'
import Footer from './components/Footer'




import { useEffect, useRef } from 'react';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
        <div className=''>
          <Navbar locationProps={location} />
          <Routes>
            <Route path="/" key={document.location.href} element={<LANDING />} />
          </Routes>
          < Footer locationProps={location} />
        </div>
    </Router>
  )
}

export default App
