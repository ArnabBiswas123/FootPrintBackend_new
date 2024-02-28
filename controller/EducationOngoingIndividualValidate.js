const Joi = require("joi");
const educationOngoingIndividualValidate = Joi.object({
  photograph_benificary: Joi.string().required(),
  name: Joi.string().required(),
  mobile: Joi.number().min(1000000000).max(9999999999).required().messages({
    "number.base": "Mobile must be a numeric value",
    "number.integer": "Mobile must be an integer",
    "number.min": "Mobile must be at least 10 digits",
    "number.max": "Mobile cannot exceed 10 digits",
    "any.required": "Mobile is required",
  }),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  aadhar_no: Joi.number().min(10000000000).required(999999999999).messages({
    "number.base": "Aadhar must be a numeric value",
    "number.integer": "Aadhar must be an integer",
    "number.min": "Aadhar must be at least 10 digits",
    "number.max": "Aadhar cannot exceed 10 digits",
    "any.required": "Aadhar is required",
  }),
  gender: Joi.string().valid("male", "female").required(),
  DOB: Joi.string().required(),
  father: Joi.string().required(),
  mother: Joi.string().required(),
  mother_tongue: Joi.string().required(),
  religion: Joi.string().required(),
  caste: Joi.string().required(),
  occupation_of_father: Joi.string().required(),
  monthly_income_of_father: Joi.number().required(),
  monthly_income_of_mother: Joi.number().required(),
  occupation_of_mother: Joi.string().required(),
  motherIs: Joi.string().valid("healthy", "sick", "dead").required(),
  fatherIs: Joi.string()
    .valid("healthy", "sick", "dead", "deserted the family")
    .required(),
  grandmother_support: Joi.string().valid("Yes", "No", "Died").required(),
  grandfather_support: Joi.string().valid("Yes", "No", "Died").required(),
  health_status_of_father: Joi.string()
    .valid(
      "Chronically Sick",
      "HIV/AIDS positive",
      "Disabled",
      "Alcoholic",
      "Others"
    )
    .required(),
  health_status_of_father_others: Joi.string().default(""),
  health_status_of_mother: Joi.string()
    .valid(
      "Chronically Sick",
      "HIV/AIDS positive",
      "Disabled",
      "Alcoholic",
      "Others"
    )
    .required(),
  health_status_of_mother_others: Joi.string().default(""),
  residential_status: Joi.string()
    .valid("houseOwner", "landOwner", "rentedHouse", "others")
    .required(),
  residential_status_others: Joi.string().default(""),
  family_situation_of_the_beneficiary: Joi.string().required(),
  extra_curricular_activities_participated: Joi.string().required(),
  nature_of_personality_growth_visible: Joi.string().required(),
  Scholarship_received_from_government: Joi.number().required(),
  expenses_from_family_of_the_beneficiary: Joi.number().required(),
  other_support_received_from_other_sources: Joi.string(),
  total_amount: Joi.number().required(),
  amount_spent_from_project: Joi.number().required(),
  total_amount_already_spent_on_the_studies: Joi.number().required(),
  balance_amount_retained_in_the_projects: Joi.number().required(),
  aadhar_img: Joi.string().required(),
  fee_quotation_from_the_institution_img: Joi.string().required(),
  proof_of_scholarship_received_from_government_img: Joi.string().required(),
  medical_confirmation_img: Joi.string().required(),
  caste_certificate_img: Joi.string().required(),
  affidavit_proof_img: Joi.string().required(),
  request_letter_img: Joi.string().required(),
  death_certificate_img: Joi.string().required(),
  mark_list_of_previous_year: Joi.string().required(),
  // syntax changed
  benificary_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  project_coordinator_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  project_in_charge_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  provincial_superior_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  comment_box_provincial_superior: Joi.string().allow(null),
  comment_box_project_coordinator: Joi.string().allow(null),
  amount_approved_project_coordinator: Joi.number().default(0),
  present_study: Joi.string().required(),
  details_of_budget: Joi.string().required(),
  total_cost_of_study: Joi.number().required(),
  scholarship_expected: Joi.number().required(),
  beneficiaries_contribution: Joi.number().required(),
  total_scholarship_contribution: Joi.number().required(),
  balance_amount_requested: Joi.number().required(),
});

module.exports = educationOngoingIndividualValidate;
