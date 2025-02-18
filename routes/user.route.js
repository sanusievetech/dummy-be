const express = require('express');
const router = express.Router();
const { isAuth } = require('../middleware/auth');

const {
    getAllUser,
    getUserById,
    getUserActiveById,
    addUser,
    editUser,
    editUserProfile,
    changeUserPassword,
    deleteUser
} = require("../controllers/user.controller");


// GETTING ALL THE DATA
router.get("/", getAllUser);

// GET A SPECIFIC DATA
router.get("/:id", getUserById);

router.get("/active/:id", getUserActiveById);

// CREATE NEW DATA
router.post("/", addUser);

// UPDATE A SPECIFIC DATA
router.patch("/:id", editUser);

// UPDATE A SPECIFIC DATA
router.patch("/profile/:id", editUserProfile);

// UPDATE PASSWORD
router.patch("/change-password/:id", isAuth, changeUserPassword);

// DELETE A SPECIFIC DATA
router.delete("/:id", deleteUser);

module.exports = router;