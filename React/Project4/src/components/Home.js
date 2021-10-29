import React, { Component } from "react";
import {Link} from "react-router-dom";
//Images
import food from "../assets/images/food.jpg";

class Home extends Component {
  componentDidMount() {
    document.title = "Home"
  }

  render() {
    return (
      <div className="Home">
        <h1>The Breakfast Restaurant</h1>
        <img src={food} alt="Illustrations of various food items." />
        <h3>We server the most delicious breakfast food you will ever find!</h3>

        <p>
          Established in 2002, The Breakfast Restaurant is a contemporary cafe that appeals even to the pickiest of
          eaters (that means you!) Whether you want eggs benedict, sausage, bacon, cereal, or just a regular cup of
          coffee, we've got it all.
        </p>
        <p>
          We are passionate about excellence, and we have a desire to serve you with consistent quality that you won't
          find anywhere else.
        </p>
        <p>
          We want you to feel at home. You can expect to feel a level of comfort and warmth form out nicely decorated
          dining area. We have comfortable chairs, old-fashioned wooden tables, and other wonderful aspects that are
          simply unmatched anywhere else. We even have a patio area for our guests who need a little sunshine in their
          lives.
        </p>
        <p>
          To see our menu, click <Link to="/menu">here.</Link>
        </p>
        <p>
          Are you interested in catering or ordering to go? If so click <Link to="/catering">here.</Link>
        </p>
      </div>
    );
  }
}

export default Home;
