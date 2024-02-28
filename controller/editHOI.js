const HOI = require("../modals/HealthOngoingIndividual");
const HealthOngoingIndividualValidate = require("../controller/HealthOngoingIndividualValidate");
const editHOI = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await HealthOngoingIndividualValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedHOI =await HOI.findOneAndUpdate(
        { project_code: projectID },
        {
            illness_nature:req.body.illness_nature,
            photograph_benificary:req.body.photograph_benificary,
            name:req.body.name,
            present_earning_member:req.body.present_earning_member,
            address:req.body.address,
            aadhar_no:req.body.aadhar_no,
            gender:req.body.gender,
            email:req.body.email, 
            DOB:req.body.DOB,
            mobile:req.body.mobile,
            father:req.body.father,
            no_of_children:req.body.no_of_children,
            language:req.body.language,
            religion:req.body.religion,
            caste:req.body.caste,
            nature_illness:req.body.nature_illness,
            past_project_duration:req.body.past_project_duration,
            more_details_about_health:req.body.more_details_about_health,
            present_situation_family:req.body.present_situation_family,
            Govt_or_other_support:req.body.Govt_or_other_support,
            nature_of_support:req.body.nature_of_support,
            previous_amount_received:req.body.previous_amount_received,
            previous_total_amount:req.body.previous_total_amount,
            present_health_total_expense:req.body.present_health_total_expense,
            present_health_family_contribute:req.body.present_health_family_contribute,
            present_health_amount_requested:req.body.present_health_amount_requested,
            aadhar_img:req.body.aadhar_img,
            request_letter_img:req.body.request_letter_img,
            treatment_record_img:req.body.treatment_record_img,
            benificary_agree:req.body.benificary_agree,
            project_in_charge_agree:req.body.project_in_charge_agree,
            other_supporting_docs_img:req.body.other_supporting_docs_img,
        },
        { new: true }
      );
      if (!editedHOI) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedHOI });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editHOI;