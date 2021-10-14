const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    varients: [],
    category: {
      type: String,
      required: true,
    },
    prices: [],
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PizzaModel = new mongoose.model("PizzaModel", pizzaSchema);
module.exports = PizzaModel;
