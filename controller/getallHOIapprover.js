const HOI = require("../modals/HealthOngoingIndividual");


const getallHOIapprover=async(req,res)=>{
try {
    // const approver=req.user;
    const HOIapprover=await HOI.find({}).populate('applicant').populate('reviewer')
    if(HOIapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }

    return res.json({success:true, data:HOIapprover})

} catch (error) {
    console.log("HOI approver",error);
    res.json({ success: false });
}
}
module.exports=getallHOIapprover