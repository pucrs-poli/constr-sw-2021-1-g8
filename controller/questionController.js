const express = require('express');
const router = express.Router();
const question = require('../domain/question');
const repository = require('../repository/repository');

router.get('/', async (req, res) => {
  var questions = await repository.getAll(question);
  res.send(questions);
});

router.post('/', async (req, res) => {
  const { number, title} = req.body;
  var questions = await repository.insert(question, { number, title });
  res.status(201).send(questions);
});

router.get('/:id', async (req, res) => {
  var questionById = await repository.getById(question, req.params.id);
  res.send(questionById);
});

module.exports = router;