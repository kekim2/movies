import React, { Component } from 'react';
import Weather from './Weather';
import Movie from './Movie';
class App extends Component {
  
  render() {
    const style = {
      color: 'red',
      background: 'blue'
    }

    return (
      
    <div>
      <div>
        <h1 ><center>The portfolio that be able to find information using API skill.</center></h1>
      <Weather />
      </div>
      <div >
      <Movie />
      </div>
      </div>
    );
  }
}

export default App;