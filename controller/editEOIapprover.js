const EOI = require("../modals/EducationOngoingIndividual");

const editEOIapprover = async (req, res) => {
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

    const editedEOI = await EOI.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,
        project_coordinator_agree: {...project_coordinator_agree , date: Date.now()},
        amount_approved_project_coordinator:amount_approved_project_coordinator,
        approver : req.user._id, 
      },
      { new: true }
    );

    if (!editedEOI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedEOI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editEOIapprover;
