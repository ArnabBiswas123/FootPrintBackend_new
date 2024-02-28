const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const editEGSApprover = async (req, res) => {
  // put type route
  try {
    const { amount_approved, comment, agree, project_number } = req.body;

    const approverId = req.user._id;
    console.log(approverId);

    if (!comment || agree === undefined || !project_number) {
      return res.status(400).json({
        message: "please send all the fields",
        success: false,
      });
    }

    // there should be some mechanism to allow complete approval
    const updatedApprover = await EducationalGroupSupportModel.findOneAndUpdate(
      {project_number},
      {
        $push: {
          "general_information.project_coordinators": {
            ref: approverId,
            date: Date.now(),
            agree: agree,
            comment: comment,
          },
        },
        amount_approved,
      }
      // this required adding data to an array
    );

    return res.status(200).json({
      data: updatedApprover,
      message: "successfully approved by one of the approvers ",
      success: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      error: e.message,
      message: "unepxpected error approving",
      success: false,
    });
  }
};

module.exports = editEGSApprover;
