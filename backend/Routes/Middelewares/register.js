const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
let randomCode = nanoid(6).toString();
const user = require("../../Modal/registerScheema");
const nodemailer = require("nodemailer");

const handleRegister = async (req, res, next) => {
  const { email } = req.body;
  const sameEmail = await user.findOne({ email: email });
  if (sameEmail) {
    res.send({ error: "User already registered" });
  } else {
    let transporter = await nodemailer.createTransport({
      service: process.env.type,
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.myMail,
        pass: process.env.myPass,
      },
    });
    let SRMails = await transporter.sendMail({
      from: process.env.myMail,
      to: email,
      subject: process.env.subject,
      html: `<p>Your Verification Code For Holiday Planet is<br/><span style="color:blue"><b>${randomCode}</b></span></p>this code will be <span style="color:red"><b>expire after 1 minute</b></span>`,
    });

    transporter.sendMail(SRMails, (error, info) => {
      if (error) {
        console.log(error, "mail not send");
      } else {
        console.log("mail sent successfully");
      }
    });
    // const User=await user.findOneAndUpdate({email:email},{$set:{otpExpiresAt:Date.now()+3600}})
    let date=new Date().getMinutes()+1
    
    let User = new user({
      email: email,
      password: randomCode,
      otpExpiresAt: date,
    });
    try {
      const saveData = await User.save();
      res.send({ message: "OTP sent to your mail" });
    } catch (error) {
      res.send({ error: "Try Again to Sign Up" });
    }
  }
  // let { name, email, password, isAdmin } = req.body;
  // if (!name || !email || !password) {
  //   return res.sendStatus(422).json({ error: "please fill all the fields" });
  // } else {
  //   let sameEmail = await user.findOne({ email: email });
  //   if (sameEmail) {
  //     return res.send({ error: "your email is already registered" });
  //   } else {
  //     password = bcrypt.hashSync(password, 12);
  //   }
  // }
  // const User = new user({
  //   name,
  //   email,
  //   password,
  //   isAdmin,
  // });
  // try {
  //   let saveData = await User.save();
  //   res.send({ message: "signup successfull" });

  //   console.log(saveData, "save to db data");
  // } catch (error) {
  //   console.log(error, "data not saved to db");
  //   res.send(error);
  // }
  next();
};
module.exports = handleRegister;
