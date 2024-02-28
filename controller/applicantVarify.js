const Applicant = require("../modals/Applicant");
const applicantVarify = async (req, res) => {
  try {
    const applicant = req.body.applicant;
   
    if (!applicant) {
      return res.json({ success: false, msg: "send all the fields" });
    }
    const applicantExists = await Applicant.findById(applicant);
    if (!applicantExists) {
      return res.json({ success: false, msg: "No such applicant" });
    }
    if (applicantExists.isVarified === true) {
      return res.json({ success: true, msg: "Applicant is allready varified" });
    }
    const varifiedApplicant = await Applicant.findByIdAndUpdate(
      applicant,
      { isVarified: true },
      { new: true }
    );
    return res.json({ success: true, data: varifiedApplicant });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = applicantVarify;
