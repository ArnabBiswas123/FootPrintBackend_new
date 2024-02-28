const CG = require("../modals/CommonGroup");
const editCGreviewer = async (req, res) => {
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
        return res.json({ success: false, msg: "send all fields" });
      }
  
      const editedCG = await CG.findByIdAndUpdate(
        projectID,
        {
          comment_box_provincial_superior: comment_box_provincial_superior,
          provincial_superior_agree: provincial_superior_agree,
        },
        { new: true }
      );
  
      if (!editedCG) {
        return res.json({ success: false, msg: "No such project" });
      }
      return res.json({ success: true, data: editedCG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editCGreviewer;


  