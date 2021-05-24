const express = require('express');
const kcAdminClient = require('./keycloakClient.js');

const app = express();
const port = 8083;

const credentials = {
  username: 'admin',
  password: 'admin',
  grantType: 'password',
  clientId: 'master-realm',
  totp: '123456',
  clientSecret: '02a81ca7-2433-4c30-ae7c-2e9ea3030543',
};

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.get('/auth', async (req, res) => {

  try {
    await kcAdminClient.auth(credentials);

    res.status(200).send({
      accessToken: kcAdminClient.accessToken,
      refreshToken: kcAdminClient.refreshToken,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get('/users', async (req, res) => {
  let users;
  try {
    users = await kcAdminClient.users.find();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.send(users);
});

app.get('/users/:id', async (req, res, _) => {
  let user;
  try {
    user = await kcAdminClient.users.findOne({ id: req.params.id });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.status(200).send(user);

});

app.post('/users', async (req, res) => {
  var { username, email, firstName, lastName } = req.body;
  let response;
  try {
    response = await kcAdminClient.users.create({
      username,
      email,
      firstName,
      lastName,
      emailVerified: true,
      enabled: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.status(200).send(response);
});

app.put('/users/:id', async (req, res) => {
  const { firstName, lastName } = req.body;
  let response;
  try {
    response = await kcAdminClient.users.update(
      { id: req.params.id },
      {
        firstName,
        lastName,
        requiredActions: [],
        emailVerified: true,
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.status(200).send(response);
});

app.patch('/users/:id', async (req, res) => {
  const password = req.params;
  const id = req.params;
  let response;
  try {
    response = await kcAdminClient.users.update(
      id, password
    );
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.status(200).send(response);
});

app.delete('/users/:id', async (req, res) => {
  try {
    await kcAdminClient.users.del({ id: req.params.id });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

  res.status(200).send(true);
});