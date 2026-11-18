
import React, { Component } from 'react';

class Student extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "Rishal"
    };
  }

  displayName() {
    alert(this.state.name);
  }

  render() {
    return (
      <div>
        <h2>Student Details</h2>
        <p>Name: {this.state.name}</p>

        <button onClick={() => this.displayName()}>
          Display Name
        </button>
      </div>
    );
  }
}

export default Student;
