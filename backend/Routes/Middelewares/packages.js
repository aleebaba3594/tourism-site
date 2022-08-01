const packages = require("../../Modal/packageScheema");

const handlePackages = async (req, res, next) => {
  let { categories, packageName, packagePrice, packageDes,packagePic, expire, validFrom } =
    req.body;
  if (
    !categories ||
    !packageName ||
    !packagePrice ||
    !packageDes ||
    // !packagePic ||
    !expire ||
    !validFrom
  ) {
    return res.send({ error: "please fill all the fields" });

  } else {
    const Packages = new packages({
      categories,
      packageName,
      packagePrice,
      packageDes,
      expire,
      validFrom,
    });

    try {
      let savePackages = await Packages.save();

      return res.send({ message: "saved packages successfull" });
    } catch (error) {
      console.log(error, "data not saved to db packages");
      res.send(error);
    }
    next();
  }
};
module.exports = handlePackages;
