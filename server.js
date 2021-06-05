const express = require('express');
const testController = require('./controller/testController');
const questionController = require('./controller/questionController');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

function createServer() {
    const app = express();
    app.use(bodyParser.json());
    app.use('/tests', testController);
    app.use('/questions', questionController);

    mongoose
	.connect("mongodb://localhost:27017/tests-api", { useNewUrlParser: true })
	.then(() => {
		app.listen(3000, () => {
			console.log("Server has started!")
		})
	}).catch(err => console.log(err));

    return app;
}

module.exports = createServer