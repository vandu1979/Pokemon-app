// const React = require('react')
import React, { Component } from 'react';

class Show extends React.Component {
   render () {
    console.log(this.props.pokemon);
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Show Page</h1>
        <img src={pokemon.img}/>
        <p>The {pokemon.name}</p> 
              
        <a href="/pokemon">Back</a>

      </div>
     );
    }
 }
 module.exports = Show;