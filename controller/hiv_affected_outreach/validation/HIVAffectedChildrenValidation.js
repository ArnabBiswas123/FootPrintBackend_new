const Joi = require("joi");

const mailingListSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  agree: Joi.boolean(),
  date: Joi.date(),
});

const roleSchema = Joi.object({
  agree: Joi.boolean(),
  date: Joi.date(),
});

const ageProfileSchema = Joi.object({
  age_category: Joi.string()
    .valid(
      "Children below 5 years",
      "Children between 6 to 10 years",
      "Youth between 11 to 15 years old",
      "Youth 16 and above"
    )
    .required(),
  education: Joi.string(),
  previous_year: Joi.number().default(0),
  present_academic_year: Joi.number().default(0),
});

const personalSituationSchema = Joi.object({
  description: Joi.string()
    .valid(
      "Children/students with parents",
      "Semi-orphans (living with relatives)",
      "Orphans",
      "HIV-infected/affected",
      "Differently-abled children",
      "Parents in conflict",
      "Other aliments"
    )
    .required(),
  previous_year: Joi.number().default(0),
  present_academic_year: Joi.number().default(0),
});

const economicBackgroundSchema = Joi.object({
  description: Joi.string()
    .valid(
      "Agricultural Labour",
      "Marginal farmers (Number of parents with less than two and half acres of land)",
      "Parents self-employed",
      "Parents working in the informal sector",
      "Any other"
    )
    .required(),
  number: Joi.number().default(0),
});

const activitySchema = Joi.object({
  activity: Joi.string().required(),
  timeframe: Joi.array().items(Joi.boolean()).length(12).required(),
  indicator: Joi.string(),
  verification: Joi.string(),
});

const objectiveSchema = Joi.object({
  objective: Joi.string(),
  results: Joi.array().items(Joi.string()),
  activities: Joi.array().items(activitySchema),
});

const solutionAnalysisSchema = Joi.object({
  goal: Joi.string().required(),
  objectives: Joi.array().items(objectiveSchema),
});

const budgetSchema = Joi.object({
  budget_particular: Joi.array().items(
    Joi.object().keys({
      expense_description: Joi.string(),
      costs_last_year: Joi.number(),
      budget_current_year: Joi.number(),
    })
  ),
  total: Joi.object().keys({
    costs_last_year: Joi.number(),
    budget_current_year: Joi.number(),
  }),
});

const hivAffectedChildrenValidation = Joi.object({
  project_title: Joi.string().required(),
  project_number: Joi.string(),
  general_information: Joi.object({
    project_region: Joi.string().required(),
    institution_name: Joi.string().required(),
    overall_project_period: Joi.string().required(),
    overall_project_budget: Joi.number().required(),
  }),
  mailing_list: Joi.object({
    president_of_the_society: mailingListSchema.required(), // required from the schema
    project_in_charge: roleSchema,
    provincial_superior: roleSchema.keys({
      comment: Joi.string().default(null),
    }),
    project_coordinators: Joi.array().items(
      roleSchema.keys({
        comment: Joi.string().default(null),
      })
    ),
  }),
  key_information: Joi.object({
    support_programmes_till_date: Joi.string().required(),
    age_profile_of_children_and_youth: Joi.array().items(ageProfileSchema),
    personal_situation_of_children_youth: Joi.array().items(
      personalSituationSchema
    ),
    economic_background_of_parents: Joi.array().items(economicBackgroundSchema),
  }),
  challenges_faced_by_the_benificiary: Joi.string(),
  focus_areas_in_present_year: Joi.string(),
  solution_analysis_logical_framework: solutionAnalysisSchema,
  sustainability: Joi.string(),
  monitoring_and_evaluation: Joi.string(),
  budget: budgetSchema,
}).options({ abortEarly: false });

module.exports = hivAffectedChildrenValidation;
