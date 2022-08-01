

const packages = require("../../Modal/packageScheema")
const handleAllPackages = async (req,res,next)=>{

    const result = await packages.find({})
    res.send(result);

    next()
}
module.exports = handleAllPackages