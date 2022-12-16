import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div>
        <h1>Edit Pokemon</h1>
        {/* the form has default POST method, we use method that with PUT */}
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={pokemon.name}/><br/>

          image: <input type="text" name="img" src="img" defaultValue={pokemon.img}/><br/>
                    
                 <input type="submit" value="submit changes"/>
      </form>
      </div>
    )
  }
}
