import React, { Component } from 'react';

class Show extends React.Component {
   render () {
    // console.log(this.props.pokemon);
    const pokemon  = this.props.pokemon;
    return (
      <div> 
        <h1 style = {{display:'block',
                       color: 'orangered',
                       }}>Gotta Catch 'Em All</h1>
        <h2 style = {{display:'block',
                       color: 'Highlight',
                       }}>The {pokemon.name}</h2> 
        <img src={pokemon.img} alt="Image"/>
              
        <a href="/pokemon">Back</a>

      </div>
     );
    }
 }
 module.exports = Show;
