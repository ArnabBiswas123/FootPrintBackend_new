const EG = require("../modals/EducationGroup");


const getallEGapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const EGapplicant=await EG.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(EGapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:EGapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallEGapplicant