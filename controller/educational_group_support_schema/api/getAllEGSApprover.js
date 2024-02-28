const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const getAllEGSApprover = async (req, res) => {
  try {
    const allEGSApprover = await EducationalGroupSupportModel.find()
      .populate("general_information.project_incharge.ref")
      .populate("general_information.provincial_superior.ref")
      .populate("general_information.project_coordinators.ref");
    if (allEGSApprover.length === 0)
      return res.status(404).json({
        message: "No applications for the approver",
        data: [],
      });
    return res.status(200).json({
      success: true,
      data: allEGSApprover,
      message: "All data for the approver",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error,
      message: "Cannot find anything for the approver",
    });
  }
};

module.exports = getAllEGSApprover;
