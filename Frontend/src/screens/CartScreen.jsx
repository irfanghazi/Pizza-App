import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BiMinusCircle } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../redux/Action/cartAction";
import Checkout from "../components/Checkout";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h1>My Cart</h1>
            <Row>
              {cartItems.map((item) => (
                <>
                  <Col Col md={7}>
                    <h5>{item.name}</h5>
                    <h6>Size:&nbsp;{item.varient}</h6>

                    <h6>
                      Price :&nbsp;{item.quantity} x{" "}
                      {item.prices[0][item.varient]} = &nbsp;{item.price}
                    </h6>
                    <h6>
                      Quantity: &nbsp;
                      <BiMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />
                      &nbsp;{item.quantity} &nbsp;
                      <BiPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      />
                    </h6>
                  </Col>
                  <Col md={5}>
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ width: "90px", height: "90px" }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <h1>Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>Rs {subTotal}</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
