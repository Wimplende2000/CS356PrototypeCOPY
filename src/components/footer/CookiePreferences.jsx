import React from 'react';

const CookiePreferences = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const titleStyle = {
    color: '#002E5D',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: '2px solid #002E5D',
    paddingBottom: '10px',
  };

  const sectionTitleStyle = {
    color: '#002E5D',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Cookie Preferences</h1>

      <section>
        <p style={paragraphStyle}>
          This website uses cookies to enhance your browsing experience and to analyze our traffic. Cookies help us remember your preferences and improve our services.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>What Are Cookies?</h2>
        <p style={paragraphStyle}>
          Cookies are small text files stored on your device by your web browser. They allow the site to recognize your device on subsequent visits, helping us tailor your experience.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Managing Your Cookie Preferences</h2>
        <p style={paragraphStyle}>
          You can manage or disable cookies by changing your browser settings. Please note that disabling cookies may affect the functionality and performance of this website.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>More Information</h2>
        <p style={paragraphStyle}>
          For additional details on our cookie practices and how we use the information collected, please review our Cookie Policy or contact our Privacy Office.
        </p>
      </section>
    </div>
  );
};

export default CookiePreferences;
