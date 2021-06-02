const request = require('supertest');
const testController = require('../controller/testController');
const createServer = require('../server')

const app = createServer()

var testMock = {
    subjects: ['Orientacao a Objetos'],
    weight: 2,
    duration: 1.30,
    questions: [{},{}]
}

request(app)
    .get('/tests')
    .expect(200)
    .end((err) => { if (err) throw err; });

request(app)
    .post('/tests')
    .send(testMock)
    .expect(201)
    .end((err) => { if (err) throw err; });