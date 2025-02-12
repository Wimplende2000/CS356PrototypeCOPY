import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CourseSearch from './components/CourseSearch';
import Home from './components/Home';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/search" element = {<CourseSearch />} />
        {/* 
          Optionally, add routes for "General Education", "Policy", "About BYU", etc.
          For example:
          <Route path="/general-education" element={<GeneralEducation />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
