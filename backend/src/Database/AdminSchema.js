/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpSchema = new Schema({
  password: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  }
});
const Admin = mongoose.model("Admin", EmpSchema);
module.exports = Admin;
