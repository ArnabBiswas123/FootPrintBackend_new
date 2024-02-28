const SI = require("../modals/SocialIndividual");

const editSIapprover = async (req, res) => {
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
    const editedSI = await SI.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,
        project_coordinator_agree: project_coordinator_agree,
        amount_approved : amount_approved,

        
      },
  
      { new: true }
    );
    if (!editedSI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedSI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editSIapprover;
