const EI = require("../modals/EducationIndividual");
// const Applicant = require("../modals/Applicant");

const getallEIreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const EIreviewer=await EI.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(EIreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:EIreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallEIreviewer