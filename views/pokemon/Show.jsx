import React, { Component } from 'react';

class Show extends React.Component {
   render () {
    // console.log(this.props.pokemon);
    const pokemon  = this.props.pokemon;
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>The {pokemon.name}</h2> 
        <img src={pokemon.img} alt="image"/>
              
        <a href="/pokemon">Back</a>

      </div>
     );
    }
 }
 module.exports = Show;
