import React from "react";
import { Navbar } from 'react-bootstrap';


function Nav({currentPage, handlePageChange}) {

    return (
      <Navbar bg="secondary" variant="dark" expand = "lg">
          <Navbar.Brand href="#about_Me" className="mx-3"><h1>Keith Williams</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3"/>
            <Navbar.Collapse id="basic-navbar-nav" className="mx-3">
              <Nav className="me-auto">
                <Nav.Link href="#about_Me" onClick ={() => handlePageChange('About')} className = {currentPage === 'About' ? 'navActive' : 'nav-link'}> About Me</Nav.Link>
                <Nav.Link href="#portfolio" onClick ={() => handlePageChange('Portfolio')} className = {currentPage === 'Portfolio' ? 'navActive' : 'nav-link'}>Portfolio</Nav.Link>
                <Nav.Link href="#resume" onClick ={() => handlePageChange('Resume')} className = {currentPage === 'Resume' ? 'navActive' : 'nav-link'}>Resume</Nav.Link>
                <Nav.Link href="#contact" onClick ={() => handlePageChange('Contact')} className = {currentPage === 'Contact' ? 'navActive' : 'nav-link'}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default Nav;