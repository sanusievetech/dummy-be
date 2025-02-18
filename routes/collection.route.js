const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllCollection,
    getActiveCollection,
    getCollectionBySlug,
    getCollectionById,
    addCollection,
    editCollection,
    deleteCollection
} = require("../controllers/collection.controller");


// GETTING ALL THE DATA
router.get("/", getAllCollection);

router.get("/active", getActiveCollection);

// GET A SPECIFIC DATA BY SLUG
router.get("/read/:slug", getCollectionBySlug);

// GET A SPECIFIC DATA
router.get("/:id", getCollectionById);

// CREATE NEW DATA
router.post("/", addCollection);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editCollection);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteCollection);

module.exports = router;