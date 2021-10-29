import React, { Component } from "react";

const NumberButton = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ number: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    return (
      <div className="RandomNumber">
        <h1>Clicker Game</h1>
        <h1>Number is {this.state.number}</h1>
        <h2>If you hit 7, it's game over!</h2>
        {this.state.number !== 7 ? <NumberButton onClick={this.handleClick} text="Random Number" /> : <h2>Game Over!</h2>}
      </div>
    );
  }
}

export default RandomNumber;
