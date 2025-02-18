import React from 'react';

const Policy = () => {
  // Container styling for a clean, centered layout
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
    marginTop: '20px',
    marginBottom: '10px',
  };

  // Paragraph styling
  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>BYU Policies</h1>

      <section>
        <h2 style={sectionTitleStyle}>Academic Honesty</h2>
        <p style={paragraphStyle}>
          At BYU, academic honesty is a cornerstone of the educational experience. Students are expected to complete their work with integrity and to properly attribute all sources.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Academic Standards</h2>
        <p style={paragraphStyle}>
          Our academic standards are designed to uphold excellence in learning. These standards guide the curriculum and ensure that students meet rigorous performance criteria.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Admissions</h2>
        <p style={paragraphStyle}>
          The admissions process at BYU is competitive and transparent. We evaluate applicants based on academic achievements, extracurricular activities, and personal character.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Dates & Deadlines</h2>
        <p style={paragraphStyle}>
          Key dates and deadlines for applications, registration, examinations, and graduation are published well in advance. It is essential that students adhere to these schedules.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Disclaimer</h2>
        <p style={paragraphStyle}>
          The policies provided on this page are subject to change. BYU reserves the right to modify policies and procedures as needed to maintain an effective academic environment.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Discontinuance</h2>
        <p style={paragraphStyle}>
          In the event that a course or program is discontinued, students will be notified promptly and provided with alternative options to ensure a smooth transition.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Final Examination Policy</h2>
        <p style={paragraphStyle}>
          BYU enforces a strict final examination policy to ensure fairness and academic integrity. Detailed procedures for scheduling, retakes, and accommodations are outlined in the official guidelines.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Financial Aid & Scholarships</h2>
        <p style={paragraphStyle}>
          A variety of financial aid options and scholarships are available to assist students with tuition and related costs. Eligibility and application procedures are clearly defined.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Grading & Records</h2>
        <p style={paragraphStyle}>
          Our grading policies ensure that student performance is evaluated consistently and fairly. Academic records are maintained accurately and any disputes are handled through a formal appeals process.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Graduation</h2>
        <p style={paragraphStyle}>
          Graduation requirements include the successful completion of all required courses, maintenance of a minimum GPA, and fulfillment of any additional program-specific criteria.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Honor Code</h2>
        <p style={paragraphStyle}>
          BYU's Honor Code outlines the ethical standards expected of every student. This code promotes respect, integrity, and personal responsibility both on and off campus.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Housing</h2>
        <p style={paragraphStyle}>
          Our housing policies provide guidelines for both on-campus and off-campus living arrangements, ensuring safe and supportive environments for all students.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Nondiscrimination</h2>
        <p style={paragraphStyle}>
          BYU is committed to fostering an inclusive environment. Our nondiscrimination policy ensures that all students, staff, and faculty are treated with fairness and respect.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Petitions</h2>
        <p style={paragraphStyle}>
          Students may submit petitions to request exceptions or modifications to existing policies. Each petition is reviewed on a case-by-case basis, with the goal of achieving a fair outcome.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Registration</h2>
        <p style={paragraphStyle}>
          Registration policies detail the procedures for enrolling in courses, including add/drop periods and waitlist management. It is essential that students adhere to registration deadlines.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Sexual Harassment</h2>
        <p style={paragraphStyle}>
          BYU maintains a zero-tolerance policy for sexual harassment. Prompt investigation and strict disciplinary action ensure a safe and respectful campus environment.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Title IX</h2>
        <p style={paragraphStyle}>
          In compliance with Title IX, BYU is dedicated to preventing sex-based discrimination in education. Our policies provide clear procedures for reporting and addressing any violations.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Transfer</h2>
        <p style={paragraphStyle}>
          Transfer policies facilitate the acceptance of credits from other institutions. These guidelines ensure that students receive appropriate credit for previous coursework.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Tuition & Fees</h2>
        <p style={paragraphStyle}>
          Information on tuition rates, fee structures, and payment deadlines is provided to help students plan their finances effectively. Refund and appeal policies are also detailed.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Veterans Affairs</h2>
        <p style={paragraphStyle}>
          BYU offers specialized support for veteran students, including tailored admissions processes, financial aid, and dedicated resources to assist in their academic journey.
        </p>
      </section>
    </div>
  );
};

export default Policy;

