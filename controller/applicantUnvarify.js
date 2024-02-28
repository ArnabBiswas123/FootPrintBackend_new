const Applicant = require("../modals/Applicant");
const applicantUnvarify=async (req,res)=>{
    try {
        const applicant = req.body.applicant;
        if (!applicant) {
          return res.json({ success: false, msg: "send all the fields" });
        }
        const applicantExists = await Applicant.findById(applicant);
        if (!applicantExists) {
          return res.json({ success: false, msg: "No such Applicant" });
        }
       await Applicant.findByIdAndDelete(applicant);
      return res.json({success:true, msg:'The applicant is successfully deleted'});


    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}
module.exports=applicantUnvarify