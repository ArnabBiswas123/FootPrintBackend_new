const ISG = require("../modals/InstitutionSkillGroup");
const InstitutionSkillGroupValidate = require("./InstitutionSkillGroupValidate");

const createISG = async (req, res) => {
  try {
    try {
      await InstitutionSkillGroupValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { TitleOfProject } = req.body;
    const projectExists = await ISG.findOne({ TitleOfProject });
    if (projectExists) {
      return res.json({ success: false, msg: "This project titkle exists" });
    }
    const allISG = await ISG.find({}, "project_code");
    if (allISG.length === 0) {
      projectCode = `ISG${currentYear}0`;
    } else {
      projectCode = `ISG${currentYear}${
        parseInt(allISG[allISG.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await ISG.create({
      project_code: projectCode,
      applicant: req.user,
      reviewer: req.user.reviewer,
      NameOfSociety: req.body.NameOfSociety,
      DateOfSubmission: req.body.DateOfSubmission,
      TitleOfProject: TitleOfProject,
      address: req.body.address,
      OverallProjectPeriod: req.body.OverallProjectPeriod,
      OverallProjectBudget: req.body.OverallProjectBudget,
      NumberOfBeneficiaries: req.body.NumberOfBeneficiaries,
      ResidentialVillages: req.body.ResidentialVillages,
      SelectionCriteriaAndProfile: req.body.SelectionCriteriaAndProfile,
      DescriptionOfBeneficiary: req.body.DescriptionOfBeneficiary,
      problemAnalysis: req.body.problemAnalysis,
      solutionAnalysis: req.body.solutionAnalysis,
      goal: req.body.goal,
      objectives: req.body.objectives,
      sustainability: req.body.sustainability,
      monitoringProcess: req.body.monitoringProcess,
      evaluationMethodology: req.body.evaluationMethodology,
      budgetData: req.body.budgetData,
      project_in_charge_agree: {
        agree: true,
        date: new Date()
      },
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createISG;
