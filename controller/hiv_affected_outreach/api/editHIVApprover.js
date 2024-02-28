const HIVAffectedOutreach = require("../../../modals/HIVAffectedOutreach");

const editHIVApprover = async (req, res) => {
  try {
    const approverId = req.user._id;
    //fields we require from the request body
    const { comment, agree, project_number, amount_approved } = req.body;

    if (
      !comment ||
      agree === undefined ||
      project_number === null ||
      amount_approved === null
    ) {
      return res.status(400).json({
        success: false,
        message: "send all fields",
      });
    }
    // The idea I am thinking of is that the approvers shall not be added before hand
    // These getAllWHF documents shall only be accessible to two particular people
    // They shall be kept in a collection called approvers WF
    // The documents will contain the ids and the ids shall be used later on
    const updatedData = await HIVAffectedOutreach.findOneAndUpdate(
      { project_number },
      {
        $push: {
          "mailing_list.project_coordinators": {
            ref: approverId,
            agree,
            comment,
            date: Date.now(),
          },
        },
        amount_approved,
      },
      
      { new: true }
    );

    if (!updatedData) {
      return res.status(400).json({
        message: "approval unsuccessful",
        sucess: false,
      });
    }
    return res.status(200).json({
      message:
        "successfully approved the application waiting for others approval",
      success: true,
      data: updatedData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "approval unsuccessful",
      error: error.message,
      sucess: false,
    });
  }
};

module.exports = editHIVApprover;
