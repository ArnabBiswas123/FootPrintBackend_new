const Reviewer = require("../modals/Reviewer");
const bcrypt = require("bcrypt");

const reviewerChangePassword = async (req, res) => {
  try {
    const { newpassword } = req.body;
    if (!newpassword) {
      return res.json({ success: false, msg: "Enter new password" });
    }
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(newpassword, salt);

    await Reviewer.findByIdAndUpdate(req.user.id, {
      password: securepassword,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = reviewerChangePassword;
