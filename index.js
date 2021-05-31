const express = require('express');
const mongoose = require('mongoose');
const repository = require("./repository/repository");
const test = require("./domain/test")

const app = express();
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/tests', async (req, res) => {
    var tests = await repository.getAll(test);
    res.send(tests);
});

app.post('/tests', async (req, res) => {
    var createdTest = await repository.insert(test, req.body);
    res.status(201).send(createdTest);
});

app.listen(3000, () => console.log('Server running...'));

