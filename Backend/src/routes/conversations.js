const express = require('express');
const Conversation = require('../models/Conversation');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create or get direct conversation
router.post('/direct/:userId', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;

    let conversation = await Conversation.findOne({
      conversationType: 'direct',
      participants: { $all: [req.userId, userId] }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        conversationType: 'direct',
        participants: [req.userId, userId],
        createdBy: req.userId
      });
    }

    await conversation.populate('participants', 'username email avatar');

    res.status(200).json({
      message: 'Conversation retrieved',
      data: conversation
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create group conversation
router.post('/group', authMiddleware, async (req, res) => {
  try {
    const { name, description, participants } = req.body;

    if (!name || !participants || participants.length < 2) {
      return res.status(400).json({ message: 'Please provide name and at least 2 participants' });
    }

    const conversation = await Conversation.create({
      conversationType: 'group',
      name,
      description,
      participants: [...participants, req.userId],
      createdBy: req.userId
    });

    await conversation.populate('participants', 'username email avatar');

    res.status(201).json({
      message: 'Group created successfully',
      data: conversation
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all conversations
router.get('/', authMiddleware, async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.userId
    })
      .populate('participants', 'username email avatar')
      .populate('lastMessage')
      .populate('createdBy', 'username email')
      .sort({ updatedAt: -1 });

    res.status(200).json({
      conversations
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single conversation
router.get('/:conversationId', authMiddleware, async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.params.conversationId)
      .populate('participants', 'username email avatar')
      .populate('lastMessage')
      .populate('createdBy', 'username email');

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }

    res.status(200).json({ data: conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update conversation
router.put('/:conversationId', authMiddleware, async (req, res) => {
  try {
    const { name, description, avatar } = req.body;

    const conversation = await Conversation.findByIdAndUpdate(
      req.params.conversationId,
      { name, description, avatar, updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      message: 'Conversation updated',
      data: conversation
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
