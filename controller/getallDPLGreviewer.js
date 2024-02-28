const DPLG = require("../modals/DevProjLivliGroup");
// const Applicant = require("../modals/Applicant");

const getallDPLGreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const DPLGreviewer=await DPLG.find({ reviewer:reviewer}).populate('applicant').populate('reviewer')
    if(DPLGreviewer.length===0){
        return res.json({success:false, msg:'No project for this applicant' })
    }

    return res.json({success:true, data:DPLGreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallDPLGreviewer