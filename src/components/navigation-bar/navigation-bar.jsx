import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "../../index.scss";

import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar expand="lg">
      <Container className="navbar">
        <Navbar.Brand as={Link} to="/" className="logo">
          myFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navigate-link">
              Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={Link}
              to={`/users/${encodeURIComponent(user._id)}`}
              className="navigate-link"
            >
              Profile
            </Nav.Link>
            <Nav.Link
              as={Button}
              to="/"
              onClick={onLoggedOut}
              className="logout"
            >
              Logout
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};
