// Importing npm modules
const express = require("express");

// Importing conversation controller
const {
  createConversation,
  getConversation,
  getConversationWithIds,
  getGroupConversation,
  createGroupConversation,
} = require("../controllers/conversationController");

// Router
const router = express.Router();

// Create a conversation
router.post("/", createConversation);

// Create a group conversation
router.post("/group", createGroupConversation);

// Get conversations of particular user
router.get("/:userId", getConversation);

// Get conversations of particular user
router.get("/group/:userId", getGroupConversation);

// Get conversation between 2 users
router.get("/:firstId/:secondId", getConversationWithIds);

module.exports = router;
