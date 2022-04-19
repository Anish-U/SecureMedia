// Importing model
const Conversation = require("../models/Conversation");

// Function to create a conversation
const createConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to get conversations using user id
const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};


// Function to get conversations using user id
const getConversationWithIds = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createConversation,
  getConversation,
  getConversationWithIds
};
