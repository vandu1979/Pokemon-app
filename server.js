require('dotenv').config();
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose');

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

// Connect to Mongodb  / remove deprication
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})

// Index
app.get('/pokemon', (req, res)=>{
    // res.send('Welcome to the Pokemon App!');
    // find all pokemon 
    Pokemon.find({}, (error, allPokemon)=>{

    res.render('pokemon/Index', {
        // first pokemon is singular pokemon
        pokemon: allPokemon
    })
    });
    
});
// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/New');
})
// POST 
app.post('/pokemon', (req, res) => {
    // console.log(req.body)
    // res.send('data received');
    if(req.body.readyToPlay === 'on'){
       req.body.readyToPlay = true; 
    } else {
        req.body.readyToPlay = false;
    }
    Pokemon.create(req.body, (error, createdPokemon)=>{
        // res.send(createdPokemon);
        res.redirect('/pokemon');
    });
      // add a new pokemon to the end of array
    // pokemon.push(req.body);
    // console.log(pokemon);
    // res.send('data received');
    //send the user back to /pokemon
    

})


// show routes
app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('pokemon/Show', {
            pokemon:foundPokemon
        });
        // res.send(foundPokemon);
    })
    // res.send(pokemon[req.params.id])
    // res.render('Show', {
    //      // first pokemon is singular pokemon
    //     pokemon: pokemon[req.params.id]
    // })
})
app.listen(3000, () =>{
    console.log('listening');
})