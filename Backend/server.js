require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
require("colors");
require("./connection/config");
const { importData } = require("./seeder");
const getAllPizza = require("./routes/pizzaRoutes");
const registration = require("./routes/userRoutes");
const login = require("./routes/userRoutes");
const placeorder = require("./routes/orderRoutes");
const addPizza = require("./routes/pizzaRoutes");
const getpizzabyid = require("./routes/pizzaRoutes");
const updatePizzabyid = require("./routes/pizzaRoutes");
const alluserorder = require("./routes/orderRoutes");
const deliverorder = require("./routes/orderRoutes");
const deleteuser = require("./routes/userRoutes");
importData();

const port = process.env.PORT || 8080;

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", getAllPizza);
app.use("/api", registration);
app.use("/api", login);
app.use("/api", placeorder);
app.use("/api", addPizza);
app.use("/api", getpizzabyid);
app.use("/api", updatePizzabyid);
app.use("/api", alluserorder);
app.use("/api", deliverorder);
app.use("/api", deleteuser);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/Frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello from Node Server");
  });
}

app.listen(port, () => {
  console.log(`server running on port ${port}`.bgYellow.black);
});
