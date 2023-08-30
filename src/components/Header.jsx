import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary nav"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#start" className="header-link">
          Rafael Moreira
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutMe" className="header-link">
              About me
            </Nav.Link>
            <Nav.Link href="#skills" className="header-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="header-link">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
