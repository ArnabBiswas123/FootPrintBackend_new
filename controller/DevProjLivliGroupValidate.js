const Joi = require('joi');

const objectiveSchema = Joi.object({
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

const Budget_cost = Joi.object({
  budget: Joi.string().required(),
  cost: Joi.number().required(),
});

const Studies = Joi.object({
  serialNo: Joi.string().required(),
  name: Joi.string().required(),
  family_situation: Joi.string().required(),
  nature_livlihood: Joi.string().required(),
  requested_amount: Joi.number().required(),
});

const DevProjLivliGroupValidate = Joi.object({
  NameOfSociety: Joi.string().required(),
  DateOfSubmission: Joi.string().required(),
  TitleOfProject: Joi.string().required(),
  address: Joi.string().required(),
  OverallProjectPeriod: Joi.number().required(),
  OverallProjectBudget: Joi.number().required(),
  ProjectOfInitialProject: Joi.string().required(),
  problemAnalysis: Joi.string().required(),
  solutionAnalysis: Joi.string().required(),
  goal: Joi.string().required(),
  objectives: Joi.array().items(objectiveSchema).required(),
  sustainability: Joi.string().required(),
  monitoringProcess: Joi.string().required(),
  budget_cost_table: Joi.array().items(Budget_cost).required(),
  studies_table_data: Joi.array().items(Studies).required(),
 
  project_in_charge_agree: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }).required(),
  comment_box_provincial_superior: Joi.string().allow(null),
  comment_box_project_coordinator: Joi.string().allow(null),

});

module.exports = DevProjLivliGroupValidate;