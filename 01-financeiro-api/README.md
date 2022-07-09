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
RE3- [] Deve ser possível realizar um depósito
RE4- [] Deve ser possível realizar um saque
RE5- [] Deve ser possível buscar o extrato bancário do cliente por data
RE6- [] Deve ser possível atualizar os dados da conta do cliente
RE7- [] Deve ser possível obter dados da conta do cliente
RE8- [] Deve ser possível deletar uma conta

## Regra de Negócios

RN1- [X] Não deve ser possível cadastrar uma conta com CPF já existente
RN2- [] Não deve ser possível fazer depósito em uma conta não existente
RN3- [X] Não deve ser possível buscar extrato em uma conta não existente
RN4- [] Não deve ser possível fazer saque em uma conta não existente
RN5- [] Não deve ser possível excluir uma conta não existente
RN6- [] Não deve ser possível fazer saque quando o saldo for insuficiente
