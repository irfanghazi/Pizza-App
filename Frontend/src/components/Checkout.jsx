import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../redux/Action/orderAction";

const CheckOut = ({ subTotal }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <>
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51JiD0xSFlhXQL1HBG17ZHn8b40A6QrLgx7NGuq6ZLpp8K9o069yjsYQhhWbAAWjFd8r1EpVYbWF2ddUegVZekzsN00rU3Vj50P"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default CheckOut;
