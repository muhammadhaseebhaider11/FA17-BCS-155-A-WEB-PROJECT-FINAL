/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  }
});
const Dish = mongoose.model("Dish", DishSchema);
module.exports = Dish;
