const { request, response } = require("express");
const express = require("express");
const server = express();

server.use(express.json());

let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name:"UOL", site: "http://uol.com.br" }
];

server.get("/customers", (request, response) => {
    return response.json(customers);
});

server.get("/customers/:id", (request, Response) => {
    const id = parseInt(request.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    return response.status(status).json(customer);
});

server.listen(3000);