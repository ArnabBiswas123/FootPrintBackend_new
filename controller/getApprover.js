const Approver = require("../modals/Approver");

const getApprover=async(req,res)=>{
    try {
        const approverExists=await Approver.findById(req.user.id).select("-password");
        if(!approverExists){
            return res.json({success:false, msg:'This applicant not exists'})
        }
        return res.json({success:true, data:approverExists});
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}
module.exports=getApprover