import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Page</h1>
  
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /><br/>
          Color: <input type="text" name="color" /><br/>
          Is Ready To Play: <input type="checkbox" name="readyToPlay" /><br/>            
                       <input type="submit" name="" value="Create pokemon"/>
      </form>
      <a href="/pokemon/new">Back to main Page</a>
        
        </div>
    )
  }
}

module.exports = New;
