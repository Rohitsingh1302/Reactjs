import React, { Component } from "react";

class ClassCounters extends Component {
  constructor() {
    super();
    this.state = {
      countA: 0,
      countB: 0
    };
  }

  handleIncA = () => {
    this.setState({ countA: this.state.countA + 1 });
  };

  handleIncB = () => {
    this.setState({ countB: this.state.countB + 1 });
  };

  render() {
    return (
      <>
        <h2>Class Component Counters</h2>

        <button onClick={this.handleIncA}>Increment A</button>
        <p>Counter A Value: {this.state.countA}</p>

        <button onClick={this.handleIncB}>Increment B</button>
        <p>Counter B Value: {this.state.countB}</p>
      </>
    );
  }
}

export default ClassCounters;

