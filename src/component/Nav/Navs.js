import React from "react";
import {Navbar , Nav , Container } from "react-bootstrap"
import { Form, FormControl, Button } from "react-bootstrap";

import "./Nav.css"

const Navs = ()=> {
    return(
        <Navbar  expand="lg" fixed="top">
          <Container>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <img src="logo.png" title="logo"/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">about us</Nav.Link>
      <Nav.Link href="#link">explore food</Nav.Link>
      <Nav.Link href="#link">review</Nav.Link>
      <Nav.Link href="#link">faq</Nav.Link>

      
    </Nav>
    <Nav>
    <Nav.Link id="lastname">32343768</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navs;