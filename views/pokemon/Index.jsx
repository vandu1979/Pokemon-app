
import React, { Component } from 'react'

const headerStyle = {
    backgroundColor: "orangered",
}
const myStyle = {
  rectangle: {
      width: '50px',
      height: '50px',
      backgroundColor: "orangered",
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default class Index extends Component {
  render() {
    console.log(this.props.pokemon)
    const { pokemon } = this.props;
    return (
      <div style={{backgroundColor: 'aquamarine',
      display: 'block',
      margin: '50px',  
      border: '3px solid black',
       
      }}>
      <nav>
            <a style={{color:'ActiveBorder',
                       fontSize:'20px',
                       fontWeight:'bolder',}}href='/pokemon/new'> Create a new pokemon</a>
          </nav>
        <h style={{color: "red",fontSize:"24px",
        textTransform: "uppercase",
        fontWeight:'bold'}}> All pokemon</h>
        {/* array.map(())  p as an individual pokemon of pokemon array */}
       
        {pokemon.map((p) => {
          //var nameU = capitalizeFirstLetter(`${p.name}`)
            return (
                <li>
                {/* <a href={`/pokemon/${id}`}>{nameU}</a> */}
                {/* below id is id no. of object in mongodb after connecting */}
                <a style={{fontSize:'32px',
                    color:'blue',
                    fontWeight:'bold' }}href={`/pokemon/${p.id}`}>{capitalizeFirstLetter(`${p.name}`)}</a><br /> 
                <form action={`/pokemon/${p._id}?_method=Delete`} method="POST">
                <input type='submit' value='DELETE'/>
                 </form>
               <a href={`/pokemon/${p.id}/edit`}>Edit this Pokemon</a>
                </li>

            )
        })}
       
        </div> 
        
    )
  }
}
// module.exports = Index;