import express, { request, response } from 'express'

const app = express();

app.get("/",(request,response) => {
    return response.json({ message: "funcionou!"})
})

app.listen(3333);