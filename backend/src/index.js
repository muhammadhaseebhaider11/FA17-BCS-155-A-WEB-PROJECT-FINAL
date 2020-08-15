require("dotenv").config();
require("./Database/DatabaseConnection");
const express = require("express");
const cors = require('cors')
const app = express();
const Dish = require("./Database/DishSchema");
const adminRoutes = require('./routes/adminRoutes')
const Customer = require("./Database/CustomerSchema");
app.use(express.json())
app.use(cors())
app.use(adminRoutes)

app.get("/", function (req, res) {
  res.send("Captain_cooks");
});

app.post("/dish", async function (req, res) {
  try {
    const newDish = new Dish(req.body);
    await newDish.save();
    res.send(newDish)
  } catch (error) {
    res.status(400).send(error.message);
  }
});
app.get("/dish", async function (req, res) {
 try {
   let data = await Dish.find()
   res.send(data)
 } catch (error) {
  res.status(400).send(error.message);
 }
});

app.delete("/dish", async function (req, res) {
  try {
    // res.send(req.body.name)
   let data = await Dish.remove(req.body)
   res.send(data)
  } catch (error) {
    res.status(400).send(error.message)
  }
});
app.patch("/dish/:id",async function (req, res) {
  const update = Object.keys(req.body);
  
  try {
    const data = await Dish.findById(req.params.id);
    if (!data) {
      return res.status(404).send();
    }
    update.forEach((single) => {
      data[single] = req.body[single];
    });
    await data.save();
    res.send(data);
  } catch (error) {
    console.log("The error");
    res.status(400).send(error.message);
  }
});


app.get("/customer",async function (req, res) {
  try {
    let data = await Customer.find()
    res.send(data)
  } catch (error) {
   res.status(400).send(error.message);
  }
});
app.post("/customer", async function (req, res) {
  try {
    const newCust = new Customer(req.body);
    await newCust.save();
    res.send(newCust);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log("SERVER is Up and Running On port " + port);
});