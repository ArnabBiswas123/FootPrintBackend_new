const SI = require("../modals/SocialIndividual");


const getallSIreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const SIreviewer=await SI.find({ reviewer: reviewer}).populate('applicant').populate('reviewer')
    if(SIreviewer.length===0){
        return res.json({success:false, msg:'No project for this reviewer'})
    }

    return res.json({success:true, data:SIreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallSIreviewer