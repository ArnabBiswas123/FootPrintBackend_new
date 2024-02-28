const CG = require("../modals/CommonGroup");
const commonGroupValidate = require("../controller/commonGroupValidate");

const editCG = async (req, res) => {
  try {
    console.log(req.body)
    const { projectID, ...restOfReqBody } = req.body;
  const modifiedReqBody = { ...restOfReqBody };
    if (!projectID) {
      res.json({ success: false, msg: "send project ID" });
    }
    try {
      await commonGroupValidate.validateAsync(modifiedReqBody);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    const editedCG =await CG.findOneAndUpdate(
      { project_code: projectID },
      {
        project_coordinators: [] , 
          comment_box_provincial_superior: null , 
          provincial_superior_agree: {
            agree: false , 
          } , 
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
        ProjectArea: req.body.ProjectArea,
        directBeneficiaries: req.body.directBeneficiaries,
        indirectBeneficiaries: req.body.indirectBeneficiaries,
        problemAnalysis: req.body.problemAnalysis,
        solutionAnalysis: req.body.solutionAnalysis,
        sustainability: req.body.sustainability,
        monitoringProcess: req.body.monitoringProcess,
        evaluationMethodology: req.body.evaluationMethodology,
        beneficiaryAgreement: req.body.beneficiaryAgreement,
        beneficiaryAgreementDate: req.body.beneficiaryAgreementDate,
        project_in_charge_agree: req.body.project_in_charge_agree,
      },
      { new: true }
    );
    if (!editedCG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedCG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editCG;
