

const user = require("../../Modal/registerScheema");

const handleRegister = require("./register");
const handleResetOtp = async(req, res, next) => {

    const {email} = req.body
    let del= await user.findOneAndDelete({email: email})
    await handleRegister(req, res,next)
    next()
}
module.exports = handleResetOtp