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

app.listen(port, () => {
    console.log('The Chefs Cafe API is running on port: ${port}');
})