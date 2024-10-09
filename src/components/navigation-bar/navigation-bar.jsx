import "bootstrap/dist/css/bootstrap.min.css";

import "../../index.scss";

import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link as={Link} to={"/"}>
              Profile
            </Nav.Link>
            <Nav.Link as={Button} to="/" onClick={onLoggedOut}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
