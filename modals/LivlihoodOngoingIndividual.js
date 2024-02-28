const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Budget_cost = new Schema({
  budget: { type: Number, required: true },
  cost: { type: Number, required: true },
});

const LivlihoodOngoingIndividual = new Schema({
  project_code: { type: String, required: true, unique: true },
  self_employment_nature: {
    type: String,
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Applicant",
    required: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviewer",
    required: true,
  },
  photograph_benificary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  aadhar_no: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  DOB: {
    type: String,
    required: true,
  },
  married: {
    type: String,
    default: null,
  },
  spouse_name: {
    type: String,
    default: null,
  },
  no_of_children: {
    type: Number,
    default: 0,
  },
  children_education: {
    type: String,
    default: null,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  present_family_situation: {
    type: String,
    required: true,
  },
  Project_amount_already_received: {
    type: Number,
    required: true,
  },
  impact_created_in_the_ife_of_the_beneficiary: {
    type: String,
    required: true,
  },
  Average_revenue_generated_previous_year: {
    type: Number,
    required: true,
  },
  how_the_income_invested: {
    type: String,
    required: true,
  },
  strengths_of_business_activity_in_the_previous_year: {
    type: String,
    required: true,
  },
  weaknesses_of_business_activity_in_the_previous_year: {
    type: String,
    required: true,
  },
  about_risks: {
    type: String,
    required: true,
  },
  plans_of_the_business_expansion: {
    type: String,
    required: true,
  },

  budget_cost_table: [Budget_cost],

  total_amount_cost: {
    type: Number,
    required: true,
  },
  beneficiaries_contribution: {
    type: Number,
    required: true,
  },
  amount_requested: {
    type: Number,
    required: true,
  },

  aadhar_img: {
    type: String,
    required: true,
  },
  request_letter_img: {
    type: String,
    required: true,
  },
  quotations_regarding_the_purchase_img: {
    type: String,
    required: true,
  },
  other_supporting_documents: {
    type: String,
    required: true,
  },
// agree syntax changed 
  benificary_agree: {
    agree: { type: Boolean, dafault: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  // agree_syntax_changed
  project_coordinator_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  // agree_sytanx_changed
  project_in_charge_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  //agree_syntax_changed
  provincial_superior_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  comment_box_provincial_superior: {
    type: String,
    default: null,
  },
  comment_box_project_coordinator: {
    type: String,
    default: null,
  },
});
module.exports = mongoose.model("LOI", LivlihoodOngoingIndividual);
