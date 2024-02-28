const EI = require("../modals/EducationIndividual");
// const Applicant = require("../modals/Applicant");

const getallEIapprover=async(req,res)=>{
try {
    
    const EIapprover=await EI.find({ }).populate('applicant').populate('reviewer').populate('approver')
    if(EIapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(EIapprover);
    return res.json({success:true, data:EIapprover})

} catch (error) {
    console.log("EI approver error",error);
    res.json({ success: false });
}
}
module.exports=getallEIapprover