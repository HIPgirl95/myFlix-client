import "bootstrap/dist/css/bootstrap.min.css";

import "../../index.scss";

import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { searchBar } from "./search";

export const NavigationBar = ({ user, onLoggedOut, movie }) => {
  return (
    <Navbar expand="lg">
      <Container className="navbar">
        <Navbar.Brand as={Link} to="/" className="logo">
          Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navigate-link">
              Movies
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/users/${encodeURIComponent(user._id)}`}
              className="navigate-link"
            >
              Profile
            </Nav.Link>
            <searchBar movie={movie} />
            <Nav.Link
              as={Button}
              to="/"
              onClick={onLoggedOut}
              className="logout"
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
