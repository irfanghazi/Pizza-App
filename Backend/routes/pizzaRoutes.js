const express = require("express");
const PizzaModel = require("../Models/pizzaModel");
const router = express.Router();

router.get("/getAllPizza", async (req, res) => {
  try {
    const pizzas = await PizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/addPizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    newPizza = new PizzaModel({
      name: pizza.name,
      varients: ["small", "medium", "large"],
      category: pizza.category,
      prices: [pizza.prices],
      image: pizza.image,
      description: pizza.description,
    });

    await newPizza.save();
    res.send("New Pizza added ");
  } catch (error) {
    res.send(error);
  }
});

router.post("/getpizzabyid", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await PizzaModel.findOne({ _id: pizzaId });
    res.send(pizza);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatePizzabyid", async (req, res) => {
  const { updatedPizza } = req.body;
  try {
    const pizza = await PizzaModel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.category = updatedPizza.category),
      (pizza.image = updatedPizza.image),
      (pizza.prices = [updatedPizza.prices]);
    (pizza.description = updatedPizza.description), await pizza.save();
    res.send("Pizza Updated Successfully");
  } catch (error) {
    res.send(error);
  }
});

router.post("/deletePizza", async (req, res) => {
  try {
    const { pizzaId } = req.body;
    await PizzaModel.findOneAndDelete({ _id: pizzaId });
    res.send("Pizza deleted");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
