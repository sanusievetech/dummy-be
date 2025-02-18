const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllProduct,
    getAvailableProduct,
    checkStock,
    getProductBySlug,
    getProductById,
    addProduct,
    editProduct,
    deleteProduct
} = require("../controllers/product.controller");


// GETTING ALL THE DATA
router.get("/", getAllProduct);

router.get("/available", getAvailableProduct);

// GET A SPECIFIC DATA BY SLUG
router.get("/read/:slug", getProductBySlug);

// GET A SPECIFIC DATA
router.get("/:id", getProductById);

// CHECK STOCK
router.post("/check-stock", checkStock);

// CREATE NEW DATA
router.post("/", addProduct);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editProduct);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteProduct);

module.exports = router;