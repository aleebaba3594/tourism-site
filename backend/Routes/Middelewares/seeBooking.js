
const booking = require("../../Modal/bookingScheema");

const handleSeeBooking = async(req,res,next)=>{

    const result = await booking.find()
    .populate("bookedBy bookedPackages","name email packageName packagePrice validFrom expire")
    


        res.send(result)
    
        next()
    
}
module.exports = handleSeeBooking