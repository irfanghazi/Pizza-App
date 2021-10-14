import React from "react";
import { Container, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../redux/Action/userAction";

const NavTab = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  const userState = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userState;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="images/pizza_logo.jpg"
              alt="logo"
              style={{ width: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <>
                  <LinkContainer to="/">
                    <NavDropdown
                      title={currentUser.name}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item>
                        <LinkContainer to="order">
                          <Nav.Link>Order</Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={() => dispatch(logOutUser())}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="Login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="Register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
              <LinkContainer to="Cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTab;
