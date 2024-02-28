const mongoose = require("mongoose");

// details of the beneficiary
// this a group project hence mulitple beneficiaries
const beneficiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  occupation_of_parents: {
    type: String,
    required: true,
  },
  family_background_and_need_of_support: {
    type: String,
    required: true,
  },
  class_of_study_or_name_of_institution: {
    type: String,
    required: true,
  },
  eligibility_of_scholarship_and_expected_amount: {
    type: String,
    required: true,
  },
  contribution_from_family: {
    type: String,
    required: true,
  },
});

const objectiveSchema = new mongoose.Schema({
  objective: { type: String, required: true },
  results_and_outcomes: [String],
  activities: [
    {
      activity: { type: String, required: true },
      months: [Boolean],
      means_of_verification: { type: String, required: true },
    },
  ],
});

const solutionAnalysisSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  objectives: [objectiveSchema],
});

const roleSchema = new mongoose.Schema({
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
});

const educationalGroupSupportSchema = new mongoose.Schema(
  {
    project_title: { type: String, required: true },
    project_number: { type: String, required: true },
    present_project_year: { type: Number, required: true },
    general_information: {
      full_address: { type: String, required: true },
      overall_project_period: { type: String, required: true },
      overall_project_budget: { type: Number, required: true },
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
      ], // Group projects will have two project Coordinators 
      provincial_superior: {
        comment: { type: String, default: null },
        ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reviewer",
        }, // IN view we need data of the reviewer 
        // For data we simply populate 
        agree: { type: Boolean, default: false },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
      project_incharge: {
        comment: { type: String, default: null },
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
    },
    project_summary: {
      project_location_geographical_area: { type: String, required: true },
      work_of_sisters_of_st_anns_in_the_project_area: String,
      general_socio_economic_conditions_of_the_beneficiaries: String,
      problems_identified_and_consequences: String,
      need_of_the_project: String,
      target_group: [beneficiarySchema],
      solution_analysis_logical_framework: solutionAnalysisSchema,
      sustainability: String,
      monitoring_process_of_the_project: String,
      mode_of_evaluation: String,
      budget: {
        expenses: [
          {
            description: { type: String, required: true },
            costs: { type: Number, required: true },
          },
        ],
        total: {
          type: Number,
          default: 0,
        },
      },
      amount_approved: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

educationalGroupSupportSchema.index({
  project_number: -1, // -1 implies the indexing will happen in decreasing order
});

module.exports = mongoose.model(
  "education_group_support",
  educationalGroupSupportSchema
);
