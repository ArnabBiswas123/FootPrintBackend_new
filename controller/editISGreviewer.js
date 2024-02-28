const ISG = require("../modals/InstitutionSkillGroup");

const editISGreviewer = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_provincial_superior,
      provincial_superior_agree,
    } = req.body;
    if (
      !projectID ||
      !comment_box_provincial_superior ||
      provincial_superior_agree === undefined
    ) {
      console.log(req);
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedISG = await ISG.findByIdAndUpdate(
      projectID,
      {
        comment_box_provincial_superior: comment_box_provincial_superior,
        provincial_superior_agree: provincial_superior_agree,
      },
      { new: true }
    );

    if (!editedISG) {
      return res.json({ success: false, msg: "No such project" });
    }
    return res.json({ success: true, data: editedISG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editISGreviewer;
