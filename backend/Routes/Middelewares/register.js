const bcrypt = require("bcrypt");
const user = require("../../Modal/registerScheema");
const handleRegister = async (req, res, next) => {
  let { name, email, password, isAdmin } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(422).json({ error: "please fill all the fields" });
  } else {
    let sameEmail = await user.findOne({ email: email });
    if (sameEmail) {
      return res.send({ error: "your email is already registered" });
    } else {
      password = bcrypt.hashSync(password, 12);
    }
  }
  const User = new user({
    name,
    email,
    password,
    isAdmin,
  });
  try {
    let saveData = await User.save();
    res.send({ message: "signup successfull" });

    console.log(saveData, "save to db data");
  } catch (error) {
    console.log(error, "data not saved to db");
    res.send(error);
  }
  next();
};
module.exports = handleRegister;