const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = require('./questionSchema')

const testSchema = new Schema({
  subjects: {
    type: [String]
  },
  weight: {
      type: Number
  },
  duration: {
      type: Number
  },
  questions: {
    type: [questionSchema],
    required: true
  }
});

module.exports = test = mongoose.model('test', testSchema);