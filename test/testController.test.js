const request = require('supertest');
const createServer = require('../server');
const app = createServer(9000);

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
    it('should return a test by the id properly', async () => {
    await request(app)
        .get(`/tests/${`60bbc3ea3eccec369409e990`}`)
        .expect(200);
})
});

describe('GET /tests/id', () => {
    it('should return a 404 not found for test', async () => {
    await request(app)
        .get(`/tess/${`60bbc3ea3eccec369409e990`}`)
        .expect(404);
})
});

describe('GET /tests/id/questions', () => {
    it('should return a tests by the id properly', async () => {
    await request(app)
        .get(`/tests/${`60bbc3ea3eccec369409e990`}/questions`)
        .expect(200);
})
});

describe('PUT /tests', () => {
    it('should edit a test by the id properly', async () => {
    await request(app)
        .put(`/tests/${`60bbc3ea3eccec369409e990`}`)
        .send(testMockEdited)
        .expect(200);
})
});

describe('DELETE /tests', () => {
    it('should delete a test by the id properly', async () => {
    await request(app)
        .delete(`/tests/${`60bd493fc4548d255026d76d`}`)
        .expect(200);
})
});

describe('GET /tests/id/results', () => {
    it('should return all results of a test by the id properly', async () => {
    await request(app)
        .get(`/tests/${`60bd63a6c917bc2328f9014d`}/results`)
        .expect(200);
})
});