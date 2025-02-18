const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllOrder,
    getOrderById,
    testEmailNotif,
    addOrder,
    editOrder,
    deleteOrder
} = require("../controllers/order.controller");


// GETTING ALL THE DATA
router.get("/", getAllOrder);

// GET A SPECIFIC DATA
router.get("/:id", getOrderById);

router.get("/send-email/:id", testEmailNotif);

// CREATE NEW DATA
router.post("/", addOrder);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editOrder);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteOrder);

module.exports = router;