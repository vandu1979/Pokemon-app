require('dotenv').config();
const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
// Connect to Mongodb  / remove deprication/ MONGO_URI IS A VARIABLE/ 
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//making sure it is connected to mongo db
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
// POST /CREATE
app.post('/pokemon', (req, res) => {
    // console.log(req.body)
    // res.send('data received');
    
Pokemon.create(req.body, (error, createdPokemon)=>{
        
        res.redirect('/pokemon');      
    });
})
    // res.send(createdPokemon);
      // add a new pokemon to the end of array
    // pokemon.push(req.body);
    // console.log(pokemon);
    // res.send('data received');
    //send the user back to /pokemon
    
// show routes
app.get('/pokemon/:id', (req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('pokemon/Show', {
            pokemon:foundPokemon
        });
    })
})
//Edit
app.get('/pokemon/:id/edit', (req, res)=>{
   //find my pokemon by id
    //render an edit form
    //pass in the pokemon data / payload 
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('pokemon/Edit', {
            pokemon: foundPokemon
        })
    })
})
//put 
//(Make the PUT Route Update the Model in MongoDB)
app.put('/pokemon/:id', (req, res)=>{
   
    //find pokemon by id and update it
    //redirect to the pokemon show page 
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon)=>{
        console.log(updatedPokemon);
        res.redirect(`/pokemon/${req.params.id}`);
    })
})
//Delete (to put and delete request)
app.delete('/pokemon/:id', (req,res)=>{
    Pokemon.findByIdAndRemove(req.params.id,(err, deletePokemon)=>{
        res.redirect('/pokemon')
    })
})
        // res.send(foundPokemon);
    // res.send(pokemon[req.params.id])
    // res.render('Show', {
    //      // first pokemon is singular pokemon
    //     pokemon: pokemon[req.params.id]
    // })

app.listen(3000, () =>{
    console.log('listening');
})