// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#002E5D',
    color: '#fff',
    padding: '15px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'underline',
    margin: '0 5px'
  };

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>
        Brigham Young University
      </div>
      <div style={{ marginBottom: '8px', fontSize: '14px' }}>
        <a href="/privacy" style={linkStyle}>Privacy Notice</a> |{' '}
        <a href="/cookie-preferences" style={linkStyle}>Cookie Preferences</a>
      </div>
      <div style={{ fontSize: '14px' }}>
        © 2024, All Rights Reserved  |  Provo, UT 84602, USA  |  1‑801‑422‑4636
      </div>
    </footer>
  );
};

export default Footer;
