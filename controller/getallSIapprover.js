const SI = require("../modals/SocialIndividual");


const getallSIapprover=async(req,res)=>{
try {
    const SIapprover=await SI.find({}).populate('applicant').populate('reviewer')
    if(SIapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }

    return res.json({success:true, data:SIapprover})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallSIapprover