import React from 'react';

const GeneralEducation = () => {
  // Container styles for a centered layout with a max-width for readability
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  // Main title styling
  const titleStyle = {
    color: '#002E5D',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: '2px solid #002E5D',
    paddingBottom: '10px',
  };

  // Section title styling
  const sectionTitleStyle = {
    color: '#002E5D',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  // Paragraph styling
  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>General Education Requirements</h1>

      <section>
        <h2 style={sectionTitleStyle}>Overview</h2>
        <p style={paragraphStyle}>
          The General Education program at Brigham Young University is designed to provide students with a broad and balanced foundation. Through a range of courses in humanities, social sciences, natural sciences, and mathematics, students gain the critical thinking and communication skills necessary for lifelong learning.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Course Distribution</h2>
        <p style={paragraphStyle}>
          Students are required to complete courses that span multiple disciplines. This ensures exposure to different ways of thinking and learning. The distribution requirements may include courses in areas such as ethical reasoning, cultural literacy, and quantitative analysis.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Additional Information</h2>
        <p style={paragraphStyle}>
          For further details on course prerequisites, elective options, and credit requirements, please refer to the official BYU Catalog or consult with an academic advisor. The catalog is regularly updated to reflect the latest curriculum changes.
        </p>
      </section>
    </div>
  );
};

export default GeneralEducation;
