const EOI = require("../modals/EducationOngoingIndividual");
const EducationOngoingIndividualValidate = require("../controller/EducationOngoingIndividualValidate");
const editEOI = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };



      // reverted project 
      // 

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await EducationOngoingIndividualValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedEOI =await EOI.findOneAndUpdate(
        { project_code: projectID },
        {
            health_status_of_father_others:req.body.health_status_of_father_others,
            health_status_of_mother_others:req.body.health_status_of_mother_others,
            residential_status_others:req.body.residential_status,
            photograph_benificary:req.body.photograph_benificary,
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            address:req.body.address,
            aadhar_no:req.body.aadhar_no,
            gender:req.body.gender,
            DOB:req.body.DOB,
            father:req.body.father,
            mother:req.body.mother,
            mother_tongue:req.body.mother_tongue,
            religion:req.body.religion,
            caste:req.body.caste,
            occupation_of_father:req.body.occupation_of_father,
            monthly_income_of_father:req.body.monthly_income_of_father,
            monthly_income_of_mother:req.body.monthly_income_of_mother,
            occupation_of_mother:req.body.occupation_of_mother,
            motherIs:req.body.motherIs,
            fatherIs:req.body.fatherIs,
            grandmother_support:req.body.grandmother_support,
            grandfather_support:req.body.grandfather_support,
            health_status_of_father:req.body.health_status_of_father,
            health_status_of_mother:req.body.health_status_of_mother,
            residential_status:req.body.residential_status,
            family_situation_of_the_beneficiary:req.body.family_situation_of_the_beneficiary,
            extra_curricular_activities_participated:req.body.extra_curricular_activities_participated,
            nature_of_personality_growth_visible:req.body.nature_of_personality_growth_visible,
            Scholarship_received_from_government:req.body.scholarship_expected,
            expenses_from_family_of_the_beneficiary:req.body.expenses_from_family_of_the_beneficiary,
            other_support_received_from_other_sources:req.body.other_support_received_from_other_sources,
            total_amount:req.body.total_amount,
            amount_spent_from_project:req.body.amount_spent_from_project,
            total_amount_already_spent_on_the_studies:req.body.total_amount_already_spent_on_the_studies,
            balance_amount_retained_in_the_projects:req.body.balance_amount_retained_in_the_projects,
            aadhar_img:req.body.aadhar_img,
            fee_quotation_from_the_institution_img:req.body.fee_quotation_from_the_institution_img,
            proof_of_scholarship_received_from_government_img:req.body.proof_of_scholarship_received_from_government_img,
            medical_confirmation_img:req.body.medical_confirmation_img,
            caste_certificate_img:req.body.caste_certificate_img,
            affidavit_proof_img:req.body.affidavit_proof_img,
            request_letter_img:req.body.request_letter_img,
            death_certificate_img:req.body.death_certificate_img,
            mark_list_of_previous_year:req.body.mark_list_of_previous_year,
            benificary_agree:req.body.benificary_agree,
            project_in_charge_agree:req.body.project_in_charge_agree,
            present_study:req.body.present_study,
            details_of_budget:req.body.details_of_budget,
            total_cost_of_study:req.body.total_cost_of_study,
            scholarship_expected:req.body.scholarship_expected,
            beneficiaries_contribution:req.body.beneficiaries_contribution,
            total_scholarship_contribution:req.body.total_scholarship_contribution,
            balance_amount_requested:req.body.balance_amount_requested
        },
        { new: true }
      );
      if (!editedEOI) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedEOI });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEOI;