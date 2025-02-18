import React, { useState } from 'react';

const GeneralEducation = () => {
  // Container style for the overall page (using similar margins and padding as the Policy page)
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto', // uniform with Policy page
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  // Main title styling (adjusted to match the Policy page)
  const mainTitleStyle = {
    color: '#002E5D',
    fontSize: '32px', // same as Policy page
    fontWeight: 'bold',
    marginBottom: '20px', // same as Policy page
    borderBottom: '2px solid #002E5D',
    paddingBottom: '10px',
    textAlign: 'left',
  };

  // Section header styling for Overview, Course Distribution, etc.
  const sectionHeaderStyle = {
    color: '#002E5D',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  };

  // Paragraph styling
  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    textAlign: 'justify',
  };

  // Accordion container styling for Additional Requirements
  const accordionContainerStyle = {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  // Accordion header styling
  const accordionTitleStyle = {
    color: '#002E5D',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    margin: '0',
  };

  // Accordion content styling
  const accordionContentStyle = {
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  };

  // Data for accordion items
  const accordionItems = [
    {
      title: "Doctrinal Foundations",
      description: "Complete one requirement from each learning area.",
      items: [
        "Tchgs & Doctrine of Book of Mormon",
        "Christ and the Everlasting Gospel",
        "Foundations of the Restoration",
        "The Eternal Family",
        "BYU Religion Hours"
      ]
    },
    {
      title: "The Individual and Society",
      description: "Complete one requirement from each learning area.",
      items: [
        "American Heritage",
        "Global and Cultural Awareness"
      ]
    },
    {
      title: "Skills",
      description: "Complete one requirement from each learning area.",
      items: [
        "First-Year Writing",
        "Adv Written & Oral Communication",
        "Quantitative Reasoning",
        "Languages of Learning"
      ]
    },
    {
      title: "Arts, Letters and Sciences",
      description: "Complete one requirement from each learning area.",
      items: [
        "Civilization 1",
        "Civilization 2",
        "Arts",
        "Letters",
        "Biological Science",
        "Physical Science",
        "Social Science"
      ]
    }
  ];

  // State to track which accordion item is open (if any)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={containerStyle}>
      <h1 style={mainTitleStyle}>General Education Requirements</h1>

      <section>
        <h2 style={sectionHeaderStyle}>Overview</h2>
        <p style={paragraphStyle}>
          The General Education program at Brigham Young University is designed to provide students with a broad and balanced foundation. Through a range of courses in humanities, social sciences, natural sciences, and mathematics, students gain the critical thinking and communication skills necessary for lifelong learning.
        </p>
      </section>

      <section>
        <h2 style={sectionHeaderStyle}>Course Distribution</h2>
        <p style={paragraphStyle}>
          Students are required to complete courses that span multiple disciplines. This ensures exposure to different ways of thinking and learning. The distribution requirements may include courses in areas such as ethical reasoning, cultural literacy, and quantitative analysis.
        </p>
      </section>

      <section>
        <h2 style={sectionHeaderStyle}>Additional Information</h2>
        <p style={paragraphStyle}>
          For further details on course prerequisites, elective options, and credit requirements, please refer to the official BYU Catalog or consult with an academic advisor. The catalog is regularly updated to reflect the latest curriculum changes.
        </p>
      </section>

      {/* Accordion Section for Additional Requirements */}
      <div style={accordionContainerStyle}>
        <h2 style={{ ...sectionHeaderStyle, borderBottom: 'none', textAlign: 'center', marginTop: '0' }}>
          Additional Requirements
        </h2>
        {accordionItems.map((item, index) => (
          <div key={index}>
            <h3 style={accordionTitleStyle} onClick={() => toggleAccordion(index)}>
              {item.title}
              <span style={{ float: 'right' }}>{activeIndex === index ? '-' : '+'}</span>
            </h3>
            {activeIndex === index && (
              <div style={accordionContentStyle}>
                <p style={paragraphStyle}>{item.description}</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  {item.items.map((req, idx) => (
                    <li key={idx} style={{ fontSize: '16px', marginBottom: '5px' }}>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralEducation;
