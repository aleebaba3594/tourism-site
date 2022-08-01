const mongoose = require("mongoose");
let myType = mongoose.Types.ObjectId;
const bookingScheema = mongoose.Schema(
  {
    bookedPackages: {
      type: myType,
      ref: "Package",
    },
    bookedBy: {
      type: myType,
      ref: "Register",
    },
    payment:{
        default: false
    }
  },
  { timestamps: true }
);
const booking = mongoose.model("booking", bookingScheema);
module.exports = booking;
