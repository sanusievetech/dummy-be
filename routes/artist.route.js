const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllArtist,
    getArtistById,
    addArtist,
    editArtist,
    deleteArtist
} = require("../controllers/artist.controller");


// GETTING ALL THE DATA
router.get("/", getAllArtist);

// GET A SPECIFIC DATA
router.get("/:id", getArtistById);

// CREATE NEW DATA
router.post("/", addArtist);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editArtist);

// DELETE A SPECIFIC DATA
router.delete("/:id", isAuth, deleteArtist);

module.exports = router;