const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const getAllEGSReviewer = async (req, res) => {
  try {
    const reviewerID = req.user._id;

    const allEGSApplicants = await EducationalGroupSupportModel.find({
      "general_information.provincial_superior.ref": reviewerID,
    })
      .populate("general_information.project_incharge.ref")
      .populate("general_information.provincial_superior.ref")
      .populate("general_information.project_coordinators.ref");

    return res.status(200).json({
      success: true,
      data: allEGSApplicants,
      message: "All data for the applicant",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: "Cannot find anything for the applicant",
    });
  }
};

module.exports = getAllEGSReviewer;
