const LOI = require("../modals/LivlihoodOngoingIndividual");

const editLOIapprover = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_project_coordinator,
      project_coordinator_agree,
      amount_approved_project_coordinator
    } = req.body;
    if (
      !projectID ||
      !comment_box_project_coordinator||
      !amount_approved_project_coordinator||
      project_coordinator_agree === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedLOI = await LOI.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,

        project_coordinator_agree: project_coordinator_agree,
        amount_approved_project_coordinator:amount_approved_project_coordinator
      },
      { new: true }
    );

    if (!editedLOI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedLOI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editLOIapprover;