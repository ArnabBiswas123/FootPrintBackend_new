const EI = require("../modals/EducationIndividual");
const EducationIndividualValidate = require("../controller/EducationIndividualValidate");
const editEI = async (req, res) => {
  try {
    const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

    if (!projectID) {
      res.json({ success: false, msg: "send project ID" });
    }
    console.log(req.body);
    try {
      await EducationIndividualValidate.validateAsync(modifiedReqBody);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    console.log(projectID);
    const editedEI = await EI.findOneAndUpdate(
      { project_code: projectID },
      {
        photograph_benificary: req.body.photograph_benificary,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        aadhar_no: req.body.aadhar_no,
        address: req.body.address,
        gender: req.body.gender,
        DOB: req.body.DOB,
        father: req.body.father,
        mother: req.body.mother,
        mother_tongue: req.body.mother_tongue,
        religion: req.body.religion,
        caste: req.body.caste,
        occupation_of_father: req.body.occupation_of_father,
        monthly_income_of_father: req.body.monthly_income_of_father,
        monthly_income_of_mother: req.body.monthly_income_of_mother,
        occupation_of_mother: req.body.occupation_of_mother,
        motherIs: req.body.motherIs,
        fatherIs: req.body.fatherIs,
        grandmother_support: req.body.grandfather_support,
        grandfather_support: req.body.grandfather_support,
        health_status_of_father: req.body.health_status_of_father,
        health_status_of_father_others: req.body.health_status_of_father_others,
        health_status_of_mother: req.body.health_status_of_mother,
        health_status_of_mother_others: req.body.health_status_of_mother_others,
        residential_status: req.body.residential_status,
        residential_status_others: req.body.residential_status_others,
        family_situation_of_the_beneficiary:
          req.body.family_situation_of_the_beneficiary,
        financialSupportDetails: req.body.financialSupportDetails,
        familyEmploymentDetails: req.body.familyEmploymentDetails,
        previousEducationDetails: req.body.previousEducationDetails,
        previousInstitutionDetails: req.body.previousInstitutionDetails,
        previousMarksPercentage: req.body.previousMarksPercentage,
        presentEducationDetails: req.body.presentEducationDetails,
        presentInstitutionDetails: req.body.presentEducationDetails,
        educationalAspiration: req.body.educationalAspiration,
        sustainabilityDetails: req.body.sustainabilityDetails,
        eligibleForScholarship: req.body.eligibleForScholarship,
        expectedScholarshipAmount: req.body.expectedScholarshipAmount,
        familyFinancialContribution: req.body.familyFinancialContribution,
        noFamilySupportReasons: req.body.noFamilySupportReasons,
        presentStudy: req.body.presentStudy,
        budgetDetails: req.body.budgetDetails,
        totalCostOfStudy: req.body.totalCostOfStudy,
        scholarshipExpected: req.body.scholarshipExpected,
        beneficiaryContribution: req.body.beneficiaryContribution,
        totalScholarshipAndContribution:
          req.body.totalScholarshipAndContribution,
        balanceAmountRequested: req.body.balanceAmountRequested,
        aadhar_img: req.body.aadhar_img,
        fee_quotation_from_the_institution_img:
          req.body.fee_quotation_from_the_institution_img,
        proof_of_scholarship_received_from_government_img:
          req.body.proof_of_scholarship_received_from_government_img,
        medical_confirmation_img: req.body.medical_confirmation_img,
        caste_certificate_img: req.body.caste_certificate_img,
        affidavit_proof_img: req.body.affidavit_proof_img,
        request_letter_img: req.body.request_letter_img,
        death_certificate_img: req.body.death_certificate_img,
        mark_list_of_previous_year: req.body.mark_list_of_previous_year,
        benificary_agree: req.body.benificary_agree,
        project_in_charge_agree: req.body.project_in_charge_agree,
        provincial_superior_agree: req.body.provincial_superior_agree,
        comment_box_provincial_superior: req.body.comment_box_provincial_superior,
        project_coordinator_agree: req.body.project_coordinator_agree,
        comment_box_project_coordinator: req.body.comment_box_project_coordinator,
      },
      { new: true }
    );
    if (!editedEI) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedEI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editEI;
