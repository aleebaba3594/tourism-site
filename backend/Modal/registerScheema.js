const mongoose = require("mongoose");
const userScheema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob:{
    type:Date,
  },
  password: {
    type: String,
    // required: true,
  },
  cell: {
    type: Number,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  pic: {
    type: String,
    default:"photo not found"
  },
  otpExpiresAt:{
    type:Date,
    default:01/22/2022
  },
  
 
  isAdmin: {
    type: Boolean,
    default: false,
  },
  verified:{
    type: Boolean,
    default: false,
  }
});
const User = mongoose.model("Register", userScheema);
module.exports = User;
