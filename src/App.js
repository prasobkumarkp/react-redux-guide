import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Stephanie", age: 26 },
      { name: "Manu", age: 29 },
    ],
    otherState: "this will get overwritten in useState but not in state",
  });

  const [otherState, setOtherState] = useState("other some value");
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maxmillian", age: 29 },
        { name: "Stephanie", age: 27 },
        { name: "Manu", age: 30 },
      ],
    });
    // reactHook
    // this will not merge with the state, and will overwriting the state.
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={switchNameHandler}>Switch names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
};

export default App;
