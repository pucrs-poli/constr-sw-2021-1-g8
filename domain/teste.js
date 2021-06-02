const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
      type: Boolean,
      required: false
  },
  options: {
      type: {
          letter: String,
          answer: String
      },
      required: false
  }
});

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
    type: [questionSchema],
    required: true
  }
});

module.exports = test = mongoose.model('test', testSchema);
module.exports = question = mongoose.model('question', questionSchema);