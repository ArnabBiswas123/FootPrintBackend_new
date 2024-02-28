const ISG = require("../modals/InstitutionSkillGroup");
// const Applicant = require("../modals/Applicant");

const getallISGapprover=async(req,res)=>{
try {
    
    const ISGapprover=await ISG.find({ }).populate('applicant').populate('reviewer')
    if(ISGapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(ISGapprover);
    return res.json({success:true, data:ISGapprover})

} catch (error) {
    console.log("ISG approver error",error);
    res.json({ success: false });
}
}
module.exports=getallISGapprover