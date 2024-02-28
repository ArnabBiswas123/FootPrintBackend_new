const express = require("express");
const router = express.Router();

const createHOI = require("../controller/createHOI");
const { protectApplicant } = require("../middleware/authApplicant");
const { protectReviewer } = require("../middleware/authReviewer");
const { protectApprover } = require("../middleware/authApprover");
const editHOIreviewer = require("../controller/editHOIreviewer");
const editHOIapprover = require("../controller/editHOIapprover");
const createEOI = require("../controller/createEOI");
const createLOI = require("../controller/createLOI");
const editEOIreviewer = require("../controller/editEOIreviewer");
const editEOIapprover = require("../controller/editEOIapprover");
const editLOIapprover = require("../controller/editLOIapprover");
const editLOIreviewer = require("../controller/editLOIreviewer");
const getallHOIapplicant = require("../controller/getallHOIapplicant");
const getallEOIapplicant = require("../controller/getallEOIapplicant");
const getallLOIapplicant = require("../controller/getallLOIapplicant");
const getallHOIreviewer = require("../controller/getallHOIreviewer");
const getallEOIreviewer = require("../controller/getallEOIreviewer");
const getallLOIreviewer = require("../controller/getallLOIreviewer");
const getallHOIapprover = require("../controller/getallHOIapprover");
const getallEOIapprover = require("../controller/getallEOIapprover");
const getallLOIapprover = require("../controller/getallLOIapprover");
const createSI = require("../controller/createSI");
const editedSIapprover = require("../controller/editSIapprover");
const editedSIreviewer = require("../controller/editSIreviewer");
const getallSIapplicant = require("../controller/getallSIapplicant");
const getallSIreviewer = require("../controller/getallSIreviewer");
const getallSIapprover = require("../controller/getallSIapprover");
const getallEIapprover = require("../controller/getallEIapprover");
const createEI = require("../controller/createEI");
const editEIapprover = require("../controller/editEIapprover");
const editEIreviewer = require("../controller/editEIreviewer");
const getallEIreviewer = require("../controller/getallEIreviewer");
const getallEIapplicant = require("../controller/getallEIapplicant");
const createDPLG = require("../controller/createDPLG");
const editDPLGapprover = require("../controller/editDPLGapprover");
const editDPLGreviewer = require("../controller/editDPLGreviewer");
const getallDPLGapplicant = require("../controller/getallDPLGapplicant");
const getallDPLGreviewer = require("../controller/getallDPLGreviewer");
const getallDPLGapprover = require("../controller/getallDPLGapprover");
const createWHFC = require("../controller/welfare_home_for_child/api/createWHFC");
const getAllWHFCApplicant = require("../controller/welfare_home_for_child/api/getAllWHFCApplicant");
const getAllWHFCApprover = require("../controller/welfare_home_for_child/api/getAllWHFCApprover");
const getAllWHFCReviewer = require("../controller/welfare_home_for_child/api/getAllWHFCReviewer");
const createEGS = require("../controller/educational_group_support_schema/api/createEGS");
const editEGSApplicant = require("../controller/educational_group_support_schema/api/editEGSApplicant");
const editEGSApprover = require("../controller/educational_group_support_schema/api/editEGSApprover");
const editEGSReviewer = require("../controller/educational_group_support_schema/api/editEGSReviewer");
const getAllEGSApplicant = require("../controller/educational_group_support_schema/api/getAllEGSApplicant");
const getAllEGSApprover = require("../controller/educational_group_support_schema/api/getAllEGSApprover");
const getAllEGSReviewer = require("../controller/educational_group_support_schema/api/getAllEGSReviewer");
const createNPDP = require("../controller/next_phase_of_development/api/createNPDP");
const editWHFCApplicant = require("../controller/welfare_home_for_child/api/editWHFCApplicant");
const editWHFCReviewer = require("../controller/welfare_home_for_child/api/editWHFCReviewer");
const editWHFCApprover = require("../controller/welfare_home_for_child/api/editWHFCApprover");
const editNPDPApplicant = require("../controller/next_phase_of_development/api/editNPDPApplicant");
const editNPDPApprover = require("../controller/next_phase_of_development/api/editNPDPApprover");
const editNPDPReviewer = require("../controller/next_phase_of_development/api/editNPDPReviewer");
const getAllNPDPApplicant = require("../controller/next_phase_of_development/api/getAllNPDPApplicant");
const getAllNPDPApprover = require("../controller/next_phase_of_development/api/getAllNPDPApprover");
const getAllNPDPReviewer = require("../controller/next_phase_of_development/api/getAllNPDPReviewer");
const createHIV = require("../controller/hiv_affected_outreach/api/createHIV");
const editHIVApplicant = require("../controller/hiv_affected_outreach/api/editHIVApplicant");
const editHIVApprover = require("../controller/hiv_affected_outreach/api/editHIVApprover");
const editHIVReviewer = require("../controller/hiv_affected_outreach/api/editHIVReviewer");
const getAllHIVApplicant = require("../controller/hiv_affected_outreach/api/getAllHIVApplicant");
const getAllHIVApprover = require("../controller/hiv_affected_outreach/api/getAllHIVApprover");
const getAllHIVReviewer = require("../controller/hiv_affected_outreach/api/getAllHIVReviewer");
const createEG = require("../controller/createEG");
const createCG = require("../controller/createCG");
const editCGapprover = require("../controller/editCGapprover");
const editCGreviewer = require("../controller/editCGreviewer");
const getallCGapplicant = require("../controller/getallCGapplicant");
const getallCGapprover = require("../controller/getallCGapprover");
const getallCGreviewer = require("../controller/getallCGreviewer");
const editEGapprover = require("../controller/editEGapprover");
const editEGreviewer = require("../controller/editEGreviewer");
const getallEGapplicant = require("../controller/getallEGapplicant");
const getallEGapprover = require("../controller/getallEGapprover");
const getallEGreviewer = require("../controller/getallEGreviewer");
const createISG = require("../controller/createISG");
const editISGapprover = require("../controller/editISGapprover");
const editISGreviewer = require("../controller/editISGreviewer");
const getallISGapplicant = require("../controller/getallISGapplicant");
const getallISGapprover = require("../controller/getallISGapprover");
const getallISGreviewer = require("../controller/getallISGreviewer");
const editEG = require("../controller/editEG");
const editEI = require("../controller/editEI");
const editDPLG = require("../controller/editDPLG");
const editHOI = require("../controller/editHOI");
const editEOI = require("../controller/editEOI");
const editCG = require("../controller/editCG");
const editISG = require("../controller/editISG");
const editSI = require("../controller/editSI");

