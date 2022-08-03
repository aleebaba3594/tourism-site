
// const { findOne } = require("../../Modal/registerScheema");
const user = require("../../Modal/registerScheema");

const handleProfile = async (req, res, next)=>{
    const {email,name,password,pic,cell,address,dob} = req.body
    if(!email ){
        res.send({error:"Please Fill All The Fields"})
    }
    else{
const newuser={email:email,name:name,password:password,pic:pic,cell:cell,address:address,dob:dob} 
// const update=await user.findOneAndUpdate({email:email},{$set:{verified:true}})
try {
            const update=await user.findOneAndUpdate({email:email},newuser)
            
            res.send({message:"Profile Updated"})
        } catch (error) {
            res.send({error:"Profile Not Updated"})
            
        }


//     const findUser = await user.findOneAndUpdate({email: email})
//     const User = new user({
//         email: email,
//         name: name, 
//         cell:cell,
//         address: address,
//         password: password,
//         pic:pic
//     })
//     try {
//         const saveData = await User.save()
//         res.send({message:"Profile saved successfully"})
//     } catch (error) {
//         res.send({error:"Error saving profile"})
        
//     }

}

    next()
}
module.exports = handleProfile
