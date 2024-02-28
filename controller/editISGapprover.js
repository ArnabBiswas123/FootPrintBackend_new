const ISG = require("../modals/InstitutionSkillGroup");

const editISGapprover = async (req, res) => {
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

    const editedISG = await ISG.findByIdAndUpdate(
      projectID,
      {
        $push: {
          project_coordinators: {
            comment: comment_box_project_coordinator,
            ref: req.user._id,
            agree: false,
            date: new Date(),
          },
        },
        amount_approved,
      },
      { new: true }
    );

    if (!editedISG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedISG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editISGapprover;
