
import React, { Component } from 'react'

const headerStyle = {
    backgroundColor: "orangered",
}
const bodyStyle = {
    width: "100%",
    hieght: "50%",
    backgroundColor: "chartreuse",
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
        {/* <style style={{backgroundColor: "lightblue"}}></style> */}
          <nav>
            <a href='/pokemon/new'> Create a new pokemon</a>
          </nav>
        <h style={{color: "red"}}> See All The pokemon!</h>
        {/* array.map(())  p as an individual pokemon of pokemon array */}
        <ul>
        {pokemon.map((p) => {
          //var nameU = capitalizeFirstLetter(`${p.name}`)
            return (
                <li>
                {/* <a href={`/pokemon/${id}`}>{nameU}</a> */}
                {/* below id is id no. of object in mongodb after connecting */}
                <a href={`/pokemon/${p.id}`}>{capitalizeFirstLetter(`${p.name}`)}</a><br /> 
                <form action={`/pokemon/${p._id}?_method=Delete`} method="POST">
                <input type='submit' value='DELETE'/>
                 </form>
               <a href={`/pokemon/${p.id}/edit`}>Edit this Pokemon</a>
                </li>



            )
        })}
        </ul>
        </div>
    )
  }
}
// module.exports = Index;