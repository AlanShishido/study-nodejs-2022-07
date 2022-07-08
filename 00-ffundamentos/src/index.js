const express = require('express')

const app = express();

app.use(express.json());

app.get('/courses', (request, response) => {
  return response.json(["curso 1", "curso 2"]);
});

app.post('/courses', (request, response) => {
  return response.json(["curso 1", "curso 2"]);
});

app.put('/courses/:id', (request, response) => {
  return response.json(["curso 3", "curso 2"]);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(["curso 3", "curso 2"]);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(["curso 3"]);
});

app.listen(3333);