// EG Routes
router.post("/createEG", protectApplicant, createEG);
router.put("/editEGApprover", protectApprover, editEGapprover);
router.put("/editEGReviewer", protectReviewer, editEGreviewer);
router.get("/getAllEGApplicant", protectApplicant, getallEGapplicant);
router.get("/getAllEGApprover", protectApprover, getallEGapprover);
router.get("/getAllEGReviewer", protectReviewer, getallEGreviewer);
router.put('/editEG',protectApplicant,editEG)



// EGS Routes
router.post("/createEGS", protectApplicant, createEGS);
router.put("/editEGSApplicant", protectApplicant, editEGSApplicant);
router.put("/editEGSApprover", protectApprover, editEGSApprover);
router.put("/editEGSReviewer", protectReviewer, editEGSReviewer);
router.get("/getAllEGSApplicant", protectApplicant, getAllEGSApplicant);
router.get("/getAllEGSApprover", protectApprover, getAllEGSApprover);
router.get("/getAllEGSReviewer", protectReviewer, getAllEGSReviewer);


// SI Routes
router.post("/createSI", protectApplicant, createSI);
router.put("/editapproverSI", protectApprover, editedSIapprover);
router.put("/editreviewerSI", protectReviewer, editedSIreviewer);
router.get("/getallSIapplicant", protectApplicant, getallSIapplicant);
router.get("/getallSIreviewer", protectReviewer, getallSIreviewer);
router.get("/getallSIapprover", protectApprover, getallSIapprover);
router.put('/editSI',protectApplicant, editSI);

// EI Routes
router.post("/createEI", protectApplicant, createEI);
router.put("/editapproverEI", protectApplicant, editEIapprover);
router.put("/editreviewerEI", protectReviewer, editEIreviewer);
router.get("/getallEIapprover", protectApprover, getallEIapprover);
router.get("/getallEIreviewer", protectReviewer, getallEIreviewer);
router.get("/getallEIapplicant", protectApplicant, getallEIapplicant);
router.put('/editEI',protectApplicant,editEI)


// DPLG Routes
router.post("/createDPLG", protectApplicant, createDPLG);
router.put("/editapproverDPLG", protectApprover, editDPLGapprover);
router.put("/editreviewerDPLG", protectReviewer, editDPLGreviewer);
router.get("/getallDPLGapplicant", protectApplicant, getallDPLGapplicant);
router.get("/getallDPLGreviewer", protectReviewer, getallDPLGreviewer);
router.get("/getallDPLGapprover", protectApprover, getallDPLGapprover);
router.put('/editDPLG',protectApplicant,editDPLG)


