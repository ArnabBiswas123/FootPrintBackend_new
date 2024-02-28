const EOI = require("../modals/EducationOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallEOIreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const EOIreviewer=await EOI.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(EOIreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:EOIreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallEOIreviewer