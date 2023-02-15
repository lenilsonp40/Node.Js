const { request, response } = require("express");
const express = require("express");

const app = express();
/*
CPF - string
name - string
id - uuid
statement -  [array]
*/                
app.post("/account", (request, response) => {
    const { cpf, name} = request.body;

});

app.listen(3333);