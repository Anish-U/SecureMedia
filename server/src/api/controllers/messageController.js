// Importing model
const Message = require("../models/Message");

// Function to create a message
const createMessage = async (req, res) => {
  const newMessage = new Message(req.body);

  if (!newMessage.text || !newMessage.conversationId || !newMessage.sender) {
    res.status(403).json({ error: "Invalid params to create post" });
    return;
  }

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Function to get message using conversation id
const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createMessage,
  getMessage,
};
