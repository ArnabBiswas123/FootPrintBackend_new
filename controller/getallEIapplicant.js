const EI = require("../modals/EducationIndividual");
// const Applicant = require("../modals/Applicant");

const getallEIapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const EIapplicant=await EI.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(EIapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:EIapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallEIapplicant