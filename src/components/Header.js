import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Header(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={props.mode}
        className={`text-${props.mode === "light" ? "dark" : "light"} text-${
          props.clr === "light" ? "yellow" : "blue"
        }`}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
          >
            {props.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                as={Link}
                to="/about"
                className={`text-${props.mode === "light" ? "dark" : "light"}`}
              >
                About
              </Nav.Link>
              <Nav.Link
                to="#pricing"
                className={`text-${props.mode === "light" ? "dark" : "light"}`}
              >
                Pricing
              </Nav.Link>
              <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                className={`text-${props.mode === "light" ? "dark" : "light"}`}
              >
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link to="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} to="#memes">
                Dank memes
              </Nav.Link> */}
              <Form.Check
                type="switch"
                id="custom-switch"
                label={props.txt1}
                className="me-3"
                onClick={props.toggleMode1}
              />
              <Form.Check
                type="switch"
                id="custom-switch"
                label={props.txt}
                onClick={props.toggleMode}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.number
// }

// We can also set default propTypes

// Header.defaultProps = {
//   title : "Set title here"
// }
