const ISG= require("../modals/InstitutionSkillGroup");
const InstitutionSkillGroupValidate = require("./InstitutionSkillGroupValidate");


const editISG = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await InstitutionSkillGroupValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedISG =await ISG.findOneAndUpdate(
        { project_code: projectID },
        {
          project_coordinators: [] , 
          comment_box_provincial_superior: null , 
          provincial_superior_agree: {
            agree: false , 
          } , 
            NameOfSociety: req.body.NameOfSociety,
            DateOfSubmission: req.body.DateOfSubmission,
            TitleOfProject: TitleOfProject,
            address: req.body.address,
            OverallProjectPeriod: req.body.OverallProjectPeriod,
            OverallProjectBudget: req.body.OverallProjectBudget,
            NumberOfBeneficiaries: req.body.NumberOfBeneficiaries,
            ResidentialVillages: req.body.ResidentialVillages,
            SelectionCriteriaAndProfile:req.body.SelectionCriteriaAndProfile,
            DescriptionOfBeneficiary:req.body.DescriptionOfBeneficiary,
            problemAnalysis:req.body.problemAnalysis,
            solutionAnalysis:req.body.solutionAnalysis,
            goal: req.body.goal,
            objectives: req.body.objectives,
            sustainability:req.body.sustainability,
            monitoringProcess: req.body.monitoringProcess,
            evaluationMethodology: req.body.evaluationMethodology,
            budgetData: req.body.budgetData,
            project_in_charge_agree: req.body.project_in_charge_agree,
        },
        { new: true }
      );
      if (!editedISG) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedISG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editISG;