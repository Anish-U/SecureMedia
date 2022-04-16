// Importing npm modules
const express = require("express");

// Router
const router = express.Router();

// Importing user controller
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Importing follow controller
const { followUser, unfollowUser } = require("../controllers/followController");

// Get a user
router.get("/", getUser);

// PUT api/user/:id
router.put("/:id", updateUser);

// DELETE api/user/:id
router.delete("/:id", deleteUser);

// Follow a user
router.put("/:id/follow", followUser);

// Unfollow a user
router.put("/:id/unfollow", unfollowUser);

module.exports = router;
