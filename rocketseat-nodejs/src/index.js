const express = require("express");

const app = express();

/* 
 1 : Get -  buscar uma informação dentro do servidor
 2 : Post -  incluir ua informação no servidor
 3 : Put - alterar uma informação no servidor
 4 : Patch -  alterar uma informação especifica
 5 : Delete -  alterar uma informação no servidor

*/

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3" , "Curso 4"]);
});


app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 2", "Curso 3" , "Curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 3" , "Curso 4"]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 6", "Curso 7", "Curso 4"]);
})
    

app.listen(3333);