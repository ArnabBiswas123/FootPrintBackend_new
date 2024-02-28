const Applicant = require("../modals/Applicant");
const Reviewer = require("../modals/Reviewer");
const applicantValidate = require("../controller/applicantValidate");
const bcrypt = require("bcrypt");
const applicantsignup = async (req,res) => {
  try {
    try {
      await applicantValidate.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    const {
      name,
      email,
      password,
      mobile,
      nameOfProvince,
      apostolate,
      reviewer,
    } = req.body;

    const reviewerExists = await Reviewer.findById(reviewer );

    // console.log(reviewerExists)

    if (!reviewerExists) {
      return res.json({ success: false, msg: "Reviewer not exists" });
    }

    const applicantexists = await Applicant.findOne({ email });

    // console.log(applicantexists)

    if (applicantexists) {
      return res.status(400).json({ success: "Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(password, salt);
    await Applicant.create({
        name,
        email,
        password: securepassword,
        mobile,
        apostolate,
        nameOfProvince,
        reviewer:reviewerExists
      });
      res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = applicantsignup;
