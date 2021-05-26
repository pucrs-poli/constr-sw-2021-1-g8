const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  id: {
    type: String,
    required: true
  },
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
  }
});

module.exports = test = mongoose.model('test', testSchema);