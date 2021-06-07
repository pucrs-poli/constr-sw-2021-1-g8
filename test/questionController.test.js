const request = require('supertest');
const createServer = require('../server');
const app = createServer(9090);

var questionMockEdited = {
    number: 2,
    title: "Qual a raiz quadrada de 2?"
}

var questionMock = {
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

describe('POST /questions', () => {
    it('should post a question properly', async () => {
    await request(app)
        .post(`/questions`)
        .send(questionMock)
        .expect(201);
})
});

describe('GET /questions', () => {
    it('should return all questions inserted properly', async () => {
    await request(app)
        .get(`/questions`)
        .expect(200);
})
});

describe('GET /questions/id', () => {
    it('should return a questions by the id properly', async () => {
    await request(app)
        .get(`/questions/${`60bbc3ea3eccec369409e990`}`)
        .expect(200);
})
});

describe('GET /questions/id', () => {
    it('should return a 404 not fount for question', async () => {
    await request(app)
        .get(`/question/${`60bbc3ea3eccec369409e990`}`)
        .expect(404);
})
});

describe('PUT /questions', () => {
    it('should edit a question by the id properly', async () => {
    await request(app)
        .put(`/questions/${`60bbc3ea3eccec369409e990`}`)
        .send(questionMockEdited)
        .expect(200);
})
});

describe('DELETE /questions', () => {
    it('should delete a question by the id properly', async () => {
    await request(app)
        .delete(`/questions/${`60bbbf8b10ac8e2f209359f5`}`)
        .expect(200);
})
});