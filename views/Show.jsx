// const React = require('react')
import React, { component } from 'react';

class Show extends React.Component {
   render () {
    console.log(this.props.pokemon);
    const pokemon = this.props.pokemon;
    return (
      <div>
        <h1>Show Page</h1>
        <p> The {pokemon.name} is {pokemon.img}</p>
        <p>{pokemon.readyToPlay ?  'Its is ready to play' : 'It is not ready to play... Cant touch this' }</p>
      </div>
     );
    }
 }
 module.exports = Show;