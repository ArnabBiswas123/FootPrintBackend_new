const EmailOtp = require("../modals/EmailOtp");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const Applicant = require("../modals/Applicant");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
dotenv.config();
const tarnsporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const sendEmailApplicant=async (req,res)=>{
        try {
            const user=await Applicant.findOne({email:req.body.email})
            if(!user){
               return res.status(404).json({success:false, msg:'User not exists'})
            }
           
            
              const data = {
                userData: {
                    id: user.id
                }
            }

            
            const authToken =await jwt.sign(data,process.env.JWT_SECRET,{ expiresIn: '15m' })
          
            const salt = await bcrypt.genSalt(10);
    const PLAIN_OTP = Math.floor(100000 + Math.random() * 900000);
    let String_Plain_Otp = PLAIN_OTP.toString();
    const OTP = await bcrypt.hash(String_Plain_Otp, salt);
    const existingEmail = await EmailOtp.findOne({ email: req.body.email });
    if (existingEmail) {
      await EmailOtp.findByIdAndUpdate(
        { _id: existingEmail._id },
        { otp: OTP },
        { new: true }
      );

      const mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: "sending OTP for validation",
        text: `OTP:- ${PLAIN_OTP}`,
      };

      tarnsporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(400).json({ success: false, error: "Email not send" });
        } else {
          res
            .status(200)
            .json({ success: true, message: "Email send successfully", token:authToken });
        }
      });
    } else {
      await EmailOtp.create({
        email: req.body.email,
        otp: OTP,
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: "sending OTP for validation",
        text: `OTP:- ${PLAIN_OTP}`,
      };

      tarnsporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error", error);
          res.status(400).json({ success: false, error: "Email not send" });
        } else {
          res
            .status(200)
            .json({ success: true, message: "Email send successfully", token:authToken });
        }
      });
    }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
  }
  module.exports=sendEmailApplicant