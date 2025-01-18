import React from 'react';

const TestimonialsSection = () => {
  const sectionStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '50px 0',
    textAlign: 'center',
  };

  const blockquoteStyle = {
    fontStyle: 'italic',
    marginBottom: '20px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: 'gold' }}>What Our Customers Say</h2>
      {[
        { name: 'kanmani', feedback: 'This tool made building my dream PC so easy!' },
        { name: 'loges', feedback: 'A seamless experience with great compatibility checks.' },
      ].map((testimonial, index) => (
        <blockquote key={index} style={blockquoteStyle}>
          <p>"{testimonial.feedback}"</p>
          <footer>- {testimonial.name}</footer>
        </blockquote>
      ))}
    </section>
  );
};

export default TestimonialsSection;
