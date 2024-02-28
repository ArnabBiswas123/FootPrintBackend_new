const CG = require("../modals/CommonGroup");


const getallCGapplicant=async(req,res)=>{
try {
    const applicant=req.user;
    const CGapplicant=await CG.find({ applicant: applicant}).populate('reviewer').populate('applicant')
    if(CGapplicant.length===0){
        return res.json({success:false, msg:'No project for this applicant'})
    }

    return res.json({success:true, data:CGapplicant})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallCGapplicant