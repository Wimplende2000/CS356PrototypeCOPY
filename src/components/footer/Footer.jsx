import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#002E5D',
    color: '#fff',
    padding: '15px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'underline',
    margin: '0 5px',
  };

  const lineStyle = {
    margin: '8px 0',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={{ ...lineStyle, fontSize: '24px', fontWeight: 'bold' }}>
        Brigham Young University
      </div>
      <div style={lineStyle}>
        <Link to="/privacy" style={linkStyle}>Privacy Notice</Link> |{' '}
        <Link to="/cookie-preferences" style={linkStyle}>Cookie Preferences</Link>
      </div>
      <div style={lineStyle}>
        © 2024, All Rights Reserved  |  Provo, UT 84602, USA  |  1‑801‑422‑4636
      </div>
    </footer>
  );
};

export default Footer;
