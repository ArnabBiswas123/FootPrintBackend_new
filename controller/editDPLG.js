const DPLG = require("../modals/DevProjLivliGroup");
const DevProjLivliGroupValidate = require("../controller/DevProjLivliGroupValidate");
const editDPLG = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };
  // const { projectID } = req.body;
      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await DevProjLivliGroupValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedDPLG =await DPLG.findOneAndUpdate(
        { project_code: projectID },
        {
          project_coordinators: [] , 
          comment_box_provincial_superior: null , 
          provincial_superior_agree: {
            agree: false , 
          } , 
            NameOfSociety:req.body.NameOfSociety,
            DateOfSubmission:req.body.DateOfSubmission,
            TitleOfProject:req.body.TitleOfProject,
            address:req.body.address,
            OverallProjectPeriod:req.body.OverallProjectPeriod,
            OverallProjectBudget:req.body.OverallProjectBudget,
            ProjectOfInitialProject:req.body.ProjectOfInitialProject,
            problemAnalysis:req.body.problemAnalysis,
            solutionAnalysis:req.body.solutionAnalysis,
            goal:req.body.goal,
            objectives:req.body.objectives,
            sustainability:req.body.sustainability,
            monitoringProcess:req.body.monitoringProcess,
            budget_cost_table: req.body.budget_cost_table,
            studies_table_data:req.body.studies_table_data,
            project_in_charge_agree: req.body.project_in_charge_agree,
        },
        { new: true }
      );
      if (!editedDPLG) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedDPLG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editDPLG;