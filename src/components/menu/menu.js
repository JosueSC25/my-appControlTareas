import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';

function Menu() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">GALILEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">TASK</Nav.Link>
            <Nav.Link href="#link">GOALS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;