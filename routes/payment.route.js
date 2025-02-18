const express = require('express');
const router = express.Router();

const {
    createPayment,
    successPayment,
    failedPayment,
    callbackSuccessPayment,
    checkXenditPayment
} = require("../controllers/payment.controller");


// CREATE NEW DATA
router.post("/", createPayment);

// UPDATE A SPECIFIC DATA
router.post("/success/:id", successPayment);

router.post("/failed/:id", failedPayment);

// UPDATE A SPECIFIC DATA
router.post("/success-callback", callbackSuccessPayment);

router.get("/xendit-check/:id", checkXenditPayment);


module.exports = router;