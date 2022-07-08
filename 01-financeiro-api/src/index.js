const express = require('express')

const app = express()

app.use(express.json());

app.get('/courses', (req, res) => {
  return res.json({"message": "hello world"})
});

app.listen(3333);