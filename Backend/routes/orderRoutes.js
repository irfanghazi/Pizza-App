const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51JiD0xSFlhXQL1HB33FfkeAgUDC3w0KUjb1t0Y7lvfNkJrhJBFTKQkKUrdT9UYPBKiPugfoVhErvYC0qwLrAVVqN00E7k0JtRS"
);
const OrderModel = require("../Models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems, email } = req.body;
  debugger;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "INR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const newOrder = new OrderModel({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          house: token.card.address_line2,
          city: token.card.address_city,
          country: token.card.address_country,
          pin: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();

      res.send("Payment success");
    } else {
      res.send("Payment Failed");
    }
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

router.post("/userorder", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await OrderModel.find({ userId }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});
router.post("/deliverorder", async (req, res) => {
  const { orderId } = req.body;
  try {
    const order = await OrderModel.findOne({ _id: orderId });
    order.isDelivered = true;
    await order.save();
    res.status(200).send("Order deivered successfully");
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

module.exports = router;
