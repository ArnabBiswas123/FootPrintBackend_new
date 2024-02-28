const Joi = require("joi");
const EducationIndividualValidate = Joi.object({
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
  health_status_of_father_others: Joi.string().allow('' , null),
  health_status_of_mother: Joi.string()
    .valid(
      "Chronically Sick",
      "HIV/AIDS positive",
      "Disabled",
      "Alcoholic",
      "Others"
    )
    .required(),
  health_status_of_mother_others: Joi.string().allow('' , null),
  residential_status: Joi.string()
    .valid("houseOwner", "landOwner", "rentedHouse", "others")
    .required(),
  residential_status_others: Joi.string().allow('' , null),
  family_situation_of_the_beneficiary: Joi.string().required(),
  financialSupportDetails: Joi.string().required(),
  familyEmploymentDetails: Joi.string().required(),
  previousEducationDetails: Joi.string().required(),
  previousInstitutionDetails: Joi.string().required(),
  previousMarksPercentage: Joi.number().required(),
  presentEducationDetails: Joi.string().required(),
  presentInstitutionDetails: Joi.string().required(),
  educationalAspiration: Joi.string().required(),
  sustainabilityDetails: Joi.string().required(),
  eligibleForScholarship: Joi.string().valid("Yes", "No").required(),
  expectedScholarshipAmount: Joi.number().required(),
  familyFinancialContribution: Joi.number().required(),
  noFamilySupportReasons: Joi.string().allow('' , null),
  presentStudy: Joi.string().required(),
  budgetDetails: Joi.string().required(),
  totalCostOfStudy: Joi.number().required(),
  scholarshipExpected: Joi.number().required(),
  beneficiaryContribution: Joi.number().required(),
  totalScholarshipAndContribution: Joi.number().required(),
  balanceAmountRequested: Joi.number().required(),
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
});

module.exports = EducationIndividualValidate;
