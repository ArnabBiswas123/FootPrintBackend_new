const DPLG = require("../modals/DevProjLivliGroup");
// const Applicant = require("../modals/Applicant");

const getallDPLGapprover=async(req,res)=>{
try {
    
    const DPLGapprover=await DPLG.find({ }).populate('applicant').populate('reviewer')
    if(DPLGapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(DPLGapprover);
    return res.json({success:true, data:DPLGapprover})

} catch (error) {
    console.log("DPLG approver error",error);
    res.json({ success: false });
}
}
module.exports=getallDPLGapprover