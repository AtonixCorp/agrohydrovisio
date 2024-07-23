import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MainContent.css'

function MainContent() {
  const navigate = useNavigate()

  const redirectToPostCreation = () => {
    navigate('/create-post')
  }

  return (
    <main>
      <div className="header-container">
        <h1
          style={{
            color: '#0099ff', // Example: Blue color for the header
            textAlign: 'center', // Center-align the text
            marginBottom: '20px', // Add some space below the header
          }}
        >
          Welcome to OfidoHub Technology Research
        </h1>
        <p
          id="welcomeMessage"
          style={{
            color: '#00415a', // Darker text color for the paragraph
            fontSize: '1.2em', // Slightly larger font size
            lineHeight: '1.5', // Add more space between lines for readability
            maxWidth: '600px', // Max width to make the text easier to read
            margin: '0 auto', // Center the paragraph by setting auto margins
            textAlign: 'justify', // Justify the text for a cleaner look
          }}
        >
          We're passionate about pushing the boundaries of technology. Our
          intensive research drives innovation, allowing us to create flexible
          software solutions that cater to your unique needs. Whether you’re a
          startup, a growing business, or an established enterprise, our
          developer teams are here to help you model success using cutting-edge
          technologies.
        </p>
      </div>
      <div className="app-names">
        <div>Project</div>
        <div>Developers</div>
        <div>Research</div>
      </div>

      <button
        id="createPostBtn"
        className="button-link"
        style={{ display: 'none' }}
        onClick={redirectToPostCreation}
      >
        Create Post
      </button>
    </main>
  )
}

export default MainContent
