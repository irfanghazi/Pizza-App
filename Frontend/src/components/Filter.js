import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import { filterPizza } from "../redux/Action/pizzaAction";

const Filter = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="p-3 bg-light">
      <Row className="g-2">
        <Col md>
          <Form.Control
            type="text"
            placeholder="Search Pizza"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </Col>
        <Col md>
          <select
            class="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>veg</option>
            <option>non-veg</option>
          </select>
        </Col>
        <Col>
          <Button
            onClick={() => {
              dispatch(filterPizza(searchKey, category));
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
