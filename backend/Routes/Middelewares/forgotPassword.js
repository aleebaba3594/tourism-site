const user = require("../../Modal/registerScheema");
const { nanoid } = require("nanoid");
let randomCode = nanoid(6).toString();
const nodemailer = require("nodemailer");
const handleForgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const userFound = await user.findOne({ email: email });
  if (!userFound) {
    res.send({ error: "User Not Found" });
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
      subject: process.env.reset,
      html: `<p>Your Verification Code For Holiday Planet is<br/><span style="color:green"><b>${randomCode}</b></span></p>this code will be <span style="color:red"><b>expire after 1 minute</b></span>`,
    });

    let newOtp = {
      password: randomCode,
    };

    try {
      const update = await user.findOneAndUpdate({ email: email }, newOtp);
      res.send({ message: "OTP To Reset Password Sent To Your Mail" });
    } catch (error) {
      res.send({ error: "Try Again To Reset Password" });
    }

    transporter.sendMail(SRMails, (error, info) => {
      if (error) {
        console.log(error, "reset password not send");
      } else {
        console.log("reset password sent successfully");
      }
    });
  }

  next();
};
module.exports = handleForgotPassword;
