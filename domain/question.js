const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: {
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
          letter: CharacterData,
          answer: String
      },
      required: false
  }
});

module.exports = question = mongoose.model('question', questionSchema);