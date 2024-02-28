const mongoose = require("mongoose");


const HIVAffectedOutreach = new mongoose.Schema(
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
          ref: 'Applicant',
        },
        agree: { type: Boolean, default: false },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
      provincial_superior:{
        comment: {type: String , default: null}
        ,ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Reviewer',
        },
        agree: { type: Boolean, default: false },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
      project_coordinators: [
        {
          comment: {type: String , default: null}
          ,ref: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Approver',
          },
          agree: { type: Boolean, default: false },
          date: {
            type: Date,
            default: Date.now(),
          },
        }
      ],
    },
    key_information: {
      support_programmes_till_date: {
        type: String,
        required: true,
      },
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
    },
    challenges_faced_by_the_benificiary: String,
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

HIVAffectedOutreach.index({
  project_number: -1, // index in decreasing order
});

module.exports = mongoose.model("hiv_affected_outreach", HIVAffectedOutreach);
