const Joi = require("joi");
const Budget_costSchema = Joi.object({
  budget: Joi.string().required(),
  cost: Joi.number().required(),
});

const revenueGoalsSchema = Joi.array().items(
Joi.object().keys({
    businessPlan: Joi.string().required(),
    currentYear: Joi.number().required(),
    year1: Joi.number().default(0),
    year2: Joi.number().default(0),
    year3: Joi.number().default(0),
  })
);

const SocialIndividualValidate = Joi.object({
  nameOfSelfEmployment: Joi.string().required(),
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
  married: Joi.string()
    .valid("married", "unmarried", "divorced", "spouse dead")
    .required(),
  spouse_name: Joi.string().allow(null),
  no_of_children: Joi.number().default(0),
  education_status: Joi.string().allow(null),
  religion: Joi.string().required(),
  caste: Joi.string().required(),
  present_family_situation: Joi.string().required(),
  smallScaleBusinessDetails: Joi.string().required(),
  monthlyEarnings: Joi.number().required(),
  businessIdeaDetails: Joi.string().required(),
  businessStrengthsPreviousYear: Joi.string().required(),
  businessWeaknessesPreviousYear: Joi.string().required(),
  riskIdentification: Joi.string().required(),
  riskMitigationMeasures: Joi.string().required(),
  businessSustainability: Joi.string().required(),
  expectedBenefits: Joi.string().required(),
  budget_cost_table: Joi.array().items(Budget_costSchema),
  beneficiary_contribution: Joi.number().required(),
  amount_requested: Joi.number().required(),
  revenueGoals: revenueGoalsSchema,
  estimated_income : Joi.object().keys({
    currentYear: Joi.number().required(),
    year1: Joi.number().default(0),
    year2: Joi.number().default(0),
    year3: Joi.number().default(0),
  }),
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
  comment_box_provincial_superior: Joi.string().allow(null).default(null),
  comment_box_project_coordinator: Joi.string().allow(null).default(null),
});
module.exports = SocialIndividualValidate;
