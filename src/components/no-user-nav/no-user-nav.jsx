import "bootstrap/dist/css/bootstrap.min.css";

import "../../index.scss";

import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NoUserNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Signup/Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
