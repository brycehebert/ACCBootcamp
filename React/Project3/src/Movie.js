import React, { Component } from "react";
import Poster from "./Poster";
import Info from "./Info";
import "./Movie.css";

class Movie extends Component {
  render() {
    //Destructure props to grab the current movie object
    const { movie } = this.props;

    //Return the Movie Component built from Poster and Info Components
    //Send the current movie object to Poster and Info
    return (
      <div className="Movie">
        <Poster movie={movie} />
        <Info movie={movie} />
      </div>
    );
  }
}

export default Movie;
