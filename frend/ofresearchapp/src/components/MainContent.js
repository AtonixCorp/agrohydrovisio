import React from 'react'
import './MainContent.css'

function redirectToPostCreation() {
  // Define or import your redirectToPostCreation function
  console.log('Redirecting to post creation...')
}

function MainContent() {
  return (
    <main>
      <h1>Welcome to OfidoHub Technology Research!</h1>
      <p id="welcomeMessage">
        Explore and showcase your innovative projects here.
      </p>
      <div className="app-names">
        <div>Project</div>
        <div>Meet</div>
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
