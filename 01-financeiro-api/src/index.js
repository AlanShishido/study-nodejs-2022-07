const { response, request } = require('express');
const express = require('express');
const { v4: uuid4 } = require('uuid')

const customers = [];



const app = express();
app.use(express.json());

// Middlewares
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf)

  if(!customer){
    return response.status(400).json({error: "Customer not found"});
  }

  request.customer = customer;

  return next();
}

function getBalance(statement){
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit'){
      return acc + operation.amount;
    }
    else{
      return acc - operation.amount;
    }
  }, 0)

  return balance;
}

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

// RE2 e RN3
app.get('/statement', verifyIfExistsAccountCPF,(req, res) => {
  const { customer } = req;

  return res.json(customer.statement);
})

// RE3 e RN2
app.post('/deposit', verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;
  const { customer } = req;
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }
  customer.statement.push(statementOperation);

  return res.status(201).send();
})

// RE4 e RN4
app.post('/withdraw', verifyIfExistsAccountCPF, (req, res) => {
  const { amount } = req.body;
  const { customer } = req;

  const balance = getBalance(customer.statement);

  if (balance <  amount){
    return res.status(400).json({error: "Insuficient funds"});
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit'
  }
  customer.statement.push(statementOperation);
  return res.status(201).send();
})

// RE5
app.get('/statement/date', verifyIfExistsAccountCPF,(req, res) => {
  const { customer } = req;
  const { date } = req.query;

  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString())



  return res.json(customer.statement);
})

// RE6
app.put('/account', verifyIfExistsAccountCPF, (req, res) => {
  const { name } = req.body;
  const { customer } = req;

  customer.name = name;

  return res.status(201).send();
})

// RE7
app.get('/account', verifyIfExistsAccountCPF, (req, res) => {
  const {customer } = req;

  return res.json(customer);
})

// RE8
app.delete('/account', verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;

  // splice
  customers.splice(customer, 1);

  return res.status(200).json(customers);
})

// RE9
app.get('/balance', verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const balance = getBalance(customer.statement);
  return res.json(balance);
})

app.listen(3333);