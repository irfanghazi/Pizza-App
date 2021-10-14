import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../redux/Action/pizzaAction";

import Loader from "../Loader";
import Success from "../Success";
import Error from "../Error";

const AddNewPizza = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, success, error } = pizzaState;

  const [name, setName] = useState();
  const [small, setSmall] = useState();
  const [medium, setMedium] = useState();
  const [large, setLarge] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      category,
      description,
      prices: {
        small: small,
        medium: medium,
        large: large,
      },
    };

    dispatch(addPizza(pizza));
  };

  return (
    <>
      <Form onSubmit={submitForm} className="p-5">
        {loading && <Loader />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New pizza added" />}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSmallPrice">
            <Form.Label>Small</Form.Label>
            <Form.Control
              type="text"
              placeholder="Small Price"
              value={small}
              onChange={(e) => setSmall(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridaMedium">
            <Form.Label>Medium</Form.Label>
            <Form.Control
              type="text"
              placeholder="Medium Price"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLarge">
            <Form.Label>Large</Form.Label>
            <Form.Control
              type="text"
              placeholder="Large Price"
              value={large}
              onChange={(e) => setLarge(e.target.value)}
            />
          </Form.Group>
        </Row>
        {/* <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group> */}
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            alt="pizza"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Add Image URL"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </>
  );
};
export default AddNewPizza;
