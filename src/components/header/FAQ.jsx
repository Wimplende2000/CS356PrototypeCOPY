import React from 'react';

const FAQ = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#002E5D', fontSize: '24px', fontWeight: 'bold' }}>Student FAQ</h1>
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ color: '#002E5D', fontSize: '16px', fontWeight: 'bold' }}>Waitlist Policies</h3>
        <p style={{ color: '#555', fontSize: '14px' }}>
          If a course is full, you can join the waitlist. You will be automatically enrolled if a seat becomes available.
        </p>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ color: '#002E5D', fontSize: '16px', fontWeight: 'bold' }}>Registration Deadlines</h3>
        <p style={{ color: '#555', fontSize: '14px' }}>
          Registration deadlines vary by semester. Check the academic calendar for specific dates.
        </p>
      </div>
      <div>
        <h3 style={{ color: '#002E5D', fontSize: '16px', fontWeight: 'bold' }}>Grading Criteria</h3>
        <p style={{ color: '#555', fontSize: '14px' }}>
          Grading policies are outlined in the course syllabus. Contact the instructor for clarification.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
