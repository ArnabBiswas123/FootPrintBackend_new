const LOI = require("../modals/LivlihoodOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallLOIapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const LOIapplicant=await LOI.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(LOIapplicant.length===0){
        return res.json({success:false, msg:'No project for this reviewer'})
    }

    return res.json({success:true, data:LOIapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallLOIapplicant