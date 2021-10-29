import React, { Component } from "react";
import "./App.css";
//import { movies } from "./fakeData";

class App extends Component {
  constructor(props) {
    super(props);

    // let movieRows = [];

    // movies.forEach((movie) => {
    //   const movieRow = (
    //     <div key={movie.id}>
    //       <img src={movie.poster_src} alt="poster" />
    //       {movie.title}
    //     </div>
    //   );
    //   movieRows.push(movieRow);
    // });

    this.state = {
      rows: []
    };
  }

  performSearch(searchTerm) {
    const url = `https://api.themoviedb.org/3`
    const movieRoute = `/search/movie?api_key=b8d78f0e544e12bd0d4253aeade71eda&query=${searchTerm}`
    const endpoint = url + movieRoute

    fetch(endpoint)
    .then(response => response.json())
    .then(searchResults => {
      let movieRows = [];

      searchResults.results.forEach((movie) => {
        const {id, poster_path, title, overview} = movie;
        const movieRow = (
          <div key={id}>
            <div className="movie-title">
              <h2>{title}</h2>
            </div>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="poster" />
            <div className="movie-overview">
              <p>{overview}</p>
            </div>
          </div>
        );
        movieRows.push(movieRow);
        });

      this.setState({ rows: movieRows })

    })
    .catch(err => console.log(err))
  }

  searchChangeHandler = (event) => {
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Search</h1>
        <input type="text" placeholder="Enter Your Movie" id="inputField" onChange={this.searchChangeHandler} />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
