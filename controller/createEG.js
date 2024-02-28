const EG = require("../modals/EducationGroup");
const EducationGroupValidate = require("./EducationGroupValidate");

const createEG = async (req, res) => {
  try {
    try {
      // request 
      // authAxios.post(route , req)
      await EducationGroupValidate.validateAsync(req.body);
      // if not matches then error 
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { TitleOfProject } = req.body;
    const projectExists = await EG.findOne({ TitleOfProject });
    if (projectExists) {
      return res.json({ success: false, msg: "This project title exists" });
    }
    const allEG = await EG.find({}, "project_code");
    if (allEG.length === 0) {
      projectCode = `EG${currentYear}0`;
    } else {
      projectCode = `EG${currentYear}${
        parseInt(allEG[allEG.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await EG.create({
      project_code: projectCode,
      applicant: req.user,
      reviewer: req.user.reviewer,
      NameOfSociety: req.body.NameOfSociety,
      DateOfSubmission: req.body.DateOfSubmission,
      TitleOfProject: TitleOfProject,
      address: req.body.address,
      OverallProjectPeriod: req.body.OverallProjectPeriod,
      OverallProjectBudget: req.body.OverallProjectBudget,
      beneficiariesSupported: req.body.beneficiariesSupported,
      outcomeImpact: req.body.outcomeImpact,
      goal: req.body.goal,
      objectives: req.body.objectives,
      contacts: req.body.contacts,
      peopleDetails: req.body.peopleDetails,
      targetGroupInformation: req.body.targetGroupInformation,
      targetGroupStudies: req.body.targetGroupStudies,
      otherActivities: req.body.otherActivities,
      monitoringMethods: req.body.monitoringMethods,
      evaluationProcess: req.body.evaluationProcess,
      conclusion: req.body.conclusion,
      project_in_charge_agree: req.body.project_in_charge_agree,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createEG;
