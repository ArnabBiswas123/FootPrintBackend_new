const express = require("express");
const router = express.Router();

const reviewerSignup = require("../controller/reviewerSignup");
const reviewerlogin = require("../controller/reviewerLogin");
const applicantSignup = require("../controller/applicantSignup");
const applicantlogin = require("../controller/applicantLogin");
const allReviewerOfProvince = require("../controller/allReviewerOfProvince");
const approverSignup = require("../controller/approverSignup");
const approverlogin = require("../controller/approverLogin");
const reviewerVarify = require("../controller/reviewerVarify");
const reviewerUnvarify = require("../controller/reviewerUnvarify");
const applicantVarify = require("../controller/applicantVarify");
const applicantUnvarify = require("../controller/applicantUnvarify");
const allreviewer = require("../controller/allReviewer");
const allapplicant = require("../controller/allApplicant");
const { protectReviewer } = require("../middleware/authReviewer");
const { protectApprover } = require("../middleware/authApprover");
const { protectApplicant } = require("../middleware/authApplicant");
const reviewerChangePassword = require("../controller/reviewerChangePassword");
const getApplicant = require("../controller/getApplicant");
const getReviewer = require("../controller/getReviewer");
const getApprover = require("../controller/getApprover");
const approverChangePassword = require("../controller/approverChangePassword");
const applicantChangePassword = require("../controller/applicantChangepassword");
const sendEmailApplicant = require("../controller/sendEmailApplicant");
const varifyEmailApplicant = require("../controller/varifyEmailApplicant");
const sendEmailReviewer = require("../controller/sendEmailReviewer");
const varifyEmailReviewer = require("../controller/varifyEmailReviewer");
const sendEmailApprover = require("../controller/sendEmailApprover");
const varifyEmailApprover = require("../controller/varifyEmailApprover");
const allapplicantApprover = require("../controller/allApplicantsApprover");

router.post("/sendemailapplicant", sendEmailApplicant);
router.post("/sendemailreviewer", sendEmailReviewer);
router.post("/sendemailapprover", sendEmailApprover);
router.post("/varifyemailapplicant", protectApplicant, varifyEmailApplicant);
router.post("/varifyemailreviewer", protectReviewer, varifyEmailReviewer);
router.post("/varifyemailapprover", protectApprover, varifyEmailApprover);

// done
router.post("/reviewersignup", reviewerSignup);
// done
router.post("/reviewerlogin", reviewerlogin);
// done
router.post("/applicantsignup", applicantSignup);
// done
router.post("/applicantlogin", applicantlogin);
// done
router.post("/approversignup", approverSignup);
// done
router.get("/allreviewer/:province", allReviewerOfProvince);
//done
router.post("/approverlogin", approverlogin);
// done
// req.body{}
router.put("/reviewervarify", protectApprover, reviewerVarify);
// done
router.put("/applicantvarify", protectReviewer, applicantVarify);
//done
router.delete("/reviewerunvarify", protectApprover, reviewerUnvarify);
// done
router.delete("/applicantunvarify", protectReviewer, applicantUnvarify);
// done
router.get("/allreviewer", protectApprover, allreviewer);
// done
router.get("/allapplicant", protectReviewer, allapplicant);
//new creation
router.get("/allapplicantsapprover", protectApprover, allapplicantApprover);
// done
router.get("/getapplicant", protectApplicant, getApplicant);
//done
router.get("/getreviewer", protectReviewer, getReviewer);
//done
router.get("/getapprover", protectApprover, getApprover);
// done
router.put("/changepasswordreviewer", protectReviewer, reviewerChangePassword);
// done
router.put("/changepasswordapprover", protectApprover, approverChangePassword);

// done
router.put(
  "/changepasswordapplicant",
  protectApplicant,
  applicantChangePassword
);

module.exports = router;
