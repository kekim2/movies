import React, { Component } from 'react';


class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: "",
      temperature: ""
    }
    this.getWeather = this.getWeather.bind(this);
  }

  render(){
    const style = {
      border: '1px solid black',
      padding: '18px',
      margin: '18px'
    }
    return(
      <div style={style}>
      <body>
    <aside id="ui-control">
        <h1>no.1</h1>
      <h2>Enter a city name</h2>
      <form onSubmit={this.getWeather}>
        <input name="city" type="text" placeholder="Type the name of the city"/>
        <button id="get-weather" >Get weather</button>
      </form>
    </aside>

    <main>
      <article>The weather is: <span id="current-weather">{this.state.weather}</span></article>
      <article>The temperature is: <span id="current-temperature">{this.state.temperature}</span></article>
    </main>
  </body>
  </div>
    )
  }

  getWeather = (event) => {
    event.preventDefault(); // prevent refresh all page
    const apiKey = 'cda6eec08ccd6643c34c42650d15dcb4';
    const rootEndpoint = `https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}`;
    const city = event.target.elements.city.value;
    const endpoint = rootEndpoint
        + `&units=metric`
        + `&q=${city}`;
    console.log('Endpoint:', endpoint);

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log(`Current weather: ${data.weather[0].description}`);
        console.log(`Current temperature: ${data.main.temp}`);
      // set the state
       this.setState({
        weather: data.weather[0].description,
        temperature: data.main.temp
      })
    });
  }
}




export default Weather;