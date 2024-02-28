const Joi = require('joi');


// JOI validation for objectiveSchema
const objectiveSchemaValidation = Joi.object({
  objective: Joi.string().required(),
  results: Joi.array().items(Joi.string().required()).required(),
  activities: Joi.array().items(
    Joi.object({
      activity: Joi.string().required(),
      timeframe: Joi.array().items(Joi.boolean().required()).required(),
      verification: Joi.string().required(),
    })
  ).required(),
});

// JOI validation for Budget_cost
const budgetCostValidation = Joi.object({
  budget: Joi.string().required(),
  cost: Joi.number().required(),
});

// JOI validation for InstitutionSkillGroup
const InstitutionSkillGroupValidate= Joi.object({
  NameOfSociety: Joi.string().required(),
  DateOfSubmission: Joi.string().required(),
  TitleOfProject: Joi.string().required(),
  address: Joi.string().required(),
  OverallProjectPeriod: Joi.number().required(),
  OverallProjectBudget: Joi.number().required(),
  NumberOfBeneficiaries: Joi.number().required(),
  ResidentialVillages: Joi.string().required(),
  SelectionCriteriaAndProfile: Joi.string().required(),
  DescriptionOfBeneficiary: Joi.string().required(),
  problemAnalysis: Joi.string().required(),
  solutionAnalysis: Joi.string().required(),
  goal: Joi.string().required(),
  objectives: Joi.array().items(objectiveSchemaValidation).required(),
  sustainability: Joi.string().required(),
  monitoringProcess: Joi.string().required(),
  evaluationMethodology: Joi.string().required(),
  budgetData: Joi.array().items(budgetCostValidation).required(),
  project_in_charge_agree: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now),
  }).required(),
  comment_box_provincial_superior: Joi.string().allow(null),
  comment_box_project_coordinator: Joi.string().allow(null),
});

module.exports = InstitutionSkillGroupValidate;