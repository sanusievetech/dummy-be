const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllVisit,
    getTotalVisitors,
    getTotalVisitorsBySession,
    getExportVisit,
    getVisitById,
    getVisitByScan,
    testEmailNotif,
    addGroupVisit,
    addVisit,
    addMultipleVisits,
    editVisit,
    // editVisitAll,
    deleteVisit
} = require("../controllers/visit.controller");


// GETTING ALL THE DATA
router.get("/", getAllVisit);

router.get("/check-visitor", getTotalVisitors);
router.get("/check-visitor-session", getTotalVisitorsBySession);

router.get("/export", getExportVisit);

router.get("/scan/:id", getVisitByScan);
router.get("/send-email/:id", testEmailNotif);

// GET A SPECIFIC DATA
router.get("/:id", getVisitById);



// CREATE NEW DATA
router.post("/", addVisit);
router.post("/multiple", addMultipleVisits);
router.post("/group", addGroupVisit);

// UPDATE A SPECIFIC DATA
// router.patch("/special-update", editVisitAll);
router.patch("/:id", editVisit);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteVisit);

module.exports = router;