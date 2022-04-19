// Importing npm modules
const express = require("express");

// Importing message controller
const {
  createMessage,
  getMessage,
} = require("../controllers/messageController");

// Router
const router = express.Router();

// Create a message
router.post("/", createMessage);

// Get a message
router.get("/:conversationId", getMessage);

module.exports = router;
