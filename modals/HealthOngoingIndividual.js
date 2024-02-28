const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Earning_members = new Schema({
  family_member: { type: String, required: true },
  nature_of_work: { type: String, required: true },
  monthly_income: { type: String, required: true },
});
const HealthOngoingIndividual = new Schema({
  project_code: { type: String, required: true, unique: true },
  illness_nature: { type: String, required: true },
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
  present_earning_member: [Earning_members],
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
  father: {
    type: String,
    required: true,
  },
  no_of_children: {
    type: Number,
    required: true,
    default: 0,
  },
  language: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  nature_illness: {
    type: String,
    required: true,
  },
  past_project_duration: {
    type: Number,
    required: true,
  },
  more_details_about_health: {
    type: String,
    required: true,
  },
  present_situation_family: {
    type: String,
    required: true,
  },
  Govt_or_other_support: {
    type: String,
    required: true,
    enum: ["Yes", "No"],
  },
  nature_of_support: {
    type: String,
    required: true,
  },
  previous_amount_received: {
    type: Number,
    required: true,
  },
  previous_total_amount: {
    type: Number,
    required: true,
  },
  present_health_total_expense: {
    type: Number,
    required: true,
  },
  present_health_family_contribute: {
    type: Number,
    required: true,
  },
  present_health_amount_requested: {
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
  treatment_record_img: {
    type: String,
    required: true,
  },
  other_supporting_docs_img: {
    type: String,
    required: true,
  },
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
  amount_approved_project_coordinator: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("HOI", HealthOngoingIndividual);
