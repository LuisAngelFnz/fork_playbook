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

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});