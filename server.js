const express = require('express');
const testController = require('./controller/testController');
const questionController = require('./controller/questionController');

function createServer() {
    const app = express();
    app.use(express.json());
    app.use('/tests', testController);
    app.use('/questions', questionController);

    return app;
}

module.exports = createServer