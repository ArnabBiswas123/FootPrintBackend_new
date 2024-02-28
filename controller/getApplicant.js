const Applicant = require("../modals/Applicant");

const getApplicant=async(req,res)=>{
    try {
        const applicantExists=await Applicant.findById(req.user.id).select("-password");
        if(!applicantExists){
            return res.json({success:false, msg:'This applicant not exists' })
        }
        return res.json({success:true, data:applicantExists});
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}
module.exports=getApplicant


