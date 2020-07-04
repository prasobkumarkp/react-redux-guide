import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 228 },
      { name: "Stephanie", age: 26 },
      { name: "Manu", age: 29 },
    ],
    otherSate: "some other value",
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 29 },
        { name: "Stephanie", age: 27 },
        { name: "Manu", age: 30 },
      ],
    });
    // this will merge with the state, not overwriting the state.
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* this can efficiency issue */}
        <button onClick={() => this.switchNameHandler("Prasob")}>
          Switch names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Prasob!")}
        >
          Hobby : Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
}

export default App;
