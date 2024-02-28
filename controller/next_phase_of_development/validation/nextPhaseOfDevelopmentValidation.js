const Joi = require("joi");

const stringRequiredSchema = Joi.string().required();
const stringSchema = Joi.string();
const numberSchema = Joi.number();
const stringArraySchema = Joi.array().items(Joi.string());

const activitySchema = Joi.object({
  activity: stringSchema.required(),
  timetable: Joi.object({
    period: stringSchema.valid(
      "Daily",
      "Weekly",
      "Monthly",
      "Quarterly",
      "Annually"
    ),
    schedule: Joi.string(),
    incharge: Joi.string(),
  }).required(),
});

const projectValidationSchema = Joi.object({
  phase: stringRequiredSchema,
  society_name: stringRequiredSchema,
  project_title: stringRequiredSchema,
  project_highlights: stringRequiredSchema,
  key_data_of_project: Joi.object({
    project_area: stringRequiredSchema,
    project_area_description: stringSchema.allow('' , null),
    sister_in_charge: stringRequiredSchema,
    overall_project_budget: numberSchema.required(),
    own_contribution: Joi.object({
      total_budget: numberSchema.default(0),
      budget_spent_previous_phases: Joi.array().items(
        Joi.object()
          .keys({
            phase: Joi.string().required(),
            budget: Joi.number().required(),
          })
          .required()
      ),
      budget_allocated_next_phase: Joi.number().required(),
    }),
  }),
  goal_and_objectives: Joi.object({
    project_goal: stringRequiredSchema,
    objectives_previous: stringArraySchema,
    objectives: Joi.array().items(
      Joi.object({
        objective: stringSchema,
        results_outcome_previous_phases: stringSchema,
        activities_next_phase: Joi.array().items(activitySchema),
      })
    ),
  }),
  beneficiaries_and_contribution: Joi.array().items(
    Joi.object().keys({
      beneficiary_name: Joi.string().required(),
      contribution: Joi.number().required(),
    })
  ),
  monitoring_reporting_evaluation: stringRequiredSchema,
  budget: Joi.array().items(
    Joi.object({
      description_of_expense: stringRequiredSchema,
      cost_last_year: numberSchema.required(),
      budget_current_year: numberSchema.required(),
    })
  ),
  conclusion: stringRequiredSchema,
}).options({ abortEarly: false });

module.exports = projectValidationSchema;
