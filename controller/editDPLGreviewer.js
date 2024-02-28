const DPLG = require("../modals/DevProjLivliGroup");
const editDPLGreviewer = async (req, res) => {
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
  
      const editedDPLG = await DPLG.findByIdAndUpdate(
        projectID,
        {
          comment_box_provincial_superior: comment_box_provincial_superior,
          provincial_superior_agree: provincial_superior_agree,
        },
        { new: true }
      );
  
      if (!editedDPLG) {
        return res.json({ success: false, msg: "No such project" });
      }
      return res.json({ success: true, data: editedDPLG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editDPLGreviewer;


  