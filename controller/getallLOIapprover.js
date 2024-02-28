const LOI = require("../modals/LivlihoodOngoingIndividual");


const getallLOIapprover=async(req,res)=>{
try {
    const LOIapprover=await LOI.find({}).populate('applicant').populate('reviewer')
    if(LOIapprover.length===0){
        return res.json({success:false, msg:'No project'})
    }

    return res.json({success:true, data:LOIapprover})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallLOIapprover