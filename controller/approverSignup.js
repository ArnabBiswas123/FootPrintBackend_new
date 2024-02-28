const Approver = require("../modals/Approver");
const approverValidate = require("../controller/approverValidate");
const bcrypt = require("bcrypt");

const approverSignup = async (req,res) => {
  try {
    try {
      await approverValidate.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    const { name, email, password, mobile } = req.body;

    const approverexists = await Approver.findOne({ email });
    if (approverexists) {
      return res.status(400).json({ success: "Already Exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(password, salt);

    await Approver.create({
      name,
      email,
      password: securepassword,
      mobile,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = approverSignup;
