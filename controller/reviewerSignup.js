const Reviewer = require("../modals/Reviewer");
const reviewerValidate = require("./reviewerValidate");
const bcrypt = require('bcrypt');

const reviewersignup = async (req, res) => {
  try {
try{
    await reviewerValidate.validateAsync(req.body);
}catch(error){
    return res.status(400).json({success:false, message: error.message})
}
    

    const { name, email, password, mobile, nameOfProvince } = req.body;
    const reviewerexists =await Reviewer.findOne({ email });



    if (reviewerexists) {
      return res.status(400).json({ success: "Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(password, salt);

    await Reviewer.create({
      name,
      email,
      password: securepassword,
      mobile,
      nameOfProvince,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = reviewersignup;
