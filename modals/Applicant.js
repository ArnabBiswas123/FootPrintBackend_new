const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema=new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: Number, required: true },
    nameOfProvince: {
        type: String,
        required: true,
      },
    apostolate:{
        type:String,
        required:true,
        enum:["social","education","health","others"]
    },
    reviewer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reviewer',
        required:true
    },
    
      isVarified:{
        type:Boolean,
        required:true,
        default:false
      }
})

module.exports = mongoose.model("Applicant", applicantSchema);