// Importing npm modules
const express = require("express");

// Importing message controller
const {
  createConversation,
  getConversation,
  getConversationWithIds,
} = require("../controllers/conversationController");

// Router
const router = express.Router();

// Create a message
router.post("/", createConversation);

// Get a message
router.get("/:userId", getConversation);

// Get a message
router.get("/:firstId/:secondId", getConversationWithIds);

module.exports = router;
