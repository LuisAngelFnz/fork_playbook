const express = require('express');

const app = express()

const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hola Mundo');
});

app.listen(port, ()=>{
    console.log(`Ejemplo app escuchando por el puerto:${port}`);
});

app.get('/launchx', (req,res)=>{
    res.send('Bienvenidos a Launchx!!!!');
});

app.get('/explorersInNode', (req,res)=>{
    const explorer = {'name':'Explorer', 'msg':'Hello'};
    res.send(explorer);
});