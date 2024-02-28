const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const editEGSReviewer = async (req, res) => {
  // put type route
  try {
    const { comment, agree, project_number } = req.body;

    if (!comment || agree === undefined || !project_number) {
      return res.status(400).json({
        message: "please send all the fields",
        success: false,
      });
    }

    const update = await EducationalGroupSupportModel.findOneAndUpdate(
      {
        project_number,
      },
      {
        "general_information.provincial_superior.agree": agree,
        "general_information.provincial_superior.comment": comment,
        "general_information.provincial_superior.date": Date.now(),
      }
    );

    return res.status(200).json({
      data: update,
      message: "successfully reviewed",
      success: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      error: e,
      message: "unepxpected error reviewing",
      success: false,
    });
  }
};

module.exports = editEGSReviewer;
