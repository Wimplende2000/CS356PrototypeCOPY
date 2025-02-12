import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CourseSearch from './components/CourseSearch';

function Home() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CourseSearch />} />
      </Routes>
      
    </Router>
  );
}

export default Home;