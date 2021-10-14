import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Action/cartAction";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const addToCartHandeler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <div>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "200px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option key={varient} value={varient}>
                      {varient}
                    </option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                  <option></option>
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizza.prices[0][varient] * quantity}</Col>
            <Col>
              <Button onClick={addToCartHandeler}>Add to cart </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Model for pop-up */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div>
            <Modal.Title>{pizza.name}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img variant="top" src={pizza.image} />
          </div>
          <h5>Description</h5>
          <div>{pizza.description}</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Pizza;
