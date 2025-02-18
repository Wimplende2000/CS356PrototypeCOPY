import React from 'react';

const PrivacyNotice = () => {
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
      <h1 style={titleStyle}>Privacy Notice</h1>

      <section>
        <h2 style={sectionTitleStyle}>Introduction</h2>
        <p style={paragraphStyle}>
          This Privacy Notice describes how Brigham Young University collects, uses, and safeguards personal information.
          We are committed to protecting your privacy and ensuring the security of your data.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Data Collection</h2>
        <p style={paragraphStyle}>
          BYU collects data through various interactions on our website and in our services. This may include personal identifiers,
          contact details, and usage data.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Data Use</h2>
        <p style={paragraphStyle}>
          The collected information is used to improve services, personalize your experience, and ensure compliance with legal requirements.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Data Sharing</h2>
        <p style={paragraphStyle}>
          BYU does not sell or rent your personal data. Data may be shared with trusted service providers under strict confidentiality agreements.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Security Measures</h2>
        <p style={paragraphStyle}>
          We implement various security measures, including encryption and access controls, to safeguard your information.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Your Rights</h2>
        <p style={paragraphStyle}>
          You have the right to access, correct, or request deletion of your personal data. For further inquiries, please contact our Privacy Office.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Contact Information</h2>
        <p style={paragraphStyle}>
          For any questions regarding this Privacy Notice, please contact:
          <br /><br />
          Privacy Office<br />
          Brigham Young University<br />
          Email: privacy@byu.edu<br />
          Phone: 1‑801‑422‑4636
        </p>
      </section>
    </div>
  );
};

export default PrivacyNotice;
