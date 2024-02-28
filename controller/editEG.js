const EG = require("../modals/EducationGroup");
const EducationGroupValidate = require("./EducationGroupValidate");
const editEG = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await EducationGroupValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedEG =await EG.findOneAndUpdate(
        { project_code: projectID },
        {
          // Take care of all the dates as well as the date of project_in_charge agreement be correct
          project_coordinators: [] , 
          comment_box_provincial_superior: null , 
          provincial_superior_agree: {
            agree: false , 
          } , 
          
            NameOfSociety: req.body.NameOfSociety,
            DateOfSubmission: req.body.DateOfSubmission,
            TitleOfProject: req.body.TitleOfProject,
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
        },
        { new: true }
      );
      if (!editedEG) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedEG });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEG;