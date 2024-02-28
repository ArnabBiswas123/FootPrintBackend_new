const nextPhaseOfDevelopmentValidation = require("../validation/nextPhaseOfDevelopmentValidation");
const nextPhaseOfDevelopmentModel = require('../../../modals/NextPhaseOfDevelopmentProposal');

const createNPDP = async (req, res) => {
  console.log('app');
  try {
    try {
      console.log(req.body);
      await nextPhaseOfDevelopmentValidation.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `vaidation errror`,
        error: error.message,
      });
    }
    console.log('error');
    const applicant = req.user ; 
    const currentDate = new Date(),
      currentYear = currentDate.getFullYear();

    const {
      phase,
      society_name,
      project_title,
      project_highlights,
      key_data_of_project,
      goal_and_objectives,
      beneficiaries_and_contribution,
      monitoring_reporting_evaluation,
      budget,
      conclusion,
    } = req.body ; 

    console.log(req.body);
    // create regex to get the form code 
    const projectCodeRegex = RegExp(`^NP${currentYear}`);

    // find one from the decreasing indexed string, the one that stays at top
    const lastCode = await nextPhaseOfDevelopmentModel.findOne(
      {
        project_number: { $regex: projectCodeRegex },
      },
      {
        _id: 0,
        project_number: 1,
      }
    );

    console.log(lastCode);

    let projectCode = `NP${currentYear}`;

    if (!lastCode) {
      projectCode = `${projectCode}0`;
    } else {
      console.log(`${lastCode}`.substring(6));
      projectCode = `${projectCode}${parseInt(`${lastCode.project_number}`.substring(6) ?? '0') + 1}`;
    }

    console.log(projectCode);
    // at some later dates we need to fetch both approvers from the database and add them manually for the purpose
    // the two are Sister Nirmala and Samuel Imbach
    // we shall send a request to the both approvers
    await nextPhaseOfDevelopmentModel.create({
      project_number: projectCode,
      phase,
      present_project_year: currentYear,
      society_name,
      project_title,
      project_highlights,
      key_data_of_project,
      mailing_list : {
        project_in_charge : {
          ref : applicant._id,
          agree: true, 
          date : currentDate
        },
        provincial_superior : {
          ref : applicant.reviewer,
          agree: true, 
          date : currentDate
        }
      }, 
      goal_and_objectives,
      beneficiaries_and_contribution,
      monitoring_reporting_evaluation,
      budget,
      conclusion,
    });

    return res.status(200).json({
      success: true,
      message: "successfull submission",
    });
    // what we need to generate from our side
    // ref shall be one of those
    // the main data to be generated
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Unexpected error creating the fields",
      error: error.message,
    });
  }
};

module.exports = createNPDP;
