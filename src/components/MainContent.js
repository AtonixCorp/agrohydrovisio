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
      <div
        style={{
          border: '2px solid #000',
          padding: '20px',
          margin: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <div className="header-container">
          <h1
            style={{
              color: '#0099ff',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Welcome to OfidoHub Technology Research
          </h1>
          <p
            id="welcomeMessage"
            style={{
              color: '#00415a',
              fontSize: '1.2em',
              lineHeight: '1.5',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'justify',
            }}
          >
            We're passionate about pushing the boundaries of technology. Our
            intensive research drives innovation, allowing us to create flexible
            software solutions that cater to your unique needs. Whether you are
            a startup, a growing business, or an established enterprise, our
            developer teams are here to help you model success using
            cutting-edge technologies.
          </p>
        </div>
      </div>
      <div
        className="app-names"
        style={{ maxWidth: '300px', margin: '0 auto' }}
      >
        <div
          style={{
            border: '2px solid #000',
            padding: '20px',
            margin: '10px 0',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          Project
        </div>
        <div
          style={{
            border: '2px solid #000',
            padding: '20px',
            margin: '10px 0',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          Developers
        </div>
        <div
          style={{
            border: '2px solid #000',
            padding: '20px',
            margin: '10px 0',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          Research
        </div>
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
