const mongoose = require("mongoose");
const userScheema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("Register", userScheema);
module.exports = User;
