const welfareHomeChildrenModel = require("../../../modals/WelfareHomeChildren");

const editWHFCReviewer = async (req, res) => {
  try {
    const reviewerId = req.user._id;
    //fields we require from the request body
    const { comment, agree, project_number } = req.body;

    console.log(req.body);
    if (!comment || agree === undefined || project_number === null) {
      return res.status(400).json({
        success: false,
        message: "send all fields",
      });
    }

    const updatedData = await welfareHomeChildrenModel.findOneAndUpdate(
      {project_number : project_number},
      {
        $set: {
          "mailing_list.provincial_superior": {
            ref: reviewerId,
            agree,
            comment,
            date: Date.now(),
          },
        },
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(400).json({
        message: "review unsuccessful",
        sucess: false,
      });
    }
    return res.status(200).json({
      message: "successfully reviewed the application waiting for approval",
      success: true,
      data: updatedData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "review unsuccessful",
      error: error.message,
      sucess: false,
    });
  }
};

module.exports = editWHFCReviewer ; 
