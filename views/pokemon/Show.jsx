import React, { Component } from 'react';

class Show extends React.Component {
   render () {
    // console.log(this.props.pokemon);
    const pokemon  = this.props.pokemon;
    return (
      <html style={{
        margin: '0 auto',
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JfXflXB9kUENziqy3TfYWpOXVtOEeOAJzg&usqp=CAU")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      
      <div> 

        <h1 style = {{display:'block',
                       color: 'orangered',
                       }}>Gotta Catch 'Em All</h1>
        <h2 style = {{display:'block',
                       color: 'Highlight',
                       }}>The {pokemon.name}</h2> 
        <img src={pokemon.img} alt="Image"> ::before </img>
              
        <a href="/pokemon">Back</a>

      </div>
      </html> 
     );
    }
 }
 module.exports = Show;
