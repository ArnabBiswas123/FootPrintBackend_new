const EG = require("../modals/EducationGroup");


const getallEGreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const EGreviewer=await EG.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(EGreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:EGreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallEGreviewer