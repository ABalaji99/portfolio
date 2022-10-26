import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function Navsection() {
  return (
    <header>
        <Container>
            <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">
                    BN
                </Navbar.Brand>
                <Nav.Link href="#/link">ABOUT</Nav.Link>
                <Nav.Link href="#/link">PROJECTS</Nav.Link>
                <Nav.Link href="#/link">TESTIMONIALS</Nav.Link>
                <Nav.Link href="#/link">CONTACT</Nav.Link>
            </Navbar>
        </Container>
    </header>
  )
}

export default Navsection