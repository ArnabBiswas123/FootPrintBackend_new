const EG = require("../modals/EducationGroup");

const editEGapprover = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_project_coordinator,
      project_coordinator_agree,
      amount_approved, 
    } = req.body;
    if (
      !projectID ||
      !comment_box_project_coordinator ||
      project_coordinator_agree === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedEG = await EG.findByIdAndUpdate(
      projectID,
      {
        $push: {
          project_coordinator: {
            ref: req.user._id,
            agree: project_coordinator_agree,
            date: Date.now(),
            comment: comment_box_project_coordinator,
          },
        },
        amount_approved,
      },
      { new: true }
    );

    if (!editedEG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedEG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editEGapprover;
