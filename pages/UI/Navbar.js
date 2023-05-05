import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="/book.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            BOOK LIBRARY
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/book">Categories</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;  
