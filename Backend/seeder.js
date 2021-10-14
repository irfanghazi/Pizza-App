const mongoose = require("mongoose");
require("./connection/config");
require("colors");
const PizzaModel = require("./Models/pizzaModel");
const PizzaData = require("./data/pizza-data");

//import data

const importData = async () => {
  try {
    await PizzaModel.deleteMany(); // deleting any existing data
    const sampleData = PizzaData.map((pizza) => {
      return { ...pizza };
    });
    await PizzaModel.insertMany(sampleData); // inserting sample data into pizza model
    console.log("Data Imported".bgMagenta.black);
    // process.exit(); // exit with success
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    // process.exit(1); // exit withn failure
  }
};

module.exports = { importData };
