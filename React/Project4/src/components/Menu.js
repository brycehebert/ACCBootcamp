import React, { Component } from "react";
import { Link } from "react-router-dom";
//Images
import breakfast1 from "../assets/images/breakfast1.jpg";
import breakfast2 from "../assets/images/breakfast2.jpg";
import breakfast3 from "../assets/images/breakfast3.jpg";
import breakfast4 from "../assets/images/breakfast4.jpg";

class Menu extends Component {
  componentDidMount() {
    document.title = "Menu";
  }
  render() {
    return (
      <div className="Menu">
        <h1>The Menu</h1>
        <h3>The Ultimate Breakfast</h3>
        <img src={breakfast1} alt="The Ultimate Breakfast" />
        <p>
          Are you hungry? I mean <em>really</em> hungry? If so, we recommend you pick this dish! Fluffy pancakes, eggs
          over easy, crispy bacon, refried beans, a heapin' mountain of fried potatoes, and an omelette with green and
          red bell peppers. Comes with a side of tomato and avocado.
        </p>
        <h3>Bacon and Eggs</h3>
        <img src={breakfast2} alt="Bacon and Eggs" />
        <p>You can't go wrong with the classics. Two eggs served over easy and two slices of crispy bacon.</p>
        <h3>Plain and Simple Eggs</h3>
        <img src={breakfast3} alt="Plain and Simple Eggs" />
        <p>Looking for something filled with protein? Two eggs served any way you like.</p>
        <h3>The Pancake Feast</h3>
        <img src={breakfast4} alt="The Pancake Feast" />
        <p>
          Talk about a carb overload! Seven stacks of mini pancakes shaped like hearts. Comes with a side of maple syrup
          and butter.
        </p>
        <p>
          To go back to the home page, click <Link to="/">here.</Link>
        </p>
        <p>
          Are you interested in catering or ordering to go? If so click <Link to="/catering">here.</Link>
        </p>
      </div>
    );
  }
}

export default Menu;
