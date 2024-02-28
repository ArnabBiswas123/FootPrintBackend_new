const LOI = require("../modals/LivlihoodOngoingIndividual");


const getallLOIreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const LOIreviewer=await LOI.find({ reviewer: reviewer}).populate('applicant').populate('reviewer')
    if(LOIreviewer.length===0){
        return res.json({success:false, msg:'No project for this reviewer'})
    }

    return res.json({success:true, data:LOIreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallLOIreviewer