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

    console.debug("GET :: /customers/id ", customer);

    return response.status(status).json(customer);
});

server.post("/customers", (request, response) => {
    const { name, site } = request.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return response.status(201).json(newCustomer);
    
});

server.put("/customers/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const { name, site } = request.body;

    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0) {
        customers[index] = { id:parseInt(id), name, site };
    }

    return response.status(status).json(customers[index]);
});

server.delete("/customers/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if(index >= 0) {
        customers.splice(index, 1);
    }

    return response.status(status).json();

});

server.listen(3000);