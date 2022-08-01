const mongoose = require("mongoose");
const packagesScheema = mongoose.Schema({
  id: {
    type: Number,
  },
  categories: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  packagePrice: {
    type: Number,
    required: true,
  },
  packageDes: {
    type: String,
    required: true,
  },
  packagePic: {
    type: String,
    default:"photo not found",
  },
  expire: {
    type: String,
    required: true,
  },

  validFrom: {
    type: String,
    required: true,
  },
});
const Packages = mongoose.model("Package", packagesScheema);
module.exports = Packages;
