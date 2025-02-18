const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllTicket,
    getAvailableTicket,
    getAvailableCubicTicket,
    getTicketById,
    addTicket,
    editTicket,
    deleteTicket
} = require("../controllers/ticket.controller");


// GETTING ALL THE DATA
router.get("/", getAllTicket);

// GETTING ALL AVAILABLE DATA
router.get("/available", getAvailableTicket);
router.get("/available-cubic", getAvailableCubicTicket);

// GET A SPECIFIC DATA
router.get("/:id", getTicketById);

// CREATE NEW DATA
router.post("/", addTicket);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editTicket);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteTicket);

module.exports = router;