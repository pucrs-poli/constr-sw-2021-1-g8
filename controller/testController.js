const express = require('express');
const router = express.Router();
const test = require('../domain/teste');
const repository = require('../repository/repository');

router.get('/', async (req, res) => {
  var tests = await repository.getAll(test);
  res.send(tests);
});

router.post('/', async (req, res) => {
  var createdTest = await repository.insert(test, req.body);
  res.status(201).send(createdTest);
});

router.get('/:id', async (req, res) => {
  var testById = await repository.getById(test, req.params.id);
  res.send(testById);
});

router.get('/:id/questions', async (req, res) => {
  var testById = await repository.getById(test, req.params.id);
  res.send(testById.questions);
});

router.put('/:id', async (req, res) => {
  var testEdited = await repository.edit(test, req.body, req.params.id);
  res.send(testEdited);
});

router.delete('/:id', async (req, res) => {
  await repository.remove(test, req.params.id);
  res.send(true);
});

router.get('/:id/results', async (req, res) => {
  var testById = await repository.getById(test, req.params.id);
  res.send(testById.results);
});

module.exports = router;