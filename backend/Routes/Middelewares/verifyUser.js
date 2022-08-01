

var jwt = require("jsonwebtoken");
const user = require("../../Modal/registerScheema");

const handleVerify = (req,res,next)=>{
    let token=req.body.token;
    if(!token){
         res.send("please log in first")
    }
    jwt.verify(token,"secrettokenTwo",async(err,success)=>{
        if(err){
           return res.send("login properly");
        }
        else{
          await  user.findById({_id:success.id}).then(Userdata=>{
            req.user=Userdata
          })
        }
next()
    })
}
module.exports=handleVerify