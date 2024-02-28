// what we need to do this time around is only use the selected fields

const HIVAffectedOutreach = require("../../../modals/HIVAffectedOutreach");
const hivAffectedChildrenValidation = require("../validation/HIVAffectedChildrenValidation");

// no need for the main JOI validation combine with previous data then JOI validate

const editHIVApplicant = async (req, res) => {
  try {
    try {
      await hivAffectedChildrenValidation.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `vaidation errror`,
        error: error.message,
      });
    }

    const currentDate = new Date(),
      currentYear = currentDate.getFullYear();

    const {
      project_number,
      project_title, // required from the user
      general_information, // all the fields shall be required from user side
      mailing_list, // some fields shall be provided from the user side rest we make ourselves
      key_information, // all
      present_situation_of_inmates,
      focus_areas_in_present_year,
      solution_analysis_logical_framework,
      staff,
      sustainability,
      monitoring_and_evaluation,
      budget,
    } = req.body;

    console.log(_id);

    // you need to validate the id if it even exists
    // at some later dates we need to fetch both approvers from the database and add them manually for the purpose
    // the two are Sister Nirmala and Samuel Imbach
    // we shall send a request to the both approvers
    const update = await HIVAffectedOutreach.findOneAndUpdate(
      project_number,
      {
        mailing_list,
        present_project_year,
        project_number,
        project_title,
        general_information,
        mailing_list,
        key_information,
        present_situation_of_inmates,
        focus_areas_in_present_year,
        solution_analysis_logical_framework,
        staff,
        sustainability,
        monitoring_and_evaluation,
        budget,
      },
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

module.exports = editHIVApplicant ; 