
const mongoose= require('mongoose');
const db=process.env.MONGO_URL


const db_connect=async ()=>{
   try {
   await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected");
   } catch (error) {
    console.log(error,"db not connected");
    
   }
}
module.exports = db_connect