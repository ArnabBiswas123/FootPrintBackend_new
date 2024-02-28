// this time find all where applicant is the applicant

const HIVAffectedOutreach = require("../../../modals/HIVAffectedOutreach");

const getAllHIVApplicant = async (req, res) => {
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const applicantId = req.user._id;

    // find by applicant
    const allHIVProject = await HIVAffectedOutreach.find({
      "mailing_list.project_in_charge.ref": applicantId,
    })
      .populate("mailing_list.project_in_charge.ref")
      .populate("mailing_list.provincial_superior.ref")
      .populate("mailing_list.project_coordinators.ref");
    // I am not sure if populating is required , if it will be I'll put it there

    if (!allHIVProject) {
      return res.status(400).json({
        status: false,
        message: `Unable to fetch any projects for the applicant`,
      });
    }
    return res.status(200).json({
      status: true,
      message: "successfully got all applicants",
      data: allHIVProject,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch any applicants",
      error: error.message,
    });
  }
};

module.exports = getAllHIVApplicant;
