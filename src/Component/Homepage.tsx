import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h1>Welcome to My Website</h1>
        <p>This is a simple homepage styled with Bootstrap.</p>
      </main>
      <Footer />
    </div>
  )
}

export default Homepage
