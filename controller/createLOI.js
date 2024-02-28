const LOI = require("../modals/LivlihoodOngoingIndividual");
const LivlihoodOngoingIndividualValidate = require("../controller/LivlihoodOngoingIndividualValidate");

const createLOI = async (req, res) => {
  try {
    try {
      await LivlihoodOngoingIndividualValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const {
      self_employment_nature,
      photograph_benificary,
      name,
      mobile,
      email,
      address,
      aadhar_no,
      gender,
      DOB,
      married,
      spouse_name,
      no_of_children,
      children_education,
      religion,
      caste,
      present_family_situation,
      Project_amount_already_received,
      impact_created_in_the_ife_of_the_beneficiary,
      Average_revenue_generated_previous_year,
      how_the_income_invested,
      strengths_of_business_activity_in_the_previous_year,
      weaknesses_of_business_activity_in_the_previous_year,
      about_risks,
      plans_of_the_business_expansion,
      budget_cost_table,
      total_amount_cost,
      beneficiaries_contribution,
      amount_requested,

      aadhar_img,
      request_letter_img,
      quotations_regarding_the_purchase_img,
      other_supporting_documents,

      benificary_agree,

      project_in_charge_agree,
    } = req.body;

    const projectExists = await LOI.findOne({ aadhar_no });
    if (projectExists) {
      return res.json({ success: false, msg: "This aadhar number exists" });
    }
    const allLOI = await LOI.find({}, "project_code");
    // console.log(allHOI);
    if (allLOI.length === 0) {
      projectCode = `HI${currentYear}0`;
    } else {
      projectCode = `HI${currentYear}${
        parseInt(allLOI[allLOI.length - 1].project_code.slice(-1)) + 1
      }`;
    }
    await LOI.create({

      project_code: projectCode,
        self_employment_nature,
        applicant: req.user,
        reviewer: req.user.reviewer,
        photograph_benificary,
      name,
      mobile,
      email,
      address,
      aadhar_no,
      gender,
      DOB,
      married,
      spouse_name,
      no_of_children,
      children_education,
      religion,
      caste,
      present_family_situation,
      Project_amount_already_received,
      impact_created_in_the_ife_of_the_beneficiary,
      Average_revenue_generated_previous_year,
      how_the_income_invested,
      strengths_of_business_activity_in_the_previous_year,
      weaknesses_of_business_activity_in_the_previous_year,
      about_risks,
      plans_of_the_business_expansion,
      aadhar_img,
      budget_cost_table,
      total_amount_cost,
      beneficiaries_contribution,
      amount_requested,



      request_letter_img,
      quotations_regarding_the_purchase_img,
      other_supporting_documents,

      benificary_agree,

      project_in_charge_agree,
    })

    res.json({ success: true });


  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createLOI;
