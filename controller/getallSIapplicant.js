const SI = require("../modals/SocialIndividual");
const getallSIapplicant = async (req, res) => {
  try {
    const applicant = req.user;
    const SIapplicant = await SI.find({ applicant: applicant }).populate("reviewer").populate('applicant');
    if (SIapplicant.length === 0) {
      return res.json({ success: false, msg: "No project for this reviewer" });
    }

    return res.json({ success: true, data: SIapplicant });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = getallSIapplicant;    
