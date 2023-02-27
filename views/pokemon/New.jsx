import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
  
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /><br/><br/>

          image: <input type="text" name="img" src="img" /><br/><br/>
                    
                <input type="submit" name="" value="Create Pokemon"/><br/><br/>
      </form>
      <a href="/pokemon/new">Back to main Page</a>
        
        </div>
    )
  }
}

// module.exports = New;