const Joi = require("joi");

const EarningMembersSchema = Joi.object({
  family_member: Joi.string().required(),
  nature_of_work: Joi.string().required(),
  monthly_income: Joi.number().required(),
});

const HealthOngoingIndividualValidate = Joi.object({
  illness_nature: Joi.string().required(),
  photograph_benificary: Joi.string().required(),
  name: Joi.string().required(),
  present_earning_member: Joi.array().items(EarningMembersSchema),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  aadhar_no: Joi.number().min(10000000000).required(999999999999).messages({
    "number.base": "Aadhar must be a numeric value",
    "number.integer": "Aadhar must be an integer",
    "number.min": "Aadhar must be at least 10 digits",
    "number.max": "Aadhar cannot exceed 10 digits",
    "any.required": "Aadhar is required",
  }),
  mobile: Joi.number().min(1000000000).max(9999999999).required().messages({
    "number.base": "Mobile must be a numeric value",
    "number.integer": "Mobile must be an integer",
    "number.min": "Mobile must be at least 10 digits",
    "number.max": "Mobile cannot exceed 10 digits",
    "any.required": "Mobile is required",
  }),
  gender: Joi.string().valid("male", "female").required(),
  DOB: Joi.string().required(),
  father: Joi.string().required(),
  no_of_children: Joi.number().required().default(0),
  language: Joi.string().required(),
  religion: Joi.string().required(),
  caste: Joi.string().required(),
  nature_illness: Joi.string().required(),
  past_project_duration: Joi.number().required(),
  more_details_about_health: Joi.string().required(),
  present_situation_family: Joi.string().required(),
  Govt_or_other_support: Joi.string().valid("Yes", "No").required(),
  nature_of_support: Joi.string().required(),
  previous_amount_received: Joi.number().required(),
  previous_total_amount: Joi.number().required(),
  present_health_total_expense: Joi.number().required(),
  present_health_family_contribute: Joi.number().required(),
  present_health_amount_requested: Joi.number().required(),
  aadhar_img: Joi.string().required(),
  request_letter_img: Joi.string().required(),
  treatment_record_img: Joi.string().required(),
  other_supporting_docs_img: Joi.string().required(),
  // agreement syntax change
  benificary_agree: Joi.object().keys({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now())
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
    date: Joi.date().default(Date.now())
  }),
  comment_box_provincial_superior: Joi.string(),
  comment_box_project_coordinator: Joi.string(),
  amount_approved_project_coordinator: Joi.number().default(0),
});
module.exports = HealthOngoingIndividualValidate;
