const express = require('express')

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Servidor ativo')
  return res.json({"message": "hello world"})
});

app.listen(3333);