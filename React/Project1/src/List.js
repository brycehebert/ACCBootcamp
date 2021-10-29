import React from "react";
import "./List.css"

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <h1>Garfield's favorite foods</h1>

        <ul>
          <li>Pepperoni Pizza</li>
          <li>Spaghetti with meatballs</li>
          <li>Jumbo shrimp</li>
          <li>Lobster with filet mignon</li>
        </ul>
        <h1>Things that Garfield hates</h1>
        <ol>
          <li>Mondays</li>
          <li>Spiders</li>
          <li>Raisins</li>
          <li>Jon singing in the shower</li>
        </ol>
      </div>
    );
  }
}
export default List;
