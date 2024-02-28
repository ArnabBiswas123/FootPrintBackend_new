const mongoose = require("mongoose");

const welfareHomeChildrenSchema = new mongoose.Schema(
  {
    present_project_year: {
      type: String,
      required: true,
    },
    project_title: {
      type: String,
      required: true, // Required field
    },
    project_number: {
      // unique: true,
      type: String,
      required: true, // Required field
    },
    general_information: {
      project_region: {
        type: String,
        required: true, // Required field
      },
      institution_name: {
        type: String,
        required: true, // Required field
      },
      overall_project_period: {
        type: String,
        required: true, // Required field
      },
      overall_project_budget: {
        type: Number,
        required: true, // Required field
      },
    },
    mailing_list: {
      president_of_the_society: {
        name: {
          type: String,
          required: true, // Required field
        },
        email: {
          type: String,
          required: true, // Required field
        },
        // address: { type: String, required: true },
        agree: {
          type: Boolean,
          default: false,
        }, // Agreement field

        date: {
          type: Date,
          default: Date.now(),
        }, // Date of agreement field
      },
      project_in_charge: {
        ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Applicant",
        },
        agree: { type: Boolean, default: false },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
      provincial_superior: {
        comment: { type: String, default: null },
        ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reviewer",
        },
        agree: { type: Boolean, default: false },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
      project_coordinators: [
        {
          comment: { type: String, default: null },
          ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Approver",
          },
          agree: { type: Boolean, default: false },
          date: {
            type: Date,
            default: Date.now(),
          },
        },
      ],
    },
    key_information: {
      goal_purpose_of_institution: {
        goal_and_purpose: {
          type: String,
          required: true, // Required field
        },
        rational: {
          type: String,
          required: true, // Required field
        },
      },
      statistics_of_passed_out_rehabilitated_children: [
        {
          description: {
            type: String,
            enum: [
              "Total number of children in the institution",
              "Children who are rehabilitated with their guardians/parents",
              "Children who are shifted to other NGOs / Govt",
              "Children who are pursuing higher studies outside",
              "Children who completed the studies and settled down in life (i.e. married etc.)",
              "Children who are now settled and working",
              "Any other category kindly mention",
            ],
            required: true, // Required field
          },
          previous_year: {
            type: Number,
            required: true, // Required field
          },
          present_year: {
            type: Number,
            required: true, // Required field
          },
        },
      ],
      age_profile_of_children_and_youth: [
        {
          age_category: {
            type: String,
            enum: [
              "Children below 5 years",
              "Children between 6 to 10 years",
              "Youth between 11 to 15 years old",
              "Youth 16 and above",
            ],
            required: true, // Required field
          },
          education: String,
          previous_year: Number,
          present_academic_year: Number,
        },
      ],
      personal_situation_of_children_youth: [
        {
          description: {
            type: String,
            enum: [
              "Children/students with parents",
              "Semi-orphans (living with relatives)",
              "Orphans",
              "HIV-infected/affected",
              "Differently-abled children",
              "Parents in conflict",
              "Other aliments",
            ],
            required: true, // Required field
          },
          previous_year: Number,
          present_academic_year: Number,
        },
      ],
      economic_background_of_parents: [
        {
          description: {
            type: String,
            enum: [
              "Agricultural Labour",
              "Marginal farmers (Number of parents with less than two and half acres of land)",
              "Parents self-employed",
              "Parents working in the informal sector",
              "Any other",
            ],
            required: true, // Required field
          },
          number: {
            type: Number,
            default: 0,
          },
        },
      ],
      multiple_support_provided_for_integrated_development: [
        {
          form_of_support: {
            type: String,
            enum: [
              "Fund/scholarships",
              "Tuition and clothing",
              "Nutrition",
              "Free Residence",
            ],
            required: true, // Required field
          },
          gender: {
            type: String,
            enum: ["Girls", "Boys"],
            required: true, // Required field
          },
          number_previous_year: Number,
          number_present_academic_year: Number,
        },
      ],
      achievements_of_school_and_college_children: {
        academic_achievements: [String],
        sport_achievements: [String],
        other_achievements: [String],
      },
    },
    present_situation_of_inmates: {
      internal_challenges_and_present_difficulties: String,
      external_challenges_and_present_difficulties: String,
    },
    focus_areas_in_present_year: String,
    solution_analysis_logical_framework: {
      goal: String,
      objectives: [
        {
          objective: String,
          results: [String],
          activities: [
            {
              activity: String,
              timeframe: [Boolean],
              indicator: String,
              verification: String,
            },
          ],
        },
      ],
    },
    staff: {
      type: String,
      required: true,
    },
    sustainability: String,
    monitoring_and_evaluation: String,
    budget: {
      budget_particular: [
        {
          expense_description: String,
          costs_last_year: Number,
          budget_current_year: Number,
        },
      ],
      total: {
        costs_last_year: {
          type: Number,
          default: 0,
        },
        budget_current_year: {
          type: Number,
          default: 0,
        },
      },
    },
    amount_approved: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

welfareHomeChildrenSchema.index({
  project_number: -1, // index in decreasing order
});

module.exports = mongoose.model(
  "welfare_home_childrens",
  welfareHomeChildrenSchema
);
