const express = require("express");
const router = express.Router();
const { isAuth } = require("../middleware/auth");

const {
    getAllSetting,
    saveSetting,
    checkVerificationCode
} = require("../controllers/setting.controller");


// GETTING ALL THE DATA
router.get("/", getAllSetting);

// CREATE NEW DATA
router.post("/", saveSetting);

// CREATE NEW DATA
router.post("/verification-check", isAuth, checkVerificationCode);

module.exports = router;