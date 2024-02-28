const Reviewer = require("../modals/Reviewer");
const allReviewerOfProvince=async(req,res)=>{
    try {
        const province=req.params.province;
        if(!province){
            return res.json({success:false, msg:'Province not exists'});
        }
        const data=await Reviewer.find({nameOfProvince:province,isVarified:true});
        if(data.length===0){
            return res.json({success:false, msg:'No reviewer in this province'});
        }
        return res.json({success:true, reviewers:data})



    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}
module.exports=allReviewerOfProvince