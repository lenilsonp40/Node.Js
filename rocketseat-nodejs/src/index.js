const { request, response } = require("express");
const { v4:uuidv4 } = require("uuid")

const express = require("express");

const app = express();

app.use(express.json());

const customers = [];

//  Middleware
function verifyIfExistsAccountCPF(request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find((customer) => customer.cpf === cpf);

    if(!customer) {
        return response.status(400).json({ error: "Customer not found" });
    }

    request.customer = customer;

    return next();
}

function getBalance(statement) {
    statement.reduce((acc, operation) => {
        if(operation.type === 'credit') {
            return acc + operation.amount;
        }
    })
}


/*
CPF - string
name - string
id - uuid
statement -  [array]
*/                
app.post("/account", (request, response) => {
    const { cpf, name} = request.body;

    const customersAlreadyExists = customers.some((customers) => customers.cpf === cpf);

    if (customersAlreadyExists) {
        return response.status(400).json({ error:"Customer already exists"});
    }

    
    
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: [],
    });

    return response.status(201).send();

});

// quando quiser que seja usando é somente usar dessa forma tudo que tiver abaixo entrar na rota : app.use(verifyIfExistsAccountCPF); 

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
    
  return response.json(customer.statement);
});

app.post("/deposit",verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit",
    };

    customer.statement.push(statementOperation);

    return response.status(201).send();
   
});

app.post("/withdraw",verifyIfExistsAccountCPF, (request, response) => {
 const { amount } = request.body;
 const { customer } = request;
})

app.listen(3333);