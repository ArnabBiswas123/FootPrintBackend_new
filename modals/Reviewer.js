const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  nameOfProvince: {
    type: String,
    required: true,
  },
  isVarified:{
    type:Boolean,
    default:false
  }
});
module.exports = mongoose.model("Reviewer", reviewerSchema);
