import React, { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Pizza from "../components/Pizza";
import { getAllPizza } from "../redux/Action/pizzaAction";

const HomeScreen = () => {
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Error while fetching data</h1>
        ) : (
          <Row>
            <Filter />
            {pizzas.map((pizza) => (
              <Col md={3} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
