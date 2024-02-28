const Reviewer = require("../modals/Reviewer");
const reviewerVarify = async (req, res) => {
  try {
    const reviewer = req.body.reviewer;
    if (!reviewer) {
      return res.json({ success: false, msg: "send all the fields" });
    }
    const reviewerExists = await Reviewer.findById(reviewer);
    if (!reviewerExists) {
      return res.json({ success: false, msg: "No such reviewer" });
    }
    if (reviewerExists.isVarified === true) {
      return res.json({ success: true, msg: "Reviewer is allready varified" });
    }
    const varifiedReviewer = await Reviewer.findByIdAndUpdate(
      reviewer,
      { isVarified: true },
      { new: true }
    );
    return res.json({ success: true, data: varifiedReviewer });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = reviewerVarify;
