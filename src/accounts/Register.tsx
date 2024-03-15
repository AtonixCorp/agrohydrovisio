// Register.tsx
import React, { useState } from 'react';
import './Register.css'; // Import the associated CSS file

// Define a functional component named Register
const Register: React.FC = () => {
  // Initialize state for form data with useState hook
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Destructure name and value from event target
    // Update the formData state with the new input value
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData); // Log the form data
  };

  // Render the component
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange} // Attach the input change handler
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange} // Attach the input change handler
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange} // Attach the input change handler
        />
        <button type="submit">Register</button> // Submit button for the form
      </form>
    </div>
  );
};

export default Register; // Export the Register component
