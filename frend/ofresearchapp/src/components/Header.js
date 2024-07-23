import React, { useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Header() {
  const [showContactInfo, setShowContactInfo] = useState(false)

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo)
  }

  return (
    <header>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/company/ofido-hub/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#0e76a8' }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/ofidohub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', color: '#333' }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        {/* Removed the link and icon for faX */}
      </div>
      <nav>
        <ul>
          <li>
            <a href="/home">Docs</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">Community</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleContactInfo} className="contact-toggle">
        Contact Us
      </button>
      {showContactInfo && (
        <div className="contact">
          <div className="contact-info"></div>
        </div>
      )}
    </header>
  )
}

export default Header
