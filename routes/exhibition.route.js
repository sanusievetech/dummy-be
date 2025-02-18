const express = require('express');
const router = express.Router();

const {
    getAllExhibition,
    getAvailableExhibition,
    getNotAvailableExhibition,
    getExhibitionBySlug
} = require("../controllers/exhibition.controller");


// GETTING ALL THE DATA
router.get("/", getAllExhibition);
router.get("/available", getAvailableExhibition);
router.get("/not-available", getNotAvailableExhibition);
router.get("/read/:slug", getExhibitionBySlug);

module.exports = router;