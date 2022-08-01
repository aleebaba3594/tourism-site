
const user= require("../../Modal/registerScheema")

const handleAllUsers = async(req,res,next)=>{

    const result = await user.find({})
    console.log(result,"its a result");
    res.send(result);
    next()
}
module.exports = handleAllUsers