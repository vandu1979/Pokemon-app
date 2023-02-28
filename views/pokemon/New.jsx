import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <html style={{
        margin: '0 auto',
        backgroundImage: `url("https://w0.peakpx.com/wallpaper/550/560/HD-wallpaper-pikachu-w-human-face-colored-pokemon-face-human-pikachu-thumbnail.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div>
        <h1>New Pokemon Page</h1>
  
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /><br/><br/>

          image: <input type="text" name="img" src="img" /><br/><br/>
                    
                <input type="submit" name="" value="Create Pokemon"/><br/><br/>
      </form>
      <a href="/pokemon/new">Back to main Page</a>
        
        </div>
        </html> 
        
    )
  }
}

// module.exports = New;