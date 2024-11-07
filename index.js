const express = require('express');
const app = express();
const port = 3000;

const personas = [
    { id:1, nombre:"Pedro", edad:10}, 
    { id:2, nombre:"Paco", edad:15},
    { id:3, nombre:"Luis", edad:18}
];

app.get('/', (req, res) =>{
    res.send("Hola Mundo");
});

app.get('/api/personas', (req, res) =>{
    res.send(personas);
});

app.get('/api/personas/:id', (req, res) =>{
    const persona = personas.find(c => c.id === parseInt(req.params.id));
    if (!persona)
        return res.status(404).send("Persona no encontrada");
    else 
        res.send(persona);
});

app.post('/api/personas', (req, res) =>{
    const { id, nombre, edad } = req.body;
    res.status(201).send("persona adicionada");
});

app.listen(port, () =>{
    console.log('Api escuchando en http://localhost:$(port)')
});
