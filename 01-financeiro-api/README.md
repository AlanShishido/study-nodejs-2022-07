# Financeiro API

Dados do Body:
  {
    name: string,
    cpf: string,
    id: uuid,
    statement: [

    ]
  }

### Requisitos

RE1- [X] Deve ser possível criar uma conta
RE2- [X] Deve ser possível buscar o extrato bancário do cliente
RE3- [X] Deve ser possível realizar um depósito
RE4- [X] Deve ser possível realizar um saque
RE5- [X] Deve ser possível buscar o extrato bancário do cliente por data
RE6- [X] Deve ser possível atualizar os dados da conta do cliente
RE7- [X] Deve ser possível obter dados da conta do cliente
RE8- [X] Deve ser possível deletar uma conta
RE9- [X] Deve ser possível retornar o balanço da conta (montante)

## Regra de Negócios

RN1- [X] Não deve ser possível cadastrar uma conta com CPF já existente
RN2- [X] Não deve ser possível fazer depósito em uma conta não existente
RN3- [X] Não deve ser possível buscar extrato em uma conta não existente
RN4- [X] Não deve ser possível fazer saque em uma conta não existente
RN5- [X] Não deve ser possível fazer saque quando o saldo for insuficiente
RN6- [X] Não deve ser possível excluir uma conta não existente
