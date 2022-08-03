
const bcrypt = require("bcrypt");

const user = require("../../Modal/registerScheema");
const handleUpdatePassword = async(req,res,next)=>{

    let {email,password}= req.body
      password = bcrypt.hashSync(password, 12);
    let updatePassword = {password:password}
    try {
        const userFound=await user.findOneAndUpdate({email:email}, updatePassword)
      res.send({message:"Password is Updated Successfully"})
       
      } catch (error) {
        res.send({error:"Password Not Updated"
      })
    }



    next()
}
module.exports = handleUpdatePassword