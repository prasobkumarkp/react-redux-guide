import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Person name={'Prasob'} age={'29'} />
      <Person name={'Prasob'} age={'29'} >My hobby is codding...!</Person>
    </div>
  );

  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello'))
}

export default App;
