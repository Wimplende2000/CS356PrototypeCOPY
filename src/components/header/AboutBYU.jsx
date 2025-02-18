import React from 'react';

const AboutBYU = () => {
  // Container styles for a centered, readable layout
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
      <h1 style={titleStyle}>About BYU</h1>

      <section>
        <h2 style={sectionTitleStyle}>A Unique Environment</h2>
        <p style={paragraphStyle}>
          At BYU, students experience a distinctive blend of rigorous academics, spiritual growth, and vibrant community life. The university environment nurtures personal development, ethical leadership, and lifelong learning.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Accreditation</h2>
        <p style={paragraphStyle}>
          BYU is accredited by nationally recognized agencies, ensuring that the academic programs meet high standards of quality and rigor. This accreditation underpins the university’s commitment to excellence.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Administration</h2>
        <p style={paragraphStyle}>
          The administration at BYU is dedicated to creating a supportive and innovative academic atmosphere. University leaders work collaboratively to implement policies that foster student success and community engagement.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Advisement Resources</h2>
        <p style={paragraphStyle}>
          Comprehensive advisement resources are available to guide students throughout their academic journey. Advisors offer personalized support in course selection, career planning, and personal development.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Aims of a BYU Education</h2>
        <p style={paragraphStyle}>
          A BYU education is designed not only to develop intellectual capabilities but also to cultivate character, integrity, and a commitment to service. Students graduate as well-rounded individuals ready to contribute to society.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Careers &amp; Experiential Learning</h2>
        <p style={paragraphStyle}>
          BYU emphasizes practical, hands-on learning through internships, research projects, and career development programs. These opportunities help students build the skills and experiences necessary for professional success.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Catalog Archives</h2>
        <p style={paragraphStyle}>
          The Catalog Archives provide a historical record of BYU’s academic offerings and institutional changes. They serve as a valuable resource for understanding the evolution of the university’s educational programs.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Educator Requirements</h2>
        <p style={paragraphStyle}>
          Faculty at BYU are chosen based on stringent criteria, including advanced degrees, significant professional experience, and a passion for teaching. Continuous professional development ensures that educators remain at the forefront of their fields.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Harold B. Lee Library</h2>
        <p style={paragraphStyle}>
          The Harold B. Lee Library is a state-of-the-art facility offering an extensive collection of resources, cutting-edge technology, and quiet study spaces. It supports the research and academic needs of the entire BYU community.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Jerusalem Center</h2>
        <p style={paragraphStyle}>
          The Jerusalem Center provides students with a unique opportunity to immerse themselves in the rich history and culture of the Middle East. It acts as a bridge between academic study and real-world experiences in a historically significant region.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Limited Enrollment Programs</h2>
        <p style={paragraphStyle}>
          Some programs at BYU are offered as limited enrollment initiatives to provide a more personalized academic experience. These programs are designed to maximize interaction between students and faculty, ensuring focused attention and support.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Major Academic Plans</h2>
        <p style={paragraphStyle}>
          BYU offers a diverse array of major academic plans tailored to various interests and career paths. Each program is carefully structured to deliver a comprehensive education that prepares students for success in their chosen fields.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Mission of BYU</h2>
        <p style={paragraphStyle}>
          The mission of BYU is to provide a transformative education that integrates academic excellence, ethical values, and spiritual growth. This mission guides every aspect of university life and inspires students to serve others.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>STEM at BYU</h2>
        <p style={paragraphStyle}>
          BYU’s STEM programs are recognized for their innovation and rigor. With a strong emphasis on research, collaboration, and real-world problem solving, these programs prepare students for dynamic careers in science, technology, engineering, and mathematics.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>University Core Explained</h2>
        <p style={paragraphStyle}>
          The University Core curriculum at BYU ensures that all graduates have a broad base of knowledge, critical thinking skills, and a commitment to lifelong learning. This foundation supports academic growth and prepares students for a range of professional challenges.
        </p>
      </section>
    </div>
  );
};

export default AboutBYU;
