const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  conversationType: {
    type: String,
    enum: ['direct', 'group', 'channel'],
    default: 'direct'
  },
  name: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster queries
conversationSchema.index({ participants: 1 });

module.exports = mongoose.model('Conversation', conversationSchema);
