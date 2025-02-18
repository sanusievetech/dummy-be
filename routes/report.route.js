const express = require('express');
const router = express.Router();

const {
    getSummary,
    getSummaryByStaff
} = require("../controllers/reportSummary.controller");

const {
    getChart
} = require("../controllers/reportChart.controller");

const {
    getMapping
} = require("../controllers/reportMapping.controller");

const {
    getPayment
} = require("../controllers/reportPayment.controller");

router.get("/summary", getSummary);
router.get("/summary-staff", getSummaryByStaff);
router.get("/chart", getChart);
router.get("/mapping", getMapping);
router.get("/payment", getPayment);

module.exports = router;