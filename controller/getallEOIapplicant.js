const EOI = require("../modals/EducationOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallEOIapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const EOIapplicant=await EOI.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(EOIapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({ success: true, data: EOIapplicant });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = getallEOIapplicant;
