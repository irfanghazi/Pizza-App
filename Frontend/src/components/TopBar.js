import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from "react-icons/md";

function TopBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              <h6 className="text-light">
                <MdLocalOffer className="text-warning"></MdLocalOffer>&nbsp;
                &nbsp; Free Home Delivery Above Rs 500
              </h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto p-3">
                <LinkContainer to="/">
                  <Nav.Link>
                    <h5>Home</h5>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/About">
                  <Nav.Link>
                    <h5>About Us</h5>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="Contact">
                  <Nav.Link>
                    {" "}
                    <h5>Contact</h5>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="Policy">
                  <Nav.Link>
                    <h5>Terms And policy</h5>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default TopBar;
