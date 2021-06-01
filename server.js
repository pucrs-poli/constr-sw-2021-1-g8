const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(3000, () => console.log('Server running...'));

