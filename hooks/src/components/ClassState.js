import React, { Component } from 'react';

export default class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleAddOne = () => {
    this.setState((prevState, nextState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <div className="col">
        <h2>Un état.., une classe dans react js</h2>
        <p className="text-success">Classe State : {this.state.counter}</p>
        <button className="btn btn-success mb-4" onClick={this.handleAddOne}>
          State dans class
        </button>
      </div>
    );
  }
}
