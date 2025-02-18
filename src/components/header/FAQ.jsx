import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ items with questions and answers
  const faqItems = [
    {
      question: "How can I join the waitlist if a course is full?",
      answer: "If a course is full, you can join the waitlist. When a seat becomes available, you will be automatically enrolled."
    },
    {
      question: "When are the registration deadlines?",
      answer: "Registration deadlines vary by semester. Please refer to the academic calendar for the exact dates."
    },
    {
      question: "What are the grading criteria?",
      answer: "Grading criteria are outlined in each course syllabus. If you have questions, contact your instructor for further details."
    },
    {
      question: "How do I apply for financial aid?",
      answer: "Financial aid applications are available through the university's financial aid office. Check the website for deadlines and requirements."
    },
    {
      question: "Where can I find academic policies?",
      answer: "Academic policies are available on the official BYU policy page. Please refer there for comprehensive details."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Styles for the container, header, and accordion items
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headerStyle = {
    color: '#002E5D',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: '2px solid #002E5D',
    paddingBottom: '10px',
  };

  const accordionItemStyle = {
    borderBottom: '1px solid #ddd',
    padding: '10px 0'
  };

  const questionStyle = {
    cursor: 'pointer',
    color: '#002E5D',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const answerStyle = {
    marginTop: '10px',
    color: '#555',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div key={index} style={accordionItemStyle}>
          <div style={questionStyle} onClick={() => toggleAccordion(index)}>
            <span>{item.question}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div style={answerStyle}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
