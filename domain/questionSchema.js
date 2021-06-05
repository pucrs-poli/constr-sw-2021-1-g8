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
    },
    options: {
        type: {
            letter: String,
            answer: String
        },
    }
});

module.exports = questionSchema;