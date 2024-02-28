const HOI = require("../modals/HealthOngoingIndividual");

const editHOIapprover = async (req, res) => {
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
    console.log(project_coordinator_agree);
    const editedHOI = await HOI.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,

        project_coordinator_agree: project_coordinator_agree,
        amount_approved_project_coordinator:amount_approved_project_coordinator
      },
      { new: true }
    );

    if (!editedHOI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedHOI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editHOIapprover;
