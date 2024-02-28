const Reviewer = require("../modals/Reviewer");
const allreviewer=async(req,res)=>{
    try {
        const allreviewer=await Reviewer.find({});
        if(allreviewer.length===0){
            return res.json({success:false, msg:'No reviewer'})
        }
        return res.json({success:true, data:allreviewer}) 
    } catch (error) {
        console.log(error);
        return res.json({ success: false });
    }
}
module.exports=allreviewer