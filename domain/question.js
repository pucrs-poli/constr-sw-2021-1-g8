const questionSchema = require('./questionSchema');
const mongoose = require('mongoose');

module.exports = question = mongoose.model('question', questionSchema);