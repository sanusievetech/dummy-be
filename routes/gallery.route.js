const express = require('express');
const router = express.Router();

const {
    addGallery
} = require("../controllers/gallery.controller");

// CREATE NEW DATA
router.post("/", addGallery);

module.exports = router;