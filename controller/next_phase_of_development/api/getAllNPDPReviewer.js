// this time find all where applicant is the applicant

const NextPhaseOfDevelopmentProposal = require("../../../modals/NextPhaseOfDevelopmentProposal");

const getAllNPDPReviewer = async (req, res) => {
  console.log(`request${req}`);
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const reviewerId = req.user;

    // find by applicant
    const allNPDP = await NextPhaseOfDevelopmentProposal.find({
      "mailing_list.provincial_superior.ref": reviewerId,
    }) .populate("mailing_list.project_in_charge.ref")
    .populate("mailing_list.provincial_superior.ref")
    .populate("mailing_list.project_coordinators.ref");

    if (!allNPDP) {
      return res.status(400).json({
        status: false,
        message: `Unable to fetch any projects for the reviewer`,
      });
    }
    return res.status(200).json({
      status: true,
      message: "successfully got all projects",
      data: allNPDP,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch any projects",
      error: error.message,
    });
  }
};

module.exports = getAllNPDPReviewer;
