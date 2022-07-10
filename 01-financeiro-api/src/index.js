const express = require('express');
const { v4: uuid4 } = require('uuid')

const customers = [];



const app = express();
app.use(express.json());

// get padrao
app.get('/', (req, res) => {
  return res.json({"message": "hello world"})
});


// RE1 e RN1
app.post('/account', (req, res) => {
  const { name, cpf } = req.body;

  const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);

  if (customerAlreadyExists){
    return res.status(400).json({error: "Customer already exists!"})
  }

  const uuid = uuid4();

  customers.push({
    name,
    cpf,
    uuid,
    statement: []
  })

  return res.status(201).send();
})

// RE2 e RN3gi
app.get('/statement', (req, res) => {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf)
  
  if(!customer){
    return res.status(400).json({error: "Customer not found"});
  }

  return res.json(customer.statement);
})


app.listen(3333);