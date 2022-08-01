const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const user = require("../../Modal/registerScheema");
const handleRegister = async (req, res, next) => {
  let { email, password } = req.body;
  let sameEmail = await user.findOne({ email: email });
  if (!sameEmail) {
    return res.send({ error: "your email is not registered" });
  } else {
    let matchedpassword = bcrypt.compareSync(password, sameEmail.password);
    if (matchedpassword) {
      let token = jwt.sign({ id: sameEmail._id }, "secrettokenTwo");
      res.send({ token: token, message: "successfull login" });
    } else {
      res.send({ error: "wrong password" });
    }
  }

  next();
};
module.exports = handleRegister;
