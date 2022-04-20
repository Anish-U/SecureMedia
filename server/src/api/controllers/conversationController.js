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

// Function to create a group conversation
const createGroupConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [...req.body.members],
    isGroup: true,
    groupName: req.body.groupName,
    groupAdmin: req.body.groupAdmin,
    groupPicture: req.body.groupPicture
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to get conversations using user id
const getConversationUsingUser = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
      isGroup: false,
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to get conversations using conversation id
const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      _id: { $in: [req.params.conversationId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to get group conversations using user id
const getGroupConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
      isGroup: true,
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
  createGroupConversation,
  getConversation,
  getGroupConversation,
  getConversationWithIds,
  getConversationUsingUser,
};
