const DPLG = require("../modals/DevProjLivliGroup");
const DevProjLivliGroupValidate = require("../controller/DevProjLivliGroupValidate");

const createDPLG = async (req, res) => {
  try {
    try {
      await DevProjLivliGroupValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { TitleOfProject } = req.body;
    const projectExists = await DPLG.findOne({ TitleOfProject });
    if (projectExists) {
      return res.json({ success: false, msg: "This project title exists" });
    }
    const allDPLG = await DPLG.find({}, "project_code");
    if (allDPLG.length === 0) {
      projectCode = `DPLG${currentYear}0`;
    } else {
      projectCode = `DPLG${currentYear}${
        parseInt(allDPLG[allDPLG.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await DPLG.create({
      project_code: projectCode,
      applicant: req.user,
      reviewer: req.user.reviewer,
      NameOfSociety:req.body.NameOfSociety,
      DateOfSubmission:req.body.DateOfSubmission,
      TitleOfProject:TitleOfProject,
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
      project_in_charge_agree: {agree: true},
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createDPLG;
