const SI = require("../modals/SocialIndividual");
const SocialIndividualValidate = require("../controller/SocialIndividualValidate");
const createSI = async (req, res) => {
  try {
    try {
      console.log(req.body)
      await SocialIndividualValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const { aadhar_no } = req.body;
    const projectExists = await SI.findOne({ aadhar_no });
    if (projectExists) {
      return res.json({ success: false, msg: "This aadhar number exists" });
    }
    const allSI = await SI.find({}, "project_code");
    if (allSI.length === 0) {
      projectCode = `SI${currentYear}0`;
    } else {
      projectCode = `SI${currentYear}${
        parseInt(allSI[allSI.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await SI.create({
      revenueGoals: req.body.revenueGoals, 
      riskMitigationMeasures: req.body.riskMitigationMeasures,
      project_code: projectCode,
      applicant: req.user,
      reviewer: req.user.reviewer,
      nameOfSelfEmployment: req.body.nameOfSelfEmployment,
      photograph_benificary: req.body.photograph_benificary,
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      address: req.body.address,
      aadhar_no: req.body.aadhar_no,
      gender: req.body.gender,
      DOB: req.body.DOB,
      beneficiary_contribution: req.body.beneficiary_contribution,
      amount_requested: req.body.amount_requested,
      estimated_income: req.body.estimated_income,
      married: req.body.married,
      spouse_name: req.body.spouse_name,
      no_of_children: req.body.no_of_children,
      education_status: req.body.education_status,
      religion: req.body.religion,
      caste: req.body.caste,
      present_family_situation: req.body.present_family_situation,
      smallScaleBusinessDetails: req.body.smallScaleBusinessDetails,
      monthlyEarnings: req.body.monthlyEarnings,
      businessIdeaDetails: req.body.businessIdeaDetails,
      businessStrengthsPreviousYear: req.body.businessStrengthsPreviousYear,
      businessWeaknessesPreviousYear: req.body.businessWeaknessesPreviousYear,
      riskIdentification: req.body.riskIdentification,
      businessSustainability: req.body.businessSustainability,
      expectedBenefits: req.body.expectedBenefits,
      budget_cost_table: req.body.budget_cost_table,
      aadhar_img: req.body.aadhar_img,
      request_letter_img: req.body.request_letter_img,
      quotations_regarding_the_purchase_img:
        req.body.quotations_regarding_the_purchase_img,
      other_supporting_documents: req.body.other_supporting_documents,
      benificary_agree: req.body.benificary_agree,
      project_in_charge_agree: req.body.project_in_charge_agree,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createSI;
