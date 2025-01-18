import React from 'react';

const CategoriesSection = () => {
  const sectionStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '50px 0',
    textAlign: 'center',
  };

  const categoryStyle = {
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: 'gold',
    border: 'none',
    padding: '10px 20px',
    color: 'black',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: 'gold' }}>Explore PC Categories</h2>
      <div className="categories-list">
        {[
          { title: 'Gaming PCs', description: 'High-performance systems for gaming enthusiasts.', link: '/gaming' },
          { title: 'Workstations', description: 'Reliable machines for productivity and content creation.', link: '/workstation' },
          { title: 'Budget PCs', description: 'Affordable options without compromising quality.', link: '/budget' },
        ].map((category, index) => (
          <div key={index} style={categoryStyle}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button style={buttonStyle} onClick={() => window.location.href = category.link}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
