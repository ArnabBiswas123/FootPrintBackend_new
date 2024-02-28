const jwt = require("jsonwebtoken");
const Applicant = require('../modals/Applicant');

const protectApplicant = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];


      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  
      
      req.user = await Applicant.findById(decoded.userData.id).select("-password");



      next();
    } catch (error) {
      return res.json({success:false, msg:'Token is not correct'});
    
    }
  }

  if (!token) {
    // res.status(401);
    return res.json({success:false, msg:'Token is not there'});

  }
};

module.exports = { protectApplicant };