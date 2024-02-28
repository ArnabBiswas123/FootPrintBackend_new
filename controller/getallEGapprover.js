const EG = require("../modals/EducationGroup");


const getallEGapprover=async(req,res)=>{
try {
    
    const EGapprover=await EG.find({ }).populate('applicant').populate('reviewer')
    if(EGapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(EGapprover);
    return res.json({success:true, data:EGapprover})

} catch (error) {
    console.log("EG approver error",error);
    res.json({ success: false });
}
}
module.exports=getallEGapprover