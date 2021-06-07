const express = require('express');
const testController = require('./controller/testController');
const questionController = require('./controller/questionController');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

function createServer(port) {
    const app = express();
    app.use(bodyParser.json());
    app.use('/tests', testController);
    app.use('/questions', questionController);

    var connection;
    if (connection == null) {
        connection = 1;
        mongoose.connect("mongodb://localhost:27017/tests-api", { useNewUrlParser: true })
            .then(() => {
                app.listen(port, () => {
                    console.log("Server has started!")
                })
            }).catch(err => console.log(err));
    }

    return app;
}

module.exports = createServer