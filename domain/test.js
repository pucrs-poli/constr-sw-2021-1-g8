const mongoose = require('mongoose');
const question = require('./question');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  subjects: {
    type: [String],
    required: true
  },
  weight: {
      type: Number,
      required: false
  },
  duration: {
      type: Number,
      required: true
  },
  questions: {
    type: [question],
    required: true
  }
});

module.exports = test = mongoose.model('test', testSchema);