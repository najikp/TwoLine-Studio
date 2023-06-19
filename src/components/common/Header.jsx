import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../includes/images/twoline.jpg";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} style={{width:'70px',height:'100px'}} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#home">Commercial</Nav.Link>
            <Nav.Link href="#services">Residential</Nav.Link>
            <Nav.Link href="#contact">Press</Nav.Link>
            <Nav.Link href="#contact">Awards</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
