const express = require("express");
const router = express.Router();

const {
    getAllTicket,
    getTicketById
} = require("../controllers/dummy.controller");


// GETTING ALL THE DATA
router.get("/", getAllTicket);

// GET A SPECIFIC DATA
router.get("/:id", getTicketById);


module.exports = router;