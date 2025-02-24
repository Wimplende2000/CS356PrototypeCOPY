import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CourseSearch from './components/CourseSearch';
import Home from './components/Home';
import FAQ from './components/header/FAQ';
import GeneralEducation from './components/header/GeneralEducation';
import Policy from './components/header/Policy';
import AboutBYU from './components/header/AboutBYU';
import Footer from './components/footer/Footer';
import Privacy from './components/footer/Privacy';
import CookiePreferences from './components/footer/CookiePreferences';
import Schedule from './components/Schedule'; // Import the Schedule component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<CourseSearch />} />
        <Route path="/general-education" element={<GeneralEducation />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about-byu" element={<AboutBYU />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie-preferences" element={<CookiePreferences />} />
        <Route path="/schedule" element={<Schedule />} /> {/* Add the Schedule route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;