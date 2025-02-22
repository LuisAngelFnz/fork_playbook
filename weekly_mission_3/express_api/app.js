const express = require('express');

const app = express();

app.use(express.json());

const port = 3000

app.get('/v1/explorers', (request, response)=>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`);

    const explorers = [];

    for (let i = 0; i < 5; i++) {
        explorers.push({
            'id'  : i,
            'name': `Angel${i}`
        })
    }

    response.status(200).json(explorers);
});

app.get('/v1/explorers/:id',(request, response)=>{
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${request.params.id}`);

    const explorer = {'id':1,'name':'Luis'};
    response.status(200).json(explorer);
});

app.post('/v1/explorers', (request, response)=>{
    console.log(`Api Explorers POST request ${new Date()}`);

    const requestBody = request.body;

    response.status(201).json({'message':'Created'});
});

app.put('/v1/explorers/:id', (request, response)=>{
    console.log(`Api Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id ${request.params.id}`);

    const requestBody = request.body;
    console.log(`requestBody: ${requestBody}`);
    response.status(200).json({'message':'Update OK'});
});

app.delete('/v1/explorers/:id', (request, response)=>{
    console.log(`Api Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${request.params.id}`);

    const requestBody = request.body;
    console.log(`requestBody: ${requestBody}`);
    
    response.status(200).json({'message':'Delete OK'});
});

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});

