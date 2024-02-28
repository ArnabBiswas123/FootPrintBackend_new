const DPLG = require("../modals/DevProjLivliGroup");

const editDPLGapprover = async (req, res) => {
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

    const editedDPLG = await DPLG.findByIdAndUpdate(
      projectID,
      {
        $push: {
          project_coordinators: {
          
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

    if (!editedDPLG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedDPLG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editDPLGapprover;
