const Joi = require('joi');

const PeopleSchema = Joi.object({
  class: Joi.number().required(),
  totalFemale: Joi.number().required(),
  totalMale: Joi.number().required(),
  total: Joi.number().required(),
});

const targetGroupInformationSchema = Joi.object({
  serialNo: Joi.number().required(),
  name: Joi.string().required(),
  casteAddress: Joi.string().required(),
  recommendedBy: Joi.string().required(),
  familyBackground: Joi.string().required(),
});

const targetGroupStudiesSchema = Joi.object({
  serialNo: Joi.number().required(),
  name: Joi.string().required(),
  studyProposed: Joi.string().required(),
  totalExpense: Joi.number().required(),
  contribution: Joi.number().required(),
  scholarshipEligibility: Joi.string().required(),
  expectedAmount: Joi.string().required(),
});

const EducationGroupValidate = Joi.object({
  NameOfSociety: Joi.string().required(),
  DateOfSubmission: Joi.string().required(),
  TitleOfProject: Joi.string().required(),
  address: Joi.string().required(),
  OverallProjectPeriod: Joi.number().required(),
  OverallProjectBudget: Joi.number().required(),
  beneficiariesSupported: Joi.number().required(),
  outcomeImpact: Joi.string().required(),
  goal: Joi.string().required(),
  objectives: Joi.array().items(
    Joi.string().required(),
  ),
  peopleDetails: Joi.array().items(PeopleSchema),
  targetGroupInformation: Joi.array().items(targetGroupInformationSchema),
  targetGroupStudies: Joi.array().items(targetGroupStudiesSchema),
  otherActivities: Joi.string().required(),
  monitoringMethods: Joi.string().required(),
  evaluationProcess: Joi.string().required(),
  conclusion: Joi.string().required(),
  project_in_charge_agree: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }).required(),
  comment_box_provincial_superior: Joi.string().allow(null),
  comment_box_project_coordinator: Joi.string().allow(null),
});

module.exports = EducationGroupValidate;
