import React, { Component } from "react";
import "./Info.css";

//Helper function that receives the array of cast members
//Returns an array of JSX Elements, each representing an li element
const makeCastList = (cast) => {
  return cast.map((ele, index) => <li key={index}>{ele}</li>);
};

class Info extends Component {
  render() {
    //Destructure props.move, grabbing title, director, and cast array fields
    const { title, director, cast } = this.props.movie;

    //Build and return the Info Component
    return (
      <div className="Info">
        <h2>{title}</h2>
        <span className="director">Directed by: {director}</span>
        <h3 className="cast-tag">Cast</h3>
        <ul className="cast-list">{makeCastList(cast)}</ul>{/* Call the helper function to get the list-items */}
      </div>
    );
  }
}

export default Info;
