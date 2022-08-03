

const user = require("../../Modal/registerScheema");

const handleOtp= async(req,res,next)=>{
    let date=new Date().getMinutes()
    const {email,otp} = req.body
    const findUser = await user.findOne({email:email})
     if(findUser.otpExpiresAt<date){
        res.send({error:"Otp has expired"})
     }
    else{
         
        if(findUser.password===otp){
            const update=await user.findOneAndUpdate({email:email},{$set:{verified:true}})
            res.send({message:"Update Your Profile"})

        }
        else{
        // const del=await user.findOneAndDelete({email: email})
    
            res.send({error: 'Wrong OTP'})
        }
    }

    next()
}
module.exports =handleOtp