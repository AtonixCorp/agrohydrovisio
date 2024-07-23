import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faX } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/company/ofido-hub/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#0e76a8' }} // LinkedIn blue
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/ofidohub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#333' }} // GitHub black
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {/* If this link is not meant to navigate, consider using a button instead */}
        <a
          href="https://x.com/ofidohub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#000' }} // Example color
        >
          <FontAwesomeIcon icon={faX} size="2x" />
        </a>
      </div>
      <div className="sign-in">
        <a href="/sign-in">Sign In</a>

        <div className="sign-up">
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </header>
  )
}

export default Header
