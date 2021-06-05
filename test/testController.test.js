const request = require('supertest');
const createServer = require('../server');
const app = createServer();

var questionMock1 = {
    number: 2,
    title: "Qual a raiz quadrada de 2?"
}

var questionMock2 = {
    number: 1,
    title: "Quanto é 1 + 1?",
    options: {
        type: {
            letter: 'a',
            answer: '3'
        },
        type: {
            letter: 'b',
            answer: '2'
        },
        type: {
            letter: 'c',
            answer: '9'
        },
        type: {
            letter: 'd',
            answer: '0'
        }
    }
}

var testMock = {
    subjects: ['Orientacao a Objetos', 'Bancos de Dados'],
    weight: 2,
    duration: 1.30,
    questions: [questionMock1, questionMock2]
}

var testMockEdited = {
    subjects: ['Orientacao a Objetos', 'Bancos de Dados I', 'Bancos de Dados II'],
    weight: 2,
    duration: 1.30,
    questions: [questionMock1, questionMock2]
}

describe('POST /tests', () => {
    it('should post a test properly', async () => {
    await request(app)
        .post(`/tests`)
        .send(testMock)
        .expect(201);
})
});

describe('GET /tests', () => {
    it('should return all tests inserted properly', async () => {
    await request(app)
        .get(`/tests`)
        .expect(200);
})
});

describe('GET /tests/id', () => {
    it('should return a tests by the id properly', async () => {
    await request(app)
        .get(`/tests/${`60bbc926ef486b504cc0e58a`}`)
        .expect(200);
})
});

describe('GET /tests/id/questions', () => {
    it('should return a tests by the id properly', async () => {
    await request(app)
        .get(`/tests/${`60bbc926ef486b504cc0e58a`}/questions`)
        .expect(200);
})
});

describe('PUT /tests', () => {
    it('should edit a test by the id properly', async () => {
    await request(app)
        .put(`/tests/${`60bbc926ef486b504cc0e58a`}`)
        .send(testMockEdited)
        .expect(200);
})
});