import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CourseSearch from './components/CourseSearch';
import FAQ from './components/header/FAQ';
import GeneralEducation from './components/header/GeneralEducation';
import Policy from './components/header/Policy';
import AboutBYU from './components/header/AboutBYU';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CourseSearch />} />
        <Route path="/general-education" element={<GeneralEducation />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about-byu" element={<AboutBYU />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
