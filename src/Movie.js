import React, { Component } from 'react';


class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      image: "",
      imdbLink: ""
    }
    //this.getMovie = this.getMovie.bind(this);
  }

  getMovie = (event) => {
    //event.preventDefault();
    if(event.keyCode === 13){
      console.log("enter");
      const movie = event.target.value;
      console.log(movie);
      const apiKey = 'aa3aa587';
      const rootEndpoint = `http://www.omdbapi.com/?apikey=${apiKey}`;
      const endpoint = rootEndpoint + `&s=${movie}`; //not ', it is `

      fetch(endpoint)
        .then(response => response.json())
        .then(data => {

          if(data.Response === 'True') {
            console.log(data);

            const firstResult = data.Search[0];
            console.log(firstResult);

            const imdbLink = `https://www.imdb.com/title/${firstResult.imdbID}/`;

            this.setState ({
              title: firstResult.Title,
              year: firstResult.Year,
              image: <img src={firstResult.Poster} />,
              imdbLink: <a href={imdbLink}>IMDB Link</a>
            })
          } else {
            console.log("no title");
            this.setState({
              title: "Cannot find the title"
            })
          }
        })
    }
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '18px',
      margin: '18px'
    }
    return(
      <div style={style}>
        <body>
    <aside id="ui-control">
        <h1>no.2 </h1>
      <h2>Search for a movie</h2>
      <input name="movie" type="text" placeholder="Type a movie name and press Enter"
       onKeyDown={this.getMovie} />
       <button id="get-movie">Enter</button>
    </aside>

    <main>
      <p>The movie information will appear below...</p>
      <article>
        <section id="movie-title">{this.state.title}</section>
        <section id="movie-year">{this.state.year}</section>
        <section id="movie-link">{this.state.imdbLink}</section>
        <section id="movie-image">{this.state.image}</section>
      </article>
    </main>
  </body>
      </div>
    )
  }
}

export default Movie;
