const Applicant = require("../modals/Applicant");
const allapplicant = async (req, res) => {
  try {
    const allapplicant = await Applicant.find({ reviewer: req.user });
    if (allapplicant.length === 0) {
      return res.json({ success: false, msg: "No applicant" });
    }

    return res.json({ success: true, data: allapplicant });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = allapplicant;
