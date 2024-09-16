import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './pages/Header';
import Footer from './pages/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/LoginPage" element={<LoginPage  />} />
        <Route path="/RegisterPage" element={<RegisterPage  />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
