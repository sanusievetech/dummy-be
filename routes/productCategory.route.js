const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllProCategory,
    getProCategoryById,
    addProCategory,
    editProCategory,
    deleteProCategory
} = require("../controllers/productCategory.controller");


// GETTING ALL THE DATA
router.get("/", getAllProCategory);

// GET A SPECIFIC DATA
router.get("/:id", getProCategoryById);

// CREATE NEW DATA
router.post("/", addProCategory);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editProCategory);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteProCategory);

module.exports = router;