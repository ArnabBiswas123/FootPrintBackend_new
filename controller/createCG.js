const CG = require("../modals/CommonGroup");
const commonGroupValidate = require("../controller/commonGroupValidate");

const createCG = async (req, res) => {
  try {
    try {
      await commonGroupValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { TitleOfProject } = req.body;
    const projectExists = await CG.findOne({ TitleOfProject });
    if (projectExists) {
      return res.json({ success: false, msg: "This project title exists" });
    }
    const allCG = await CG.find({}, "project_code");
    if (allCG.length === 0) {
      projectCode = `CG${currentYear}0`;
    } else {
      projectCode = `CG${currentYear}${
        parseInt(allCG[allCG.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await CG.create({
        project_code: projectCode,
        applicant: req.user,
        reviewer: req.user.reviewer,
        goal: req.body.goal,
        objectives: req.body.objectives,
        selectedMonths: req.body.selectedMonths,
        isSubmitted: req.body.isSubmitted,
        budget_cost_table: req.body.budget_cost_table,
        nameOfSociety: req.body.nameOfSociety,
        DateOfSubmission: req.body.DateOfSubmission,
        TitleOfProject: req.body.TitleOfProject,
        address: req.body.address,
        OverallProjectPeriod: req.body.OverallProjectPeriod,
        OverallProjectBudget: req.body.OverallProjectBudget,
        ProjectArea:req.body.ProjectArea,
        directBeneficiaries:req.body.directBeneficiaries,
        indirectBeneficiaries:req.body.indirectBeneficiaries,
        problemAnalysis: req.body.problemAnalysis,
        solutionAnalysis: req.body.solutionAnalysis,
        sustainability:req.body.sustainability,
        monitoringProcess:req.body.monitoringProcess,
        evaluationMethodology: req.body.evaluationMethodology,
        beneficiaryAgreement: req.body.beneficiaryAgreement,
        beneficiaryAgreementDate: new Date(),
        project_in_charge_agree:req.body.project_in_charge_agree
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createCG;
