const express = require("express");
const mongoose = require("mongoose");
const createServer = require("./server");

mongoose
	.connect("mongodb://localhost:27017/docker-node-mongo", { useNewUrlParser: true })
	.then(() => {
		const app = createServer()
		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})