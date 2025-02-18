const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllVisitPending,
    getVisitPendingById,
    addVisitPending,
    editVisitPending,
    deleteVisitPending
} = require("../controllers/visitPending.controller");


// GETTING ALL THE DATA
router.get("/", getAllVisitPending);

// GET A SPECIFIC DATA
router.get("/:id", getVisitPendingById);

// CREATE NEW DATA
router.post("/", addVisitPending);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editVisitPending);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteVisitPending);

module.exports = router;