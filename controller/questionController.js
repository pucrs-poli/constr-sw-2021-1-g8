const express = require('express');
const router = express.Router();
const question = require('../domain/question');
const repository = require('../repository/repository');

router.get('/', async (req, res) => {
  var questions = await repository.getAll(question);
  res.send(questions);
});

router.post('/', async (req, res) => {
  var questionCreated = await repository.insert(question, req.body);
  res.status(201).send(questionCreated);
});

router.get('/:id', async (req, res) => {
  var questionById = await repository.getById(question, req.params.id);
  res.send(questionById);
});

router.put('/:id', async (req, res) => {
  var questionEdited = await repository.edit(question, req.body, req.params.id);
  res.send(questionEdited);
});

router.delete('/:id', async (req, res) => {
  await repository.remove(question, req.params.id);
  res.send(true);
});

module.exports = router;