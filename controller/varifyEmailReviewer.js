const EmailOtp = require("../modals/EmailOtp");
const Reviewer = require("../modals/Reviewer");
const bcrypt = require('bcrypt');
const varifyEmailReviewer = async (req, res) => {
    try {
      const {  otp,password } = req.body;
     
        const generatedotp = await EmailOtp.findOne({ email: req.user.email });
        if (!generatedotp) {
          res.status(400).json({ success: false, message: "Time limit exceeds" });
        } else {
          const otpCompare = await bcrypt.compare(otp, generatedotp.otp)


  
          if (otpCompare) {

            const salt = await bcrypt.genSalt(10);
            
            const hashedPassword = await bcrypt.hash(password, salt);
          await  Reviewer.findOneAndUpdate({email:req.user.email},{password:hashedPassword},{new:true})
       
            res
              .status(200)
              .json({ success: true, message: "Email varified successfully" });
          } else {
            res
              .status(400)
              .json({ success: false, message: "otp is not correct" });
          }
        }
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  };
  module.exports = varifyEmailReviewer;