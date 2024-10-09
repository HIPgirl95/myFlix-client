import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainView } from "../main-view/main-view";
import "./index.scss";

import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Movies App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link hrefLang="https://hipgirl95.github.io/portfolio-website/">
              Portfolio
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
