const jwt = require("jsonwebtoken");
const Approver = require('../modals/Approver');

const protectApprover = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      
      req.user = await Approver.findById(decoded.userData.id).select("-password");


      next();
    } catch (error) {
      return res.json({success:false, msg:'Token is not correct'});
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    // res.status(401);
    return res.json({success:false, msg:'Token is not there'});
    throw new Error("Not authorized, no token");
  }
};

module.exports = { protectApprover };