const booking = require("../../Modal/bookingScheema");
const user = require("../../Modal/registerScheema");
const packages = require("../../Modal/packageScheema");

const handleBooking = async (req, res, next) => {
  const {
    bookedPackages,
    bookedBy
  } = req.body;
  if(!bookedPackages || !bookedBy){
    return res.send({error:"please fill all the fields"})
  }
  else{
  const finalPackage = await packages.findOne({ _id: bookedPackages });
  const finalUser = await user.findOne({ _id: bookedBy });
//   res.send(finalPackage)
  const Booking = new booking({
    bookedPackages: finalPackage,
    bookedBy:finalUser 
  })
  try {
    let savedFinalPackage = await Booking.save();
    return res.send({ message: "you have successfully selected your package" });
  } catch (error) {
    return res.send({error: "your package is not selected"});
  }
}
next();

};
module.exports = handleBooking;
