const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chefsDetails = require('./data/chefsDetails.json')

app.get('/', (req, res) => {
    res.send('The Chefs Cafe Server is Running')
});

app.get('/chefsdetails', (req, res) => {
    res.send(chefsDetails);
})

app.get('/chefsdetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefsDetails.find(n => n.id === id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log('The Chefs Cafe API is running on port: ${port}');
})