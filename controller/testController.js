const express = require('express');
const router = express.Router();
const test = require('../domain/teste');
const result = require('../domain/result');
const repository = require('../repository/repository');

router.get('/', (req, res) => {
  var tests = repository.getAll(test);
  res.send(tests);
});

router.post('/', (req, res) => {
  var createdTest = repository.insert(test, req.body);
  res.status(201).send(createdTest);
});

router.get('/:id', (req, res) => {
  var testById = repository.getById(test, req.params.id);
  res.send(testById);
});

router.get('/:id/questions', (req, res) => {
  var test = repository.getById(test, req.params.id);
  res.send(tests.questions);
});

router.put('/', (req, res) => {
  var testEdited = repository.edit(test, req.body);
  res.send(testEdited);
});

router.delete('/:id', (req, res) => {
  repository.remove(test, req.params.id);
  res.send(true);
});

module.exports = router;