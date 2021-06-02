const mongoose = require('mongoose')
const createServer = require('../server')

beforeEach((done) => {
	mongoose.connect(
		"mongodb://localhost:27017/docker-node-mongo",
		{ useNewUrlParser: true },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

const app = createServer()