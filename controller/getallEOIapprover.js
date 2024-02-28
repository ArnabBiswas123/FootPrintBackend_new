const EOI = require("../modals/EducationOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallEOIapprover=async(req,res)=>{
try {
    // there are multiple approver 
    const EOIapprover=await EOI.find({ }).populate('applicant').populate('reviewer')
    if(EOIapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(EOIapprover);
    return res.json({success:true, data:EOIapprover})

} catch (error) {
    console.log("EOI approver error",error);
    res.json({ success: false });
}
}
module.exports=getallEOIapprover