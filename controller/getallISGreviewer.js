const ISG = require("../modals/InstitutionSkillGroup");
// const Applicant = require("../modals/Applicant");

const getallISGreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const ISGreviewer=await ISG.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(ISGreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:ISGreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallISGreviewer