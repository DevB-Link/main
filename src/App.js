import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import MojipPage from './components/MojipPage';
import GuinPage from './components/GuinPage';
import DulleobogiPage from './components/DulleobogiPage';
import ContactPage from './components/ContactPage';
import CommunityPage from './components/CommunityPage';

function App(){

  console.log("수정됩!");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mojip" element={<MojipPage />} />
        <Route path="/guin" element={<GuinPage />} />
        <Route path="/dulleobogi" element={<DulleobogiPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </Router>
  )
}

export default App;