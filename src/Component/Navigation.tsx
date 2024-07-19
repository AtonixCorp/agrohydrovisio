import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
// Optionally import Link from react-router-dom
// import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ofidotechblog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Use Link components if using React Router, otherwise use Nav.Link */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#developers">Developers</Nav.Link>
            <Nav.Link href="#tech-edu">Tech Edu</Nav.Link>
            {/* For React Router, replace href with to in Nav.Link and use as={Link} */}
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/developers">Developers</Nav.Link>
                <Nav.Link as={Link} to="/tech-edu">Tech Edu</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
