const express = require('express');
const router = express.Router();

const {
    createPayment,
    successPaymentShop,
    failedPaymentShop,
    checkXenditPaymentShop
} = require("../controllers/payment.controller");


// CREATE NEW DATA
router.post("/", createPayment);

// UPDATE A SPECIFIC DATA
router.post("/success/:id", successPaymentShop);

router.post("/failed/:id", failedPaymentShop);

router.get("/xendit-check/:id", checkXenditPaymentShop);


module.exports = router;