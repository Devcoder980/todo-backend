const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    required: false,
    min: 1,
    max: 5
  }
});

 

module.exports = mongoose.model('Todo', todoSchema);
