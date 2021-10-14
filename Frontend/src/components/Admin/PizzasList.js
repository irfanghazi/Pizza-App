import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

import { deletePizza, getAllPizza } from "../../redux/Action/pizzaAction";
import { useSelector, useDispatch } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const PizzasList = () => {
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { pizzas } = pizzaState;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizza());
  }, [dispatch]);
  return (
    <>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Image</th>
            <th>Pizza Name</th>
            <th>Prices</th>
            <th>category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr>
              <td>
                <img
                  src={pizza.image}
                  alt="logo"
                  width="100px"
                  height="100px"
                />
              </td>
              <td>{pizza.name}</td>
              <td>
                Small: &nbsp;{pizza.prices[0]["small"]} <br />
                Medium:&nbsp;{pizza.prices[0]["medium"]}
                <br />
                Large:&nbsp;{pizza.prices[0]["large"]}
              </td>
              <td>{pizza.category}</td>
              <td>
                <Link to={`/admin/editpizza/${pizza._id}`}>
                  <BiEdit style={{ cursor: "pointer", marginLeft: "20px" }} />
                </Link>
                &nbsp; &nbsp;
                <AiFillDelete
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => dispatch(deletePizza(pizza._id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PizzasList;
