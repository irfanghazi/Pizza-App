import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Success from "../components/Success";
import Error from "../components/Error";
import { userRegister } from "../redux/Action/userAction";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.userRegisterReducer);
  const { loading, success, error } = registerState;

  const registerHandler = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      const user = { name, email, password, confirmPassword };
      dispatch(userRegister(user));
    }
  };
  return (
    <>
      <Container>
        {loading && <Loader />}
        <Row>
          <Col md={6} style={{ margin: "auto" }}>
            {success && <Success success="Register successfully" />}
          </Col>
        </Row>
        {error && <Error error="Something went wrong" />}

        <Row>
          <Col md={6} style={{ margin: "auto" }}>
            <h2>Register</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={registerHandler}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterScreen;
