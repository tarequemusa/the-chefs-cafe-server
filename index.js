const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsDetails = require('./data/chefsDetails.json');
const chefRecipe = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Chefs Cafe Server is Running')
});

app.get('/chefsdetails', (req, res) => {
    console.log(chefsDetails);
    res.send(chefsDetails);
})

app.get('./data/chefsdetails/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefsDetails.find(n => n.id === id);
    res.send(selectedChef);
})

app.get('/recipes', (req, res) => {
    res.send(chefRecipe);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = chefRecipe.find(n => n.recipe_id === id);
    res.send(selectedRecipe)
})

app.get('/chefsdetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id === 0) {
        res.send(chefsDetails)
    }
    else {
        const selectedChef = chefsDetails.filter(n => parseInt(n.id) === id);
        res.send(selectedChef);
    }
    console.log(id);
})

app.listen(port, () => {
    console.log(`The Chefs Cafe API is running on port: ${ port }`);
})