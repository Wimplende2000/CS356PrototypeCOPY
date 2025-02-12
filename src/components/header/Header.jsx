// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#002E5D',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const navItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  };

  return (
    <header style={headerStyle}>
      <div style={titleStyle}>Explore BYU Courses</div>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/general-education" style={linkStyle}>General Education</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/policy" style={linkStyle}>Policy</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/about-byu" style={linkStyle}>About BYU</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/faq" style={linkStyle}>F&amp;Q</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
