const EOI = require("../modals/EducationOngoingIndividual");
const editEOIreviewer = async (req, res) => {
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
  
      const editedEOI = await EOI.findByIdAndUpdate(
        projectID,
        {
          comment_box_provincial_superior: comment_box_provincial_superior,
          provincial_superior_agree: {...provincial_superior_agree,date: Date.now()},
        },
        { new: true }
      );
  
      if (!editedEOI) {
        return res.json({ success: false, msg: "No such project" });
      }
      return res.json({ success: true, data: editedEOI });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEOIreviewer;


  