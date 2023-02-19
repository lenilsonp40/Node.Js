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

// quando quiser que seja usando é somente usar dessa forma : app.use(verifyIfExistsAccountCPF); 

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
    
  return response.json(customer.statement);
});

app.listen(3333);