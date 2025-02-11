import React from 'react';

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
            <a href="/" style={linkStyle}>Home</a>
          </li>
          <li style={navItemStyle}>
            <a href="/general-education" style={linkStyle}>General Education</a>
          </li>
          <li style={navItemStyle}>
            <a href="/policy" style={linkStyle}>Policy</a>
          </li>
          <li style={navItemStyle}>
            <a href="/about-byu" style={linkStyle}>About BYU</a>
          </li>
          <li style={navItemStyle}>
            <a href="/faq" style={linkStyle}>F&amp;Q</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
