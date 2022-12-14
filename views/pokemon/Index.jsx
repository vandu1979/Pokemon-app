// const React = require('react');
// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//   };
// class Index extends React.Component {
//   render() {
//       const { pokemon } = this.props;
//       return (
//               <div style={myStyle}>
//               <h1> See All The Pokemon! </h1>
//               <ul>
//                 {pokemon.map((pokemon, id) => {
//                     return(
//                        <li>
//                         <a href= {`/pokemon/${id}`}>{pokemon.name}</a>
                        
//                        </li> 
//                     )

//                 })}
//                
               
//               </ul>
//               </div>
//       );
//   }
// }

// module.exports = Index;
import React, { Component } from 'react'
const headerStyle = {
    backgroundColor: '#000000',
}
const bodyStyle = {
    width: "100%",
    hieght: "50%",
    backgroundColor: "green",
    color: "black",


}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default class Index extends Component {
  render() {
    console.log(this.props.pokemon)
    const { pokemon } = this.props;
    return (

      <div>
          <nav>
            <a href='/pokemon/new'> Create a new pokemon</a>
          </nav>
        <h> See All The pokemon!</h>
        {/* array.map(())  p as an individual pokemon of pokemon array */}
        {pokemon.map((p, id) => {
          //var nameU = capitalizeFirstLetter(`${p.name}`)
            return (
                <li>
                {/* <a href={`/pokemon/${id}`}>{nameU}</a> */}
                <a href={`/pokemon/${id}`}>{capitalizeFirstLetter(`${p.name}`)}</a>
                </li>



            )
        })}
        </div>
    )
  }
}
module.exports = Index;
