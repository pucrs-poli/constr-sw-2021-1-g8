const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = result = mongoose.model('result', resultSchema);