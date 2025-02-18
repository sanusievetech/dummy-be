const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllBanner,
    getAvailableBanner,
    getBannerById,
    addBanner,
    replaceBanner,
    editBanner,
    deleteBanner
} = require("../controllers/banner.controller");


// GETTING ALL THE DATA
router.get("/", getAllBanner);

// GETTING AVAILABLE DATA
router.get("/available", getAvailableBanner);

// GET A SPECIFIC DATA
router.get("/:id", getBannerById);

// CREATE NEW DATA
router.post("/", addBanner);
router.post("/replace", replaceBanner);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editBanner);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteBanner);

module.exports = router;