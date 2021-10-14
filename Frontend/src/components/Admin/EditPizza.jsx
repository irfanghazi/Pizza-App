import React, { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getPizzaById, updatePizzaById } from "../../redux/Action/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Error from "../Error";

const EditPizza = ({ match }) => {
  const dispatch = useDispatch();
  const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer);
  const { pizza } = getPizzaByIdState;
  const updatePizzaByIdState = useSelector(
    (state) => state.updatePizzaByIdReducer
  );
  const { updateLoading, updateError } = updatePizzaByIdState;

  const [name, setName] = useState();
  const [small, setSmall] = useState();
  const [medium, setMedium] = useState();
  const [large, setLarge] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaId) {
        setName(pizza.name);
        setCategory(pizza.category);
        setSmall(pizza.prices[0]["small"]);
        setMedium(pizza.prices[0]["medium"]);
        setLarge(pizza.prices[0]["large"]);
        setImage(pizza.image);
        setDescription(pizza.description);
      } else {
        dispatch(getPizzaById(match.params.pizzaId));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaId));
    }
  }, [pizza, dispatch]);

  const submitEditForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: match.params.pizzaId,
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

    dispatch(updatePizzaById(updatedPizza));
  };
  return (
    <div>
      {updateLoading && <Loader />}
      {updateError && <Error error="Something went wrong" />}

      <Form onSubmit={submitEditForm} className="p-5">
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

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            alt="PizzaImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Add Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditPizza;
