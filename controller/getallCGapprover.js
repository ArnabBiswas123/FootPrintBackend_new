const CG = require("../modals/CommonGroup");


const getallCGapprover=async(req,res)=>{
try {
    
    const CGapprover=await CG.find({ }).populate('applicant').populate('reviewer')
    if(CGapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }
    console.log(CGapprover);
    return res.json({success:true, data:CGapprover})

} catch (error) {
    console.log("CG approver error",error);
    res.json({ success: false });
}
}
module.exports=getallCGapprover