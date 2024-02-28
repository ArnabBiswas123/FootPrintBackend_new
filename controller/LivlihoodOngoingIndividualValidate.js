const Joi = require("joi");

const Budget_costSchema = Joi.object({
  budget: Joi.number().required(),
  cost: Joi.number().required(),
});

const LivlihoodOngoingIndividualValidate = Joi.object({
  self_employment_nature: Joi.string().required(),
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
  married: Joi.string(),
  spouse_name: Joi.string().allow(null),
  no_of_children: Joi.number().default(0),
  children_education: Joi.string().allow(null),
  religion: Joi.string().required(),
  caste: Joi.string().required(),
  present_family_situation: Joi.string().required(),
  Project_amount_already_received: Joi.number().required(),
  impact_created_in_the_ife_of_the_beneficiary: Joi.string().required(),
  Average_revenue_generated_previous_year: Joi.number().required(),
  how_the_income_invested: Joi.string().required(),
  strengths_of_business_activity_in_the_previous_year: Joi.string().required(),
  weaknesses_of_business_activity_in_the_previous_year: Joi.string().required(),
  about_risks: Joi.string().required(),
  plans_of_the_business_expansion: Joi.string().required(),

  budget_cost_table: Joi.array().items(Budget_costSchema),
  total_amount_cost: Joi.number().required(),
  beneficiaries_contribution: Joi.number().required(),
  amount_requested: Joi.number().required(),

  aadhar_img: Joi.string().required(),
  request_letter_img: Joi.string().required(),
  quotations_regarding_the_purchase_img: Joi.string().required(),
  other_supporting_documents: Joi.string().required(),
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
});
module.exports = LivlihoodOngoingIndividualValidate;
