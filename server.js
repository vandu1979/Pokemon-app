const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

app.get('/pokemon', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
    
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views'),createEngine());

// show routes
app.get('/pokemon/:id', (req,res)=>{
    // res.send(pokemon[req.params.id])
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
});













app.listen(3000, () =>{
    console.log('listening');
})