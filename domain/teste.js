const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const questionSchema = require('./questionSchema');

const resultSchema = new Schema({
  note: {
    type: Number,
    required: true
  },
  studentId: {
      type: Schema.Types.ObjectId,
      required: false
  },
  testId: {
      type: Schema.Types.ObjectId,
      required: false
  }
});

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
  },
  results: {
    type: [resultSchema]
  }
});

module.exports = test = mongoose.model('test', testSchema);