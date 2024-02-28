const DPLG = require("../modals/DevProjLivliGroup");


const getallDPLGapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const DPLGapplicant=await DPLG.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(DPLGapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:DPLGapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallDPLGapplicant