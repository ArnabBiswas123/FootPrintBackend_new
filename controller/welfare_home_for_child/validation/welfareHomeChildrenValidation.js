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

const statisticsSchema = Joi.object({
  description: Joi.string()
    .valid(
      "Total number of children in the institution",
      "Children who are rehabilitated with their guardians/parents",
      "Children who are shifted to other NGOs / Govt",
      "Children who are pursuing higher studies outside",
      "Children who completed the studies and settled down in life (i.e. married etc.)",
      "Children who are now settled and working",
      "Any other category kindly mention"
    )
    .required(),
  previous_year: Joi.number().default(0),
  present_year: Joi.number().default(0),
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

const supportProvidedSchema = Joi.object({
  form_of_support: Joi.string()
    .valid(
      "Fund/scholarships",
      "Tuition and clothing",
      "Nutrition",
      "Free Residence"
    )
    .required(),
  gender: Joi.string().valid("Girls", "Boys").required(),
  number_previous_year: Joi.number().default(0),
  number_present_academic_year: Joi.number().default(0),
});

const achievementSchema = Joi.object({
  academic_achievements: Joi.array().items(Joi.string()),
  sport_achievements: Joi.array().items(Joi.string()),
  other_achievements: Joi.array().items(Joi.string()),
});

const activitySchema = Joi.object({
  activity: Joi.string().required(),
  timeframe: Joi.array().items(Joi.boolean()).length(12).required(),
  indicator: Joi.string(),
  verification: Joi.string(),
});

const objectiveSchema = 
  Joi.object({
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

const welfareHomeChildrenValidation = Joi.object({
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
    goal_purpose_of_institution: Joi.object({
      goal_and_purpose: Joi.string().required(),
      rational: Joi.string().required(),
    }),
    statistics_of_passed_out_rehabilitated_children:
      Joi.array().items(statisticsSchema),
    age_profile_of_children_and_youth: Joi.array().items(ageProfileSchema),
    personal_situation_of_children_youth: Joi.array().items(
      personalSituationSchema
    ),
    economic_background_of_parents: Joi.array().items(economicBackgroundSchema),
    multiple_support_provided_for_integrated_development: Joi.array().items(
      supportProvidedSchema
    ),
    achievements_of_school_and_college_children: achievementSchema,
  }),
  present_situation_of_inmates: Joi.object({
    internal_challenges_and_present_difficulties: Joi.string(),
    external_challenges_and_present_difficulties: Joi.string(),
  }),
  focus_areas_in_present_year: Joi.string(),
  solution_analysis_logical_framework: solutionAnalysisSchema,
  staff: Joi.string().required(),
  sustainability: Joi.string(),
  monitoring_and_evaluation: Joi.string(),
  budget: budgetSchema,
  amount_approved: Joi.number().default(0),
}).options({ abortEarly: false });

module.exports = welfareHomeChildrenValidation;
