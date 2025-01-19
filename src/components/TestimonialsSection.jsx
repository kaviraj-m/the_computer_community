import React, { useEffect } from 'react';

const TestimonialsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  const sectionStyle = {
    backgroundColor: 'black', 
    color: 'white', 
    paddingTop: '80px', 
    paddingBottom: '100px', 
    textAlign: 'center',
    maxWidth: '1280px', 
    margin: '0 auto', 
    paddingLeft: '20px', 
    paddingRight: '20px', 
  };

  return (
    <section style={sectionStyle}>
      <div
        className="elfsight-app-54140cc8-4fac-4983-8c60-56a50f98b354"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
};

export default TestimonialsSection;
