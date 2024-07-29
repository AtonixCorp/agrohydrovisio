import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="container my-5">
      <section className="intro-section bg-light p-5 rounded mb-4">
        <h2 className="lead">Discover, Learn, and Connect</h2>
        <p>
          {' '}
          <strong>
            We’re passionate about all things tech. Whether you’re a seasoned
            developer, an AI enthusiast, or just curious about the latest
            innovations, you’ve come to the right place. Here’s what awaits you:
          </strong>
        </p>
      </section>

      <section
        className="topics-section bg-white p-5 rounded mb-4 shadow-sm"
        style={{
          backgroundColor: 'var(--bs-body-bg)',
          color: 'var(--bs-secondary-color)',
        }}
      >
        <h2 className="mb-4">Explore Cutting-Edge Topics</h2>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Quantum Computing</h3>
          <p>
            <strong>
              Dive into the mind-bending world of qubits, superposition, and
              quantum algorithms. Explore how quantum computers are reshaping
              the future of computation.
            </strong>
          </p>
        </section>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Artificial Intelligence</h3>
          <p>
            🤖{' '}
            <strong>
              {' '}
              From neural networks to computer vision, we cover it all. Learn
              how AI is transforming industries and shaping our future.
            </strong>
          </p>
        </section>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Hardware Computing</h3>
          <p>
            🔌{' '}
            <strong>
              {' '}
              From CPUs to GPUs, from Arduino to Raspberry Pi, we unravel the
              mysteries of hardware. Get hands-on tips, reviews, and DIY
              projects.
            </strong>
          </p>
        </section>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Data Science</h3>
          <p>
            📊{' '}
            <strong>
              {' '}
              Unleash the power of data! Learn about machine learning, data
              visualization, and predictive analytics. Discover the stories
              hidden in the numbers.
            </strong>
          </p>
        </section>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Web Development</h3>
          <p>
            🌐{' '}
            <strong>
              HTML, CSS, JavaScript, and beyond. Whether you’re a front-end
              wizard or a back-end maestro, we’ve got resources to level up your
              web game.
            </strong>
          </p>
        </section>

        <section
          className="topics-grid"
          style={{
            backgroundColor: 'var(--bs-secondary-bg)',
            color: 'var(--bs-secondary-color)',
          }}
        >
          <h3 className="text-primary">Cybersecurity</h3>
          <p>
            🔐{' '}
            <strong>
              {' '}
              Lock down your digital fortress. Explore encryption, ethical
              hacking, and best practices to keep your data safe.
            </strong>
          </p>
        </section>
      </section>

      <section className="community-section bg-light p-5 rounded mb-4">
        <h2 className="mb-4">Connect with Like-Minded Techies</h2>
        <p>
          👥 <strong>Community Forums:</strong> Engage in lively discussions,
          ask questions, and share your insights. Our community of tech
          enthusiasts is here to support you.
        </p>
        <p>
          📚 <strong>Tutorials and Guides:</strong> Step-by-step tutorials, code
          snippets, and best practices. Learn at your own pace and conquer new
          skills.
        </p>
        <p>
          📰 <strong>Tech News:</strong> Stay updated with the latest buzz. From
          AI breakthroughs to blockchain revolutions, we’ve got your daily dose
          of tech headlines.
        </p>
      </section>

      <section className="journey-section bg-white p-5 rounded shadow-sm">
        <h2 className="mb-4">Your Journey Starts Here</h2>
        <p>
          Whether you’re a seasoned pro or a curious beginner,{' '}
          <strong>[Your Software Name]</strong> is your tech compass. Buckle up,
          explore, and let’s geek out together!
        </p>
        <p>
          👉{' '}
          <a href="#" className="btn btn-primary">
            Start Exploring
          </a>{' '}
          👈
        </p>
      </section>
    </main>
  );
};

export default MainContent;
