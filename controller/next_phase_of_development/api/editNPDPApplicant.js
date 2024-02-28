// what we need to do this time around is only use the selected fields

const nextPhaseOfDevelopmentModal = require("../../../modals/NextPhaseOfDevelopmentProposal");
const nextPhaseOfDevelopmentValidation = require('../validation/nextPhaseOfDevelopmentValidation');
// no need for the main JOI validation combine with previous data then JOI validate

const editNPDPApplicant = async (req, res) => {
  try {
    try {
      await nextPhaseOfDevelopmentValidation.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `vaidation errror`,
        error: error.message,
      });
    }
  
    const {project_number} = req.body;

    // you need to validate the id if it even exists
    // at some later dates we need to fetch both approvers from the database and add them manually for the purpose
    // the two are Sister Nirmala and Samuel Imbach
    // we shall send a request to the both approvers
    const update = await nextPhaseOfDevelopmentModal.findOneAndUpdate(
      project_number,
      req.body, // update 
      { new: true }
    );

    if (update === null)
      return res.status(200).json({
        success: false,
        message: "update unsuccessful",
      });
    return res.status(200).json({
      success: true,
      message: "successfully updated",
      data: update,
    });
    // what we need to generate from our side
    // ref shall be one of those
    // the main data to be generated
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Unexpected error during update",
      error: error.message,
    });
  }
};

module.exports = editNPDPApplicant; 
