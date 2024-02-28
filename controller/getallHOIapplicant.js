const HOI = require("../modals/HealthOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallHOIapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const HOIapplicant=await HOI.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(HOIapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:HOIapplicant})
} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallHOIapplicant