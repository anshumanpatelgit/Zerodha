import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar expand="lg shadow p-3 mb-5 bg-white rounded" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href = "/"><img src="media/logo.svg" style={{width: "20%"}} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link  className= "nav-link" href ="/about">About</Nav.Link>
          <Nav.Link className= "nav-link"href ="/products">Products</Nav.Link>
          <Nav.Link className= "nav-link"href ="/pricing">Pricing</Nav.Link>
          <Nav.Link className= "nav-link" href ="/support">Support</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  );
}

export default NavBar;
