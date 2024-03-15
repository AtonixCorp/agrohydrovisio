import React from 'react';

const SectionA: React.FC = () => {
  return (
    <div className="section">
      <h2>Want NASA data?</h2>
      <p>
        Check out our data catalog below or you can read about other
        open-government websites further down the page.
      </p>
      <a href="#data-catalog" className="cta-button">
        Go to the DATA CATALOG
      </a>
      <p>
        Know what you are looking for? Search for it in our catalog of tens of
        thousand datasets released to the public!
      </p>
    </div>
  );
};

export default SectionA;
