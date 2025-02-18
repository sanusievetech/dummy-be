const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllBlog,
    getAvailableBlog,
    getBlogById,
    getBlogBySlug,
    addBlog,
    editBlog,
    deleteBlog
} = require("../controllers/blog.controller");


// GETTING ALL THE DATA
router.get("/", getAllBlog);

// GETTING ALL AVAILABLE DATA
router.get("/available", getAvailableBlog);

// GET A SPECIFIC DATA
router.get("/:id", getBlogById);

// GET A SPECIFIC DATA BY SLUG
router.get("/read/:slug", getBlogBySlug);

// CREATE NEW DATA
router.post("/", addBlog);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editBlog);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteBlog);

module.exports = router;