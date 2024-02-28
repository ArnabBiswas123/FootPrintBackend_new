const EI = require("../modals/EducationIndividual");
const editEIreviewer = async (req, res) => {
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
  
      const editedEI = await EI.findByIdAndUpdate(
        projectID,
        {
          comment_box_provincial_superior: comment_box_provincial_superior,
          provincial_superior_agree: provincial_superior_agree,
        },
        { new: true }
      );
  
      if (!editedEI) {
        return res.json({ success: false, msg: "No such project" });
      }
      return res.json({ success: true, data: editedEI });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEIreviewer;


  