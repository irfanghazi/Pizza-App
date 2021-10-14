import React, { useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrdersList from "../components/Admin/OrdersList";
import PizzasList from "../components/Admin/PizzasList";
import UsersList from "../components/Admin/UsersList";
import EditPizza from "../components/Admin/EditPizza";

const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h2 className="text-center bg-dark text-light p-3">Admin Panel</h2>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/pizzaslist")}>
                All Pizzas
              </Button>
              <Button onClick={() => history.push("/admin/orderslist")}>
                All Orders
              </Button>
              <Button onClick={() => history.push("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/admin" component={OrdersList} exact />
              <Route path="/admin/userlist" component={UsersList} exact />
              <Route path="/admin/pizzaslist" component={PizzasList} exact />
              <Route path="/admin/orderslist" component={OrdersList} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
            </Switch>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;
