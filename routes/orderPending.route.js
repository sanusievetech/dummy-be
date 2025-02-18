const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllOrderPending,
    getOrderPendingById,
    addOrderPending,
    editOrderPending,
    deleteOrderPending
} = require("../controllers/orderPending.controller");


// GETTING ALL THE DATA
router.get("/", getAllOrderPending);

// GET A SPECIFIC DATA
router.get("/:id", getOrderPendingById);

// CREATE NEW DATA
router.post("/", addOrderPending);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editOrderPending);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteOrderPending);

module.exports = router;