const Reviewer = require("../modals/Reviewer");
const reviewerUnvarify=async (req,res)=>{
        try {
            const reviewer = req.body.reviewer;
            if (!reviewer) {
              return res.json({ success: false, msg: "send all the fields" });
            }
            const reviewerExists = await Reviewer.findById(reviewer);
            if (!reviewerExists) {
              return res.json({ success: false, msg: "No such reviewer" });
            }
           await Reviewer.findByIdAndDelete(reviewer);
          return res.json({success:true, msg:'The reviewer is successfully deleted'});


        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
}
module.exports=reviewerUnvarify