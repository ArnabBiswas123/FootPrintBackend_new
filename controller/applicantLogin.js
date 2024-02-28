const Applicant = require("../modals/Applicant");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const applicantlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ success: false, msg: "send all fields" });
    }
    let userData = await Applicant.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ success: false, errors: "Try logging valid credentials" });
    }
    const pwdCompare = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!pwdCompare) {
      return res
        .status(400)
        .json({ success: false, errors: "Try logging valid credentials" });
    }

    const data = {
      userData: {
        id: userData.id,
      },
    };
    const authToken = await jwt.sign(data, process.env.JWT_SECRET,{
      expiresIn: "1h",
    });

    return res.json({
      success: true,
      id: userData.id,
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      nameOfProvince: userData.nameOfProvince,
      apostolate:userData.apostolate,
      isVarified: userData.isVarified,
      token: authToken,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = applicantlogin;
