const ISG = require("../modals/InstitutionSkillGroup");


const getallISGapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const ISGapplicant=await ISG.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(ISGapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:ISGapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallISGapplicant