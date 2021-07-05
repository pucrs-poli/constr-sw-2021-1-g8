const express = require('express');
const testController = require('./controller/testController');
const questionController = require('./controller/questionController');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');

function createServer(port) {
    const app = express();

    cors.CorsOptions = {
        origin: '*',
        methods: 'GET,HEAD,POST,PUT,DELETE'
    };

    app.use(cors());
    app.use(bodyParser.json());
    app.use('/tests', testController);
    app.use('/questions', questionController);

    var connection;
    if (connection == null) {
        connection = 1;
        mongoose.connect("mongodb+srv://admin:admin@cluster0.mmz1f.mongodb.net/tests?retryWrites=true&w=majority", { useNewUrlParser: true })
            .then(() => {
                app.listen(port, () => {
                    console.log("Server has started!")
                })
            }).catch(err => console.log(err));
    }

    return app;
}

module.exports = createServer