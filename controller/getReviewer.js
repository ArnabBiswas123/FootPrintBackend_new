const Reviewer = require("../modals/Reviewer");
const getReviewer=async(req,res)=>{
            try {
                const reviewerExists=await Reviewer.findById(req.user.id).select("-password");
                if(!reviewerExists){
                    return res.json({success:false, msg:'This applicant not exists' })
                }
                return res.json({success:true, data:reviewerExists});
            } catch (error) {
                console.log(error);
                res.json({ success: false });
            }
}
module.exports=getReviewer


