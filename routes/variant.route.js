const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllVariant,
    getVariantById,
    addVariant,
    editVariant,
    deleteVariant
} = require("../controllers/variant.controller");


// GETTING ALL THE DATA
router.get("/", getAllVariant);

// GET A SPECIFIC DATA
router.get("/:id", getVariantById);

// CREATE NEW DATA
router.post("/", addVariant);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editVariant);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteVariant);

module.exports = router;