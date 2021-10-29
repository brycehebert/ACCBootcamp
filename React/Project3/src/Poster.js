import React, { Component } from "react";
import "./Poster.css"

class Poster extends Component {
  render() {
    //Destructure props.movie, grabbing the title and image fields 
    const {image, title} = this.props.movie;

    //Return the Poster Component
    //Using image and title in an img element
    return(
      <div className="Poster cropped">
        <img src={image} alt={title} />
      </div>
    );
  }
}

export default Poster;