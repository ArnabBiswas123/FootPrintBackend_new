const CG = require("../modals/CommonGroup");
// const Applicant = require("../modals/Applicant");

const getallCGreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const CGreviewer=await CG.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(CGreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:CGreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallCGreviewer