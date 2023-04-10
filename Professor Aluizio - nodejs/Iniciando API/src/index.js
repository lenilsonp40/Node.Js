const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());


const projects = [];

app.get('/projects',(request, response) => {
    return response.json(projects);
    
});

app.post('/projects',(request, response) => {
    const {name, owner} = request.body
    const project = {
        id: uuidv4(),
        name,
        owner
    }

    projects.push(project);

    return response.status(201).json(project);

    
});

app.put('/projects/:id',(request, response) => {
    const {id} = request.params
    const {name, owner} = request.body
    
    console.log(id), name, owner;

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id',(request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(3000, () => {
    console.log('Server started!!');
});

