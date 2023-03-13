import express, { request, response } from 'express';

const app = express();

app.get("/",(request, response) => {
    return response.json({ message: "Tudo Certo!"})
})

app.listen(3333);