// HOI Routes
router.post("/createHOI", protectApplicant, createHOI);
router.put("/editreviewerHOI", protectReviewer, editHOIreviewer);
router.put("/editapproverHOI", protectApprover, editHOIapprover);
router.get("/getallHOIapplicant", protectApplicant, getallHOIapplicant);
router.get("/getallHOIreviewer", protectReviewer, getallHOIreviewer);
router.get("/getallHOIapprover", protectApprover, getallHOIapprover);
router.put('/editHOI',protectApplicant,editHOI)


// EOI Routes
router.post("/createEOI", protectApplicant, createEOI);
router.put("/editreviewerEOI", protectReviewer, editEOIreviewer);
router.put("/editapproverEOI", protectApprover, editEOIapprover);
router.get("/getallEOIapplicant", protectApplicant, getallEOIapplicant);
router.get("/getallEOIreviewer", protectReviewer, getallEOIreviewer);
router.get("/getallEOIapprover", protectApprover, getallEOIapprover);
router.put('/editEOI',protectApplicant,editEOI)


// LOI Routes
router.post("/createLOI", protectApplicant, createLOI);
router.put("/editreviewerLOI", protectReviewer, editLOIreviewer);
router.put("/editapproverLOI", protectApprover, editLOIapprover);
router.get("/getallLOIapplicant", protectApplicant, getallLOIapplicant);
router.get("/getallLOIreviewer", protectReviewer, getallLOIreviewer);
router.get("/getallLOIapprover", protectApprover, getallLOIapprover);

// WHFC Routes
router.post("/createWHFC", protectApplicant, createWHFC);
router.get("/getAllWHFCApplicant", protectApplicant, getAllWHFCApplicant);
router.get("/getAllWHFCReviewer", protectReviewer, getAllWHFCReviewer);
router.get("/getAllWHFCApprover", protectApprover, getAllWHFCApprover);
router.put("/editWHFCApplicant", protectApplicant, editWHFCApplicant);
router.put("/editWHFCReviewer", protectReviewer, editWHFCReviewer);
router.put("/editWHFCApprover", protectApprover, editWHFCApprover);

// NPDP Routes
router.post("/createNPDP", protectApplicant, createNPDP);
router.put("/editNPDPApplicant", protectApplicant, editNPDPApplicant);
router.put("/editNPDPApprover", protectApprover, editNPDPApprover);
router.put("/editNPDPReviewer", protectReviewer, editNPDPReviewer);
router.get("/getAllNPDPApprover", protectApprover, getAllNPDPApprover);
router.get("/getAllNPDPApplicant", protectApplicant, getAllNPDPApplicant);
router.get("/getAllNPDPReviewer", protectReviewer, getAllNPDPReviewer);

// HIV Routes
router.post("/createHIV", protectApplicant, createHIV);
router.put("/editHIVApplicant", protectApplicant, editHIVApplicant);
router.put("/editHIVApprover", protectApprover, editHIVApprover);
router.put("/editHIVReviewer", protectReviewer, editHIVReviewer);
router.get("/getAllHIVApplicant", protectApplicant, getAllHIVApplicant);
router.get("/getAllHIVApprover", protectApprover, getAllHIVApprover);
router.get("/getAllHIVReviewer", protectReviewer, getAllHIVReviewer);

// CG Routes
router.post("/createCG", protectApplicant, createCG);
router.put("/editapproverCG", protectApprover, editCGapprover);
router.put("/editreviewerCG", protectReviewer, editCGreviewer);
router.get("/getallCGapplicant", protectApplicant, getallCGapplicant);
router.get("/getallCGapprover", protectApplicant, getallCGapprover);
router.get("/getallCGreviewer", protectReviewer, getallCGreviewer);
router.put('/editCG',protectApplicant,editCG)


// ISG Routes
router.post("/createISG", protectApplicant, createISG);
router.put("/editapproverISG", protectApprover, editISGapprover);
router.put("/editreviewerISG", protectReviewer, editISGreviewer);
router.get("/getallISGapplicant", protectApplicant, getallISGapplicant);
router.get("/getallISGapprover", protectApplicant, getallISGapprover);
router.get("/getallISGreviewer", protectReviewer, getallISGreviewer);
router.put('/editISG',protectApplicant,editISG)



module.exports = router;
