const repository = require("./repository/repository");
const expressBoot = require("./expressBoot");
const test = require("./domain/test")

expressBoot.get('/tests', async (req, res) => {
    var tests = await repository.getAll(test);
    res.status(201).send(tests);
  });