const handleRegister = require("./Middelewares/register");
const handleLogin = require("./Middelewares/login");
const handleAllUsers = require("./Middelewares/allUsers");
const handlePackages = require("./Middelewares/packages");
const handleAllPackages = require("./Middelewares/allPackages");
const handleBooking = require("./Middelewares/booking");
const handleSeeBooking = require("./Middelewares/seeBooking");
 const handleVerify = require("./Middelewares/verifyUser")
const express = require("express");
const route = express.Router();


route.post("/register", handleRegister);
route.post("/login", handleLogin);
route.get("/allUsers", handleAllUsers);
route.post("/packages", handlePackages);
route.get("/allPackages", handleAllPackages);
route.post("/booking", handleBooking);
route.post("/seeBooking",handleVerify, handleSeeBooking);



module.exports = route;
