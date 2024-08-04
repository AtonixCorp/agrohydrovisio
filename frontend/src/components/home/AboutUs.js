import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'; // Import your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        About Us
      </button>

      <div
        className={`modal fade ${show ? 'show' : ''}`}
        style={{ display: show ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ maxWidth: '20%' }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">About Us</h5>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="lead text-justify">
                At hydrovisio Technology, we are dedicated to revolutionizing
                the agricultural landscape through innovative and sustainable
                practices. Founded on the principles of environmental
                stewardship and resource optimization, our mission is to empower
                small farmers with cutting-edge solutions that enhance crop
                yield while minimizing resource consumption.
              </p>

              <p className="lead text-justify">
                With a strong emphasis on research and implementation, we
                specialize in optimizing irrigation, fertigation, and solar
                power systems tailored specifically for the needs of small-scale
                farmers. Our advanced technologies utilize the Internet of
                Things (IoT) to provide real-time data and insights, allowing
                farmers to make informed decisions that maximize efficiency and
                productivity.
              </p>

              <p className="lead text-justify">
                In addition to our work in irrigation and fertigation, we are
                pioneers in exploring the potential of photosynthesis
                enhancement technologies. By leveraging our expertise in this
                area, we aim to improve the natural processes that drive plant
                growth, ultimately leading to healthier crops and increased
                yields.
              </p>

              <p className="lead text-justify">
                At Agriculture Technology, we believe that sustainable
                agriculture is the key to addressing the challenges of food
                security and environmental conservation. Our commitment to
                innovation drives us to continually seek out new solutions that
                promote both economic viability for farmers and ecological
                balance for our planet.
              </p>

              <p className="lead text-justify">
                Join us on our journey to create a more sustainable agricultural
                future, where technology and nature work hand in hand to empower
                farmers and nourish communities worldwide.
              </p>
            </div>
            <ul className="list-unstyled d-flex mb-0">
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/company/ofido-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="1x"
                    className="fa-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://github.com/ofidohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="1x"
                    className="fa-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://x.com/ofidohub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="1x"
                    className="fa-icon"
                  />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://gitlab.com/ofidohubvm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitLab"
                >
                  <FontAwesomeIcon
                    icon={faGitlab}
                    size="1x"
                    className="fa-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
