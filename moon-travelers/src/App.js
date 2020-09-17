import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import styled from 'styled-components'
import Footer from './components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Navigation = styled.div`
  display: flex;
  text-align: left;
  font-size: 1rem;
  align-items: left;
  padding: 1.75%;
  text-shadow: .5px .5px gray
`

const Social = styled.a`
  padding: 10px;
  color: #a582b8;
  @media (max-width: 500px) {
    padding: 5px;
  }
`

function App() {
  return (
    <div className="App">
      <Container className="p-0" fluid={true}>
        <Navigation>
          <Navbar expand="lg" >
            <Navbar.Toggle className="border-0 navbar-dark" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto"  >
                <Link style={{ color: "white" }} className="nav-link" to="/" >Home</Link>
                <a style={{ color: "white" }} className="nav-link" href="#contact" >Contact/Booking</a>
              </Nav>
              <div>
                <Social href="https://www.facebook.com/Moon-Travelers-Tarot-220673835218164" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></Social>
                <Social href="https://www.instagram.com/moontravelers/" target=" _blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Social>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Navigation>

        <Route path="/" exact render={() => <HomePage />} />

        <div id="contact">
          <ContactPage />
        </div>

        <Footer />
      </Container>

    </div>
    
  );
}

export default App;
