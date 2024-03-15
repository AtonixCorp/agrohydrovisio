// NewsLetter.tsx
import React, { useState } from 'react';
import './Newsletter.css'; // Import the associated CSS file

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic (e.g., send email to the server)
    console.log('Subscribed with email:', email);
